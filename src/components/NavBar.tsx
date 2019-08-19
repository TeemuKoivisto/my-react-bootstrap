import React from 'react'
import { NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
// import { css } from 'styled-components'
import styled from '../theme/styled'

import { AuthStore } from '../stores/AuthStore'

import { RouteComponentProps } from 'react-router'

interface IProps extends RouteComponentProps<{}> {
  className?: string
  authStore?: AuthStore,
}

export const NavBar = inject('authStore')(observer(function NavBar(props: IProps) {
  function handleLogout(e : React.MouseEvent<HTMLElement>) {
    authStore!.logout()
    history.push('')
  }
  const { className, authStore, history } = props
  const { isAuthenticated } = authStore!
  return (
    <NavContainer className={className}>
      <MainLinks>
        <Link to="/">Front page</Link>
        <Link to="/users">Users page</Link>
      </MainLinks>
      { isAuthenticated ?
      <Link to="#" role="button" onClick={handleLogout}>Logout</Link> :
      <Link to="/login">Login</Link>
      }
    </NavContainer>
  )
}))

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`
const Link = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.white };
  border: 1px solid ${({ theme }) => theme.color.textDark };
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.textDark };
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium };
  padding: 1rem;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.color.primary };
    color: ${({ theme }) => theme.color.white };
  }
  transition: 0.2s all;
`
const MainLinks = styled.div`
  display: flex;
  ${Link} {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`
