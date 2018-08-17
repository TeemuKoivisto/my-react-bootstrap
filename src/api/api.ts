import { errorStore } from '../stores/ErrorStore'
import { authStore } from '../stores/AuthStore'
import { IUser, ILoginCredentials, ILoginResponse } from '../interfaces/user'

const { REACT_APP_API_URL } = process.env
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}
const authenticatedHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${authStore.jwt.token}`
})

const createRequest = (url: string, options: any) : Promise<any> => {
  errorStore.resetError()
  return fetch(url, options)
    .then((res: any) => {
      if (res.status >= 400 && res.status < 600) {
        errorStore.setError(res.statusText, res.status)
        return undefined
      }
      return res.json()
    })
}

const get = <T>(url: string, headers = defaultHeaders) : Promise<T | undefined> =>
  createRequest(url, { headers, method: 'GET' })

const post = <T>(url: string, body: any, headers = defaultHeaders) : Promise<T | undefined> =>
  createRequest(url, { headers, method: 'POST', body: JSON.stringify(body) })

export const logInUser = (credentials: ILoginCredentials): Promise<ILoginResponse | undefined> =>
  post<ILoginResponse>(`${REACT_APP_API_URL}/login`, credentials)

export const getUsers = (): Promise<{users: IUser[]} | undefined> =>
  get<{users: IUser[]}>(`${REACT_APP_API_URL}/users`, authenticatedHeaders())

export const createUser = (payload: any): Promise<IUser | undefined> =>
  post<IUser>(`${REACT_APP_API_URL}/user`, payload, authenticatedHeaders())
