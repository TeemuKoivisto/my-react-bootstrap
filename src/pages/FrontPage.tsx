import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { IStores } from '../stores'
import { IUser, ILoginCredentials } from '../interfaces/user'

import { Button } from '../elements/Button'

interface IFrontPageInjectedProps {
  loggedInUser: IUser
  logInUser: (credentials: ILoginCredentials) => void
}

interface IFrontPageState {
  loginForm: ILoginCredentials
}

class FrontPageClass extends React.Component<{}, IFrontPageState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      loginForm: {
        email: '',
        password: '',
      }
    }
  }
  private get injected() {
    return this.props as IFrontPageInjectedProps
  }
  private handleInputChange = (field: 'email' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) : void => {
    const { loginForm } = this.state
    this.setState(Object.assign({}, { loginForm }, {
      loginForm: {
        [field]: e.currentTarget.value
      }
    }))
  }
  private handleLoginSubmit = (e: React.FormEvent) : void => {
    e.preventDefault()
    this.injected.logInUser(this.state.loginForm)
  }
  public render() {
    return (
      <section>
        <header>
          <h1>Hi there</h1>
        </header>
        <p>
          This is my example React bootstrap.
        </p>
        <LoginForm onSubmit={this.handleLoginSubmit}>
          <LoginField>
            <label>Email</label>
            <LoginInput type="text" onChange={this.handleInputChange('email')}/>
          </LoginField>
          <LoginField>
            <label>Password</label>
            <LoginInput type="password" onChange={this.handleInputChange('password')}/>
          </LoginField>
          <Button type="submit">Submit</Button>
        </LoginForm>
      </section>
    )
  }
}

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

export const FrontPage = inject((stores: IStores) => ({
  loggedInUser: stores.authStore.loggedInUser,
  logInUser: stores.authStore.logInUser,
}))(FrontPageClass)
