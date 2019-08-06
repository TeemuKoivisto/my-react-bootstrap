import * as React from 'react'
import { Route, RouteProps, RouteComponentProps } from 'react-router'
import styled from '../theme/styled'

import { NavBar } from './NavBar'
import { Toaster } from './Toaster'

interface IWrappedRoute extends RouteProps {
  component: React.ComponentClass<any>
}

const renderNoMainContainerWrapper = (Component: React.ComponentClass) => (props: RouteComponentProps<any>) =>
  <MainWrapper>
    <NavBar {...props}/>
    <Toaster />
    <Component {...props}/>
  </MainWrapper>

const renderWrapper = (Component: React.ComponentClass) => (props: RouteComponentProps<any>) =>
  <MainWrapper>
    <NavBar {...props}/>
    <Toaster />
    <MainContainer>
      <Component {...props}/>
    </MainContainer>
  </MainWrapper>

export const NoMainContainerRoute = ({ component, ...rest } : IWrappedRoute) =>
  <Route {...rest} render={renderNoMainContainerWrapper(component)}/>

export const WrappedRoute = ({ component, ...rest } : IWrappedRoute) =>
  <Route {...rest} render={renderWrapper(component)}/>

const MainWrapper = styled.div`
`
const MainContainer = styled.main`
  margin: 40px auto 20px auto;
  max-width: 680px;
  @media only screen and (max-width: 720px) {
    margin: 40px 20px 20px 20px;
  }
`
