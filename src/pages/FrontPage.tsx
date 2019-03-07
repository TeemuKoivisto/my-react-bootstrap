import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { IStores } from '../stores'
import { IUser } from '../types/user'
// import { Button } from '../elements/Button'

interface IFrontPageInjectedProps {
  loggedInUser: IUser
}

interface IFrontPageState {
}

class FrontPageClass extends React.Component<{}, IFrontPageState> {
  private get injected() {
    return this.props as IFrontPageInjectedProps
  }
  public render() {
    const { loggedInUser } = this.injected
    return (
      <FrontPageContainer>
        <header>
          <h1>Hi there!</h1>
        </header>
        <p>
          This is my example React bootstrap.
        </p>
        { !loggedInUser.name ?
        <p>You are not logged in.</p> :
        <div>
          <p>Name: {loggedInUser.name}</p>
          <p>Email: {loggedInUser.email}</p>
          <p>Privileges: {loggedInUser.privileges}</p>
        </div>
        }
      </FrontPageContainer>
    )
  }
}

const FrontPageContainer = styled.div`
`

export const FrontPage = inject((stores: IStores) => ({
  loggedInUser: stores.authStore.loggedInUser,
}))(FrontPageClass)
