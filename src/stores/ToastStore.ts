import { action, observable } from 'mobx'

import { IToast } from '../types/ui'

export class ToastStore {
  @observable toasts: IToast[] = []
  idCounter: number = 0

  @action createToast = (message: string, type: string = 'success', duration: number = 5000) => {
    const newToast = {
      id: this.idCounter,
      message,
      type,
      duration
    }
    this.idCounter += 1
    this.toasts.push(newToast)
  }
 
  @action removeToast = (id: number) => {
    this.toasts = this.toasts.filter(t => t.id !== id)
  }
}
