import { action, runInAction, observable } from 'mobx'
import * as userApi from '../api/user.api'

import { IUser } from '../types/user'

export class UserStore {
  @observable users: IUser[] = []
  @observable loading = false

  @action
  getUsers = async () => {
    this.loading = true
    const result = await userApi.getUsers()
    runInAction(() => {
      this.users = result.users
      this.loading = false
    })
  }
}
