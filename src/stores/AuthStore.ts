import { action, computed, runInAction, observable } from 'mobx'
import * as api from '../api/api'

import { IUser, ILoginCredentials, IJwt } from '../interfaces/user'

const EMPTY_USER = {
  name: '',
  email: '',
} as IUser

export interface IAuthStore {
  loggedInUser: IUser
  jwt: IJwt
  isAuthenticated: boolean
  logInUser: (credentials: ILoginCredentials) => void
}

export class AuthStoreClass implements IAuthStore {
  @observable loggedInUser = EMPTY_USER
  @observable jwt = { expires: -1, token: '' }

  @action
  logInUser = async (credentials: ILoginCredentials) => {
    const result = await api.logInUser(credentials)
    runInAction(() => {
      if (result) {
        this.loggedInUser = result.user
        this.jwt = result.jwt
      }
    })
  }

  @computed
  get isAuthenticated() {
    return this.loggedInUser.name !== ''
  }
}

export const authStore = new AuthStoreClass()
