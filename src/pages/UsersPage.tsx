import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { IStores } from '../stores'
import { IUser } from '../interfaces/user'

// import { Button } from '../elements/Button'

interface IUsersPageInjectedProps {
  users: IUser[]
  getUsers: () => void
}

class UsersPageClass extends React.PureComponent<{}> {
  private get injected() {
    return this.props as IUsersPageInjectedProps
  }
  public componentDidMount() {
    this.injected.getUsers()
  }
  public render() {
    const { users } = this.injected
    return (
      <UsersPageContainer>
        <header>
          <h1>Users</h1>
        </header>
        <UsersList>
          { users.map((user: IUser) =>
          <UsersListItem>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </UsersListItem>
          )}
        </UsersList>
      </UsersPageContainer>
    )
  }
}

const UsersPageContainer = styled.div`
`

const UsersList = styled.ul`

`

const UsersListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
  & > p {
    margin: 0 10px 0 0;
  }
`

export const UsersPage = inject((stores: IStores) => ({
  users: stores.userStore.users,
  getUsers: stores.userStore.getUsers,
}))(UsersPageClass)
