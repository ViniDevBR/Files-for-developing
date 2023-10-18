import { styled, DefaultTheme } from 'styled-components/native'

interface TextProps {
  weight?:  keyof DefaultTheme['WEIGHT']
  color?: keyof DefaultTheme['COLORS']
  hexColor?: string
  size?: number
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme, weight }) => weight ? `Inter_${theme.WEIGHT[weight]}` : 'Inter_400'};
  color: ${({ theme, color, hexColor }) =>
    color ?
      theme.COLORS[color]
      :
      hexColor ?
        hexColor
        :
        theme.COLORS.TEXT};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  

//Change the name of the font using this on the App.tsx
const [fontsLoaded] = useFonts({
    Inter_300: Inter_300Light,
    Inter_400: Inter_400Regular,
    Inter_500: Inter_500Medium,
    Inter_700: Inter_700Bold,
  })

//Using Custom Fonts
const [fontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  })
