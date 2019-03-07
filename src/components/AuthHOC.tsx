import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { inject } from 'mobx-react'
import { RouteComponentProps } from 'react-router'

import { IStores } from '../stores'

interface IProps {

}

interface IInjectedProps extends IProps {
  isAuthenticated: boolean
}

export function AuthHOC <P extends IProps>(WrappedComponent: React.ComponentType<P>) {
  class AuthHOCClass extends React.Component<IProps, {}> {
    get injected() {
      return this.props as IInjectedProps & RouteComponentProps<any>
    }
    render() {
      const { isAuthenticated, location } = this.injected
      return isAuthenticated ?
        <WrappedComponent {...this.props as IProps & P} /> :
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
    }
  }

  return inject((stores: IStores) => ({
    isAuthenticated: stores.authStore.isAuthenticated
  }))(AuthHOCClass)
}
