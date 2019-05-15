import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { Stores } from './stores'
import { confMobx } from './stores/mobxConf'

import { defaultTheme } from './theme/defaultTheme'
import { GlobalStyle } from './theme/GlobalStyle'

import { Routes } from './routes'

confMobx()

export const stores = new Stores()

render(
  <Provider {...stores}>
    <ThemeProvider theme={defaultTheme}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
