import styled from 'styled-components/native'

interface TextProps {
  weight?: '300' | '400' | '500' | '700'
  color?: string
  size?: number
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) => weight ? `Inter_${weight}` : 'Inter_400'};
  color: ${({ color, theme }) => color || theme.COLORS.WHITE};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
`
//Change the name of the font using this on the App.tsx
const [fontsLoaded] = useFonts({
    Inter_300: Inter_300Light,
    Inter_400: Inter_400Regular,
    Inter_500: Inter_500Medium,
    Inter_700: Inter_700Bold,
  })
