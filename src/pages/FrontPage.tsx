import React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { ShowcaseComponents } from '../components/ShowcaseComponents'

import { Stores } from '../stores'
import { AuthStore } from '../stores/AuthStore'

interface IProps {
  authStore?: AuthStore,
}

@inject((stores: Stores) => ({
  authStore: stores.authStore,
}))
export class FrontPage extends React.PureComponent<IProps> {
  render() {
    const { loggedInUser } = this.props.authStore!
    return (
      <Container>
        <header>
          <h1>Hi there!</h1>
        </header>
        <p>
          This is my example React bootstrap.
        </p>
        { !loggedInUser.name ?
        <p><u>You are not logged in.</u></p> :
        <div>
          <p><u>Name</u>: {loggedInUser.name}</p>
          <p><u>Email</u>: {loggedInUser.email}</p>
          <p><u>Privileges</u>: {loggedInUser.privileges}</p>
        </div>
        }
        <ShowcaseComponents />
      </Container>
    )
  }
}

const Container = styled.div`
`
