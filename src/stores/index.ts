import { errorStore, IErrorStore } from './ErrorStore'
import { authStore, IAuthStore } from './AuthStore'

export interface IStores {
  errorStore: IErrorStore,
  authStore: IAuthStore
}

export const stores = {
  errorStore,
  authStore,
}
