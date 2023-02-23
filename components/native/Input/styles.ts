mport styled, { css } from 'styled-components/native'

interface Props {
  isFocused: boolean
}

export const InputContainer = styled.View<Props>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 100%;
  padding: 0 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 16px;

  ${({ isFocused }) => isFocused && css`
    border-color: ${props => props.theme.COLORS.GRAY_500};
  `};
`

export const IconContainer = styled.Pressable`
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`

export const InputText = styled.TextInput<Props>`
  flex: 1;
  font-family: Inter_400;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  background-color: transparent;
`
