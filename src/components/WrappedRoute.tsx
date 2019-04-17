import * as React from 'react'
import { Route, RouteProps } from 'react-router'
import styled from '../theme/styled'

import { NavBar } from './NavBar'

interface IWrappedRoute extends RouteProps {
  component: React.ComponentClass<any>
}

const renderNoMainContainerWrapper = (Component: React.ComponentClass) => (props: RouteProps) =>
  <MainWrapper>
    <NavBar {...props}/>
    <Component {...props}/>
  </MainWrapper>

const renderWrapper = (Component: React.ComponentClass) => (props: RouteProps) =>
  <MainWrapper>
    <NavBar {...props}/>
    <MainContainer>
      <Component {...props}/>
    </MainContainer>
  </MainWrapper>

export const NoMainContainerRoute = ({ component, ...rest } : IWrappedRoute) =>
  <Route {...rest} render={renderNoMainContainerWrapper(component)}/>

export const WrappedRoute = ({ component, ...rest } : IWrappedRoute) =>
  <Route {...rest} render={renderWrapper(component)}/>

const MainWrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  margin: auto;
  max-width: 980px;
`
const MainContainer = styled.main`
  margin: 20px;
`
