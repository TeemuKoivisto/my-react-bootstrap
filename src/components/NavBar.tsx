import * as React from 'react'
import { NavLink } from 'react-router-dom'

export class NavBar extends React.Component<{}, {}> {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Front page</NavLink></li>
          <li><NavLink to="/other">Other page</NavLink></li>
        </ul>
      </nav>
    )
  }
}
