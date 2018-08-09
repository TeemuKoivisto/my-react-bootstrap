import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '../theme/styled'

export class NavBar extends React.Component<{}, {}> {
  render() {
    return (
      <NavContainer>
        <NavLinkList>
          <NavListItem><NavListLink to="/">Front page</NavListLink></NavListItem>
          <NavListItem><NavListLink to="/other">Other page</NavListLink></NavListItem>
        </NavLinkList>
      </NavContainer>
    )
  }
}

const NavContainer = styled.nav`
  align-items: flex-start;
  display: flex;
  padding: 20px;
`

const NavLinkList = styled.ul`
  display: flex;
`

const NavListItem = styled.li`
  margin-right: 10px;
  margin-top: 20px;
  &:last-child {
    margin-right: 0;
  }
`

const NavListLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.white };
  border: 1px solid ${({ theme }) => theme.color.secondary };
  color: ${({ theme }) => theme.color.textDark };
  padding: 20px 10px 20px 10px;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white };
  }

`
