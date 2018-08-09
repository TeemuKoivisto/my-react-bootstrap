import * as React from 'react'
import { Route, RouteProps } from 'react-router'

import { NavBar } from './NavBar'

interface IWrappedRoute extends RouteProps{
  component: React.ComponentClass
}

const renderNoMainContainerWrapper = (Component: React.ComponentClass) => (props: RouteProps) =>
  <div className="main-wrapper">
    <NavBar />
    <Component {...props}/>
  </div>

const renderWrapper = (Component: React.ComponentClass) => (props: RouteProps) =>
  <div className="main-wrapper">
    <NavBar />
    <div className="main-container">
      <Component {...props}/>
    </div>
  </div>

export const NoMainContainerRoute = ({ component, ...rest } : IWrappedRoute) =>
  <Route {...rest} render={renderNoMainContainerWrapper(component)}/>

export const WrappedRoute = ({ component, ...rest } : IWrappedRoute) =>
  <Route {...rest} render={renderWrapper(component)}/>
