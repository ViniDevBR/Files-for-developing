import React, { ReactNode } from 'react'
import { View, ViewStyle, StyleProp } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  SharedValue,
} from 'react-native-reanimated'


interface IProps {
  isExpanded: SharedValue<boolean>
  children: ReactNode
  viewKey?: string
  style?: StyleProp<ViewStyle>
  duration?: number
}

export function Collapsible(props: IProps) {
  const {
    isExpanded,
    children,
    viewKey,
    style,
    duration = 500,
  } = props
 
  const height = useSharedValue(0)

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
    })
  )

  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
    width: '100%',
    overflow: 'hidden',
  }))

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[bodyStyle, style]}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height
        }}
        style={{
          width: '100%',
          position: 'absolute',
        }}
      >
        {children}
      </View>
    </Animated.View>
  )
}
