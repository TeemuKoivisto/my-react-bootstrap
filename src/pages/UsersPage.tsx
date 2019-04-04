import * as React from 'react'
import { inject, observer } from 'mobx-react'
import styled from '../theme/styled'

// import { ErrorOrSpinner } from '../components/ErrorOrSpinner'

import { Stores } from '../stores'
import { UserStore } from '../stores/UserStore'
import { IUser } from '../types/user'

interface IProps {
  userStore?: UserStore,
}

@inject((stores: Stores) => ({
  userStore: stores.userStore,
}))
@observer
export class UsersPage extends React.Component<IProps> {
  componentDidMount() {
    this.props.userStore!.getUsers()
  }
  render() {
    const { users, loading } = this.props.userStore!
    return (
      <UsersPageContainer>
        <header>
          <h1>Users</h1>
        </header>
        { loading ? 'Loading' :
        <UsersList>
          { users.map((user: IUser, i: number) =>
          <UsersListItem key={i}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </UsersListItem>
          )}
        </UsersList>
        }
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
