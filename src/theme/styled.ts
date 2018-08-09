import * as styledComponents from 'styled-components'

import { ITheme } from '../interfaces/theme'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>

export { css, injectGlobal, keyframes, ThemeProvider }
export default styled
