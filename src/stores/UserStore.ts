import { action, runInAction, observable } from 'mobx'
import * as userApi from '../api/user.api'

import { IUser } from '../types/user'

export interface IUserStore {
  users: IUser[]
  loading: boolean
  getUsers: () => void
}

export class UserStoreClass implements IUserStore {
  @observable users: IUser[] = []
  @observable loading = false

  @action
  getUsers = async () => {
    this.loading = true
    const response = await userApi.getUsers()
    runInAction(() => {
      if (response) this.users = response.users
      this.loading = false
    })
  }
}

export const userStore = new UserStoreClass()
