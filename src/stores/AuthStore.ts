import { action, computed, runInAction, observable } from 'mobx'
import * as userApi from '../api/user.api'

import { IUser, ILoginCredentials, IJwt } from '../types/user'

const EMPTY_USER = {
  name: '',
  email: '',
} as IUser

export interface IAuthStore {
  loggedInUser: IUser
  jwt: IJwt
  isAuthenticated: boolean
  logInUser: (credentials: ILoginCredentials) => Promise<boolean>
  logout: () => void
}

export class AuthStoreClass implements IAuthStore {
  @observable loggedInUser: IUser = EMPTY_USER
  @observable jwt = { expires: -1, token: '' }

  @action
  logInUser = async (credentials: ILoginCredentials) => {
    const result = await userApi.login(credentials)
    runInAction(() => {
      if (result) {
        this.loggedInUser = result.user
        this.jwt = result.jwt
      }
    })
    return result ? true : false
  }

  @action
  logout = () => {
    this.loggedInUser = EMPTY_USER
  }

  @computed
  get isAuthenticated() {
    return this.loggedInUser.name !== ''
  }
}

export const authStore = new AuthStoreClass()
