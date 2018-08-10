import { action, computed, observable } from 'mobx'

export interface IErrorStore {
  error: {
    msg: string
    statusCode: number
  }
  errorMsg: string
  setError: (msg: string, statusCode: number) => void
  resetError: () => void
}

const EMPTY_ERROR = {
  msg: '',
  statusCode: 0
}

export class ErrorStoreClass implements IErrorStore {

  @observable error = EMPTY_ERROR

  @computed get errorMsg() : string {
    if (this.error.statusCode === 404) {
      return 'Oho, täältä ei taida löytyä mitään.'
    }
    if (this.error.msg) {
      return `Hupsista, jokin taisi mennä rikki. Pahoittelut ja yritä jonkin ajan päästä uudestaan.`
    }
    return ''
  }

  @action setError = (msg: string, statusCode: number) => {
    // log error?
    this.error = {
      msg,
      statusCode
    }
  }

  @action resetError = () => {
    this.error = EMPTY_ERROR
  }
}

export const errorStore = new ErrorStoreClass()
