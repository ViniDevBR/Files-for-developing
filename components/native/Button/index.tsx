/REACT
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
//STYLED COMPONENTS
import { Container } from './styles'
import { Text } from '../Text'
import { useTheme } from 'styled-components'

interface IProps extends TouchableOpacityProps {
  title: string
  variant?: 'exit'
  isLoading?: boolean
}

export function Button({ variant, title, isLoading, ...props }: IProps) {
  const { COLORS } = useTheme()

  return (
    <Container variant={variant} {...props} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color={COLORS.TEXT_DISABLED}/>
      ) : (
        <Text size={20} weight='700' color={props.disabled ? COLORS.TEXT_DISABLED : COLORS.WHITE}>
          {title}
        </Text>
      )}
    </Container>
  )
}
