import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FrontPage } from './FrontPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FrontPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})
