import React, { useEffect, useState } from 'react'
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
interface IState {
  defaultValues: ILoginCredentials
}

@inject((stores: Stores) => ({
  authStore: stores.authStore,
}))
export class LoginPage extends React.Component<IProps, IState> {
  state = {
    defaultValues: {
      email: '',
      password: '',
    }
  }
  componentDidMount() {
    if (this.props.authStore!.isAuthenticated) {
      this.props.history.push(this.props.location.pathname)
    }
  }
  handleLoginSubmit = async (values: ILoginCredentials) => {
    const success = await this.props.authStore!.logInUser(values)
    if (success) {
      this.props.history.push('')
    }
  }
  handleSetDefaultValues = (type: 'admin' | 'user') => () => {
    let newValues: ILoginCredentials
    if (type === 'admin') {
      newValues = {
        email: 'admin@asdf.fi',
        password: 'qwertyui',
      }
    } else {
      newValues = {
        email: 'morty@asdf.fi',
        password: 'asdfasdf',
      }
    }
    this.setState((oldState) => ({ ...oldState, defaultValues: newValues }))
  }
  render() {
    const { defaultValues } = this.state
    return (
      <section>
        <ShortcutButtonsContainer>
          <Button onClick={this.handleSetDefaultValues('admin')}>Admin login</Button>
          <Button onClick={this.handleSetDefaultValues('user')}>User login</Button>
        </ShortcutButtonsContainer>
        <LoginFormEl defaultValues={defaultValues} onSubmit={this.handleLoginSubmit}/>
      </section>
    )
  }
}

interface IFormProps {
  defaultValues: ILoginCredentials
  onSubmit: (formValues: ILoginCredentials) => void
}
function LoginFormEl(props: IFormProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const values = {
      email,
      password
    } as ILoginCredentials
    onSubmit(values)
  }
  const { defaultValues, onSubmit } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    setEmail(defaultValues.email)
    setPassword(defaultValues.password)
  }, [defaultValues])
  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginField>
        <label htmlFor="email">Email</label>
        <Input required placeholder={'Email'}
          type="email" icon={<MdEmail size={24}/>} iconPadding="38px" fullWidth
          value={email}
          onChange={val => setEmail(val)}/>
      </LoginField>
      <LoginField>
        <label htmlFor="password">Password</label>
        <Input required type="password" icon={<MdLock size={24}/>} iconPadding="38px" fullWidth
          value={password}
          onChange={val => setPassword(val)}/>
      </LoginField>
      <Button type="submit">Submit</Button>
    </LoginForm>
  )
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
