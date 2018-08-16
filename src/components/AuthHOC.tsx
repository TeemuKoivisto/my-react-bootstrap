import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { inject } from 'mobx-react'
import { RouteComponentProps } from 'react-router'

import { IStores } from '../stores'

interface IAuthHOCProps {

}

interface IAuthHOCInjectedProps extends IAuthHOCProps {
  isAuthenticated: boolean
}

export function AuthHOC <P extends IAuthHOCProps>(WrappedComponent: React.ComponentType<P>) {
  class AuthHOCClass extends React.Component<IAuthHOCProps, {}> {
    get injected() {
      return this.props as IAuthHOCInjectedProps & RouteComponentProps<any>
    }
    render() {
      const { isAuthenticated, location } = this.injected
      return isAuthenticated ?
        <WrappedComponent {...this.props} /> :
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
    }
  }

  return inject((stores: IStores) => ({
    isAuthenticated: stores.authStore.isAuthenticated
  }))(AuthHOCClass)
}
