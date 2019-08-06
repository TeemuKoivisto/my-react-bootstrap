import { AuthStore } from './AuthStore'
import { UserStore } from './UserStore'
import { ToastStore } from './ToastStore'

export class Stores {
  authStore: AuthStore
  userStore: UserStore
  toastStore: ToastStore

  constructor() {
    this.authStore = new AuthStore()
    this.userStore = new UserStore()
    this.toastStore = new ToastStore()
  }
}
