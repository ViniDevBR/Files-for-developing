import styled, { DefaultTheme } from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android'

interface ISafeArea {
  background?: keyof DefaultTheme['COLORS']
}

export const SafeArea = styled.SafeAreaView<ISafeArea>`
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: ${({ theme, background }) => background && theme.COLORS[background]};
`
