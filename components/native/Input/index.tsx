//REACT
import { useState } from 'react'
// STYLED COMPONENTS
import { IconContainer, InputContainer, InputText } from './styles'
import { useTheme } from 'styled-components'
import { ComponentProps } from 'react'
import { TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

export interface IInput extends TextInputProps {
  icon?: ComponentProps<typeof Feather>['name']
  name: string
  value?: string
  onPress?: VoidFunction
}

export function Input({ onPress, ...props }: IInput) {
  //REACT HOOKS
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isFilled, setIsFilled] = useState<boolean>(false)
  //LIBS
  const { COLORS } = useTheme()

  //OTHERS
  function handleInputFocus() {
    setIsFocused(true)
  }
  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!props.value)
  }

  return (
    <InputContainer isFocused={isFocused || isFilled}>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={props.value}
        //selectionColor={COLORS.BACKGROUND}
        {...props}
      />

      <IconContainer onPress={onPress}>
        <Feather
          name={props.icon}
          size={24}
          color={isFocused || isFilled ? COLORS.BACKGROUND : COLORS.GRAY_500}
        />
      </IconContainer>
    </InputContainer>
  )
}
