import styled, { css } from 'styled-components/native'

interface IButton {
  variant?: 'exit'
}

export const Container = styled.TouchableOpacity<IButton>`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 4px;

  ${({ disabled }) => disabled && css`
    background-color: ${({ theme }) => theme.COLORS.BUTTON_DISABLED};
  `}

  ${({ variant }) => variant === 'exit' && css`
    background-color: ${({ theme }) => theme.COLORS.RED_700};
  `}
`
