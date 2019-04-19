import { AuthStore } from './AuthStore'
import { UserStore } from './UserStore'

export class Stores {
  authStore: AuthStore
  userStore: UserStore

  constructor() {
    this.authStore = new AuthStore()
    this.userStore = new UserStore()
  }
}
