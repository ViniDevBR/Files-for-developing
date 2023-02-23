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
