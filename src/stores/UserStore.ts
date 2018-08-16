import { action, runInAction, observable } from 'mobx'
import * as api from '../api/api'

import { IUser } from '../interfaces/user'

export interface IUserStore {
  users: IUser[]
  getUsers: () => void
}

export class UserStoreClass implements IUserStore {
  @observable users: IUser[] = []

  @action
  getUsers = async () => {
    const { users } = await api.getUsers()
    runInAction(() => {
      this.users = users
    })
  }
}

export const userStore = new UserStoreClass()
