import { action, computed, runInAction, observable } from 'mobx'
import * as userApi from '../api/user.api'

import { IUser, ILoginCredentials, IJwt } from '../types/user'

const EMPTY_USER = {
  name: '',
  email: '',
} as IUser

export class AuthStore {
  @observable loggedInUser: IUser = EMPTY_USER
  @observable jwt: IJwt = { expires: -1, token: '' }

  @action
  logInUser = async (credentials: ILoginCredentials) => {
    const result = await userApi.login(credentials)
    runInAction(() => {
      this.loggedInUser = result.user
      this.jwt = result.jwt
    })
    return result
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
