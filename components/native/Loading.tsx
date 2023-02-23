import { View, ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'

export function Loading() {
  const { COLORS } = useTheme()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND
      }}
    >
      <ActivityIndicator color={COLORS.TEXT_DISABLED}/>
    </View>
  )
}
