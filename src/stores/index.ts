import { errorStore, IErrorStore } from './ErrorStore'
import { authStore, IAuthStore } from './AuthStore'
import { userStore, IUserStore } from './UserStore'

export interface IStores {
  errorStore: IErrorStore,
  authStore: IAuthStore
  userStore: IUserStore
}

export const stores = {
  errorStore,
  authStore,
  userStore,
}
