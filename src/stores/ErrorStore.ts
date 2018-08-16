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
    return this.error.msg
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
