import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'
import { MdEmail, MdLock } from 'react-icons/md'

import { Button } from '../elements/Button'
import { Input } from '../elements/Input'

import { Stores } from '../stores'
import { AuthStore } from '../stores/AuthStore'
import { ILoginCredentials } from '../types/user'
import { RouteComponentProps } from 'react-router'

interface IProps extends RouteComponentProps<{}> {
  authStore?: AuthStore,
}
interface IState extends ILoginCredentials {
  email: string
  password: string
}

@inject((stores: Stores) => ({
  authStore: stores.authStore,
}))
export class LoginPage extends React.Component<IProps, IState> {
  state = {
    email: '',
    password: '',
  }
  componentDidMount() {
    if (this.props.authStore!.isAuthenticated) {
      this.props.history.push(this.props.location.pathname)
    }
  }
  handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await this.props.authStore!.logInUser(this.state)
    if (success) {
      this.props.history.push('')
    }
  }
  handleSetDefaultValues = (type: 'admin' | 'user') => () => {
    if (type === 'admin') {
      this.setState({
        email: 'admin@asdf.fi',
        password: 'qwertyui',
      })
    }
    if (type === 'user') {
      this.setState({
        email: 'morty@asdf.fi',
        password: 'asdfasdf',
      })
    }
  }
  render() {
    return (
      <section>
        <ShortcutButtonsContainer>
          <Button onClick={this.handleSetDefaultValues('admin')}>Admin login</Button>
          <Button onClick={this.handleSetDefaultValues('user')}>User login</Button>
        </ShortcutButtonsContainer>
        <LoginForm onSubmit={this.handleLoginSubmit}>
          <LoginField>
            <label htmlFor="email">Email</label>
            <Input required placeholder={'Email'}
              type="email" icon={<MdEmail size={24}/>} iconPadding="38px" fullWidth
              value={this.state.email || ''}
              onChange={val => this.setState({ email: val })}/>
          </LoginField>
          <LoginField>
            <label htmlFor="password">Password</label>
            <Input required type="password" icon={<MdLock size={24}/>} iconPadding="38px" fullWidth
              value={this.state.password || ''}
              onChange={val => this.setState({ password: val })}/>
          </LoginField>
          <Button type="submit">Submit</Button>
        </LoginForm>
      </section>
    )
  }
}

const ShortcutButtonsContainer = styled.div`
  display: flex;
  ${Button} {
    margin-right: 1rem;
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
    max-width: 240px;
    width: 240px;
  }
`
const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 240px;
`
