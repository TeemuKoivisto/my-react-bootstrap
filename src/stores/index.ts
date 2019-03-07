import { AuthStore } from './AuthStore'
import { UserStore } from './UserStore'

export class Stores {
  public authStore: AuthStore
  public userStore: UserStore

  constructor() {
    this.authStore = new AuthStore()
    this.userStore = new UserStore()
  }
}
