import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { IStores } from '../stores'
import { IUser } from '../interfaces/user'

import { ErrorOrSpinner } from '../components/ErrorOrSpinner'

// import { Button } from '../elements/Button'

interface IUsersPageInjectedProps {
  users: IUser[]
  loading: boolean
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
    const { users, loading } = this.injected
    return (
      <UsersPageContainer>
        <header>
          <h1>Users</h1>
        </header>
        <ErrorOrSpinner loading={loading}>
          <UsersList>
            { users.map((user: IUser, i: number) =>
            <UsersListItem key={i}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </UsersListItem>
            )}
          </UsersList>
        </ErrorOrSpinner>
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
  loading: stores.userStore.loading,
  getUsers: stores.userStore.getUsers,
}))(UsersPageClass)
