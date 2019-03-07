import { errorStore } from '../stores/ErrorStore'
import { authStore } from '../stores/AuthStore'

const { REACT_APP_API_URL } = process.env
export const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}
export const authenticatedHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${authStore.jwt.token}`
})

const createRequest = (path: string, options: any) : Promise<any> => {
  errorStore.resetError()
  return fetch(`${REACT_APP_API_URL}/${path}`, options)
    .then((res: any) => {
      if (res.status >= 400 && res.status < 600) {
        errorStore.setError(res.statusText, res.status)
        return undefined
      }
      return res.json()
    })
}

export const get = <T>(path: string, headers = defaultHeaders) : Promise<T | undefined> =>
  createRequest(path, { headers, method: 'GET' })

export const post = <T>(path: string, body: any, headers = defaultHeaders) : Promise<T | undefined> =>
  createRequest(path, { headers, method: 'POST', body: JSON.stringify(body) })
