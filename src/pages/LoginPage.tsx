import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { RouteComponentProps } from 'react-router'

import { IStores } from '../stores'
import { ILoginCredentials } from '../types/user'

import { Button } from '../elements/Button'

interface ILoginPageProps extends RouteComponentProps<{}> {
}

interface ILoginPageInjectedProps extends ILoginPageProps {
  isAuthenticated: boolean
  logInUser: (credentials: ILoginCredentials) => Promise<boolean>
}

interface ILoginPageState {
  loginForm: ILoginCredentials
}

class LoginPageClass extends React.Component<ILoginPageProps, ILoginPageState> {
  constructor(props: ILoginPageProps) {
    super(props)
    this.state = {
      loginForm: {
        email: '',
        password: '',
      }
    }
  }
  private get injected() {
    return this.props as ILoginPageInjectedProps
  }
  public componentDidMount() {
    if (this.injected.isAuthenticated) {
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
    const success = await this.injected.logInUser(this.state.loginForm)
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

export const LoginPage = inject((stores: IStores) => ({
  isAuthenticated: stores.authStore.isAuthenticated,
  logInUser: stores.authStore.logInUser,
}))(LoginPageClass)
