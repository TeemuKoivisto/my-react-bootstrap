import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { inject } from 'mobx-react'
import { css } from 'styled-components'
import styled from '../theme/styled'

import { Stores } from '../stores'
import { AuthStore } from '../stores/AuthStore'

interface IProps {
  className?: string
  authStore?: AuthStore,
}

@inject((stores: Stores) => ({
  authStore: stores.authStore,
}))
export class NavBar extends React.PureComponent<IProps> {
  handleLogout = (e : React.MouseEvent<HTMLElement>) : void => {
    this.props.authStore!.logout()
  }
  render() {
    const { isAuthenticated } = this.props.authStore!
    return (
      <NavContainer className={this.props.className}>
        <NavLinkList>
          <NavListItem><NavListLink to="/">Front page</NavListLink></NavListItem>
          <NavListItem><NavListLink to="/users">Users page</NavListLink></NavListItem>
        </NavLinkList>
        { isAuthenticated ?
        <LogoutButton onClick={this.handleLogout}>Logout</LogoutButton> :
        <NavListLink to="/login">Login</NavListLink>
        }
      </NavContainer>
    )
  }
}

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: 20px;
`
const NavLinkList = styled.ul`
  display: flex;
`
const NavListItem = styled.li`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`
const linkStyles = css`
  background-color: ${({ theme }) => theme.color.white };
  border: 1px solid ${({ theme }) => theme.color.secondary };
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.textDark };
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.small };
  height: 100%;
  padding: 20px 10px 20px 10px;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white };
  }
`
const LogoutButton = styled.button`
  ${linkStyles}
`
const NavListLink = styled(NavLink)`
  ${linkStyles}
`
