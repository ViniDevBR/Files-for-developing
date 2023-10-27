/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import dark from '../theme/dark'

declare module 'styled-components' {
  type ThemeType = typeof dark

  export interface DefaultTheme extends ThemeType {}
}

REACT NATIVE

import 'styled-components/native'
import dark from '../theme/dark'

declare module 'styled-components/native' {
  type ThemeType = typeof dark

  export interface DefaultTheme extends ThemeType {}
}
