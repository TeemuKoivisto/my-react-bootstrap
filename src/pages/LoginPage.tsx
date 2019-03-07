import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { Button } from '../elements/Button'

import { Stores } from '../stores'
import { AuthStore } from '../stores/AuthStore'
import { ILoginCredentials } from '../types/user'
import { RouteComponentProps } from 'react-router'

interface IProps extends RouteComponentProps<{}> {
  authStore?: AuthStore,
}
interface IState {
  loginForm: ILoginCredentials
}

@inject((stores: Stores) => ({
  authStore: stores.authStore,
}))
export class LoginPage extends React.Component<IProps, IState> {
  state = {
    loginForm: {
      email: '',
      password: '',
    }
  }
  public componentDidMount() {
    if (this.props.authStore!.isAuthenticated) {
      this.props.history.push(this.props.location.pathname)
    }
  }
  private handleInputChange = (field: 'email' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) : void => {
    const { loginForm } = this.state
    this.setState({
      loginForm: {
        ...loginForm,
        [field]: e.currentTarget.value
      }
    })
  }
  private handleLoginSubmit = async (e: React.FormEvent) : Promise<void> => {
    e.preventDefault()
    const success = await this.props.authStore!.logInUser(this.state.loginForm)
    if (success) {
      this.props.history.push('')
    }
  }
  private handleSetDefaultValues = (type: 'admin' | 'user') => (e: React.MouseEvent) : void => {
    if (type === 'admin') {
      this.setState({
        loginForm: {
          email: 'admin@asdf.fi',
          password: 'qwertyui',
        }
      })
    }
    if (type === 'user') {
      this.setState({
        loginForm: {
          email: 'morty@asdf.fi',
          password: 'asdfasdf',
        }
      })
    }
  }
  public render() {
    const { loginForm: { email, password } } = this.state
    return (
      <section>
        <LoginButtonsContainer>
          <Button onClick={this.handleSetDefaultValues('admin')}>Admin login</Button>
          <Button onClick={this.handleSetDefaultValues('user')}>User login</Button>
        </LoginButtonsContainer>
        <LoginForm onSubmit={this.handleLoginSubmit}>
          <LoginField>
            <label>Email</label>
            <LoginInput type="text" value={email} onChange={this.handleInputChange('email')}/>
          </LoginField>
          <LoginField>
            <label>Password</label>
            <LoginInput type="password" value={password} onChange={this.handleInputChange('password')}/>
          </LoginField>
          <Button type="submit">Submit</Button>
        </LoginForm>
      </section>
    )
  }
}

const LoginButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${Button} {
    margin-bottom: 10px;
  }
`
const LoginForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 150px 150px 150px;
  ${Button} {
    margin-top: 20px;
    width: 100%;
  }
`
const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 150px;
  width: 100%;
`
const LoginInput = styled.input`
  box-sizing: border-box;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.medium };
  max-width: 150px;
  width: 100%;
`
