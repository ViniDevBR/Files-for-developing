import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type ScreenProps
  <T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

export type RootStackParamList = {
  Home: undefined

  ItemDetail: {
    Handle: number
  }
}
