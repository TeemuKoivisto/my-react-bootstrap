import { IUser, ILoginCredentials, ILoginResponse } from '../types/user'

import {
  authenticatedHeaders,
  get,
  post
} from './methods'

export const login = (credentials: ILoginCredentials) =>
  post<ILoginResponse>('login', credentials)

export const getUsers = () =>
  get<{users: IUser[]}>('users', authenticatedHeaders())

export const createUser = (payload: any) =>
  post<IUser>('user', payload, authenticatedHeaders())
