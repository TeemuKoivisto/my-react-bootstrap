import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

// import { Button } from '../elements/Button'

import { Stores } from '../stores'
import { AuthStore } from '../stores/AuthStore'

interface IProps {
  authStore?: AuthStore,
}

@inject((stores: Stores) => ({
  authStore: stores.authStore,
}))
export class FrontPage extends React.PureComponent<IProps> {
  public render() {
    const { loggedInUser } = this.props.authStore!
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
