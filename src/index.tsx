import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './theme/defaultTheme'

import { Routes } from './routes'

import './index.css'

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <Routes />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
)
