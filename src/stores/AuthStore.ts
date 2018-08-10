import { action, runInAction, observable } from 'mobx'
import * as api from '../api/api'

import { IUser, ILoginCredentials } from '../interfaces/user'

const EMPTY_USER = {
  name: '',
  email: '',
} as IUser

export interface IAuthStore {
  loggedInUser: IUser
  logInUser: (credentials: ILoginCredentials) => void
}

export class AuthStoreClass implements IAuthStore {
  @observable loggedInUser = EMPTY_USER

  @action
  logInUser = async (credentials: ILoginCredentials) => {
    const result = await api.logInUser(credentials)
    runInAction(() => {
      this.loggedInUser = result
    })
  }
}

export const authStore = new AuthStoreClass()
