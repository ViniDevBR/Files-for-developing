import * as Location from 'expo-location'
import Toast from 'react-native-toast-message'


export async function getLocation() {
  const gpsOn = await Location.hasServicesEnabledAsync()

  if (!gpsOn) {
    Toast.show({
      type: 'error',
      text1: 'GPS Desligado',
      text2: 'Por favor, ligue o GPS'
    })
    return undefined
  }

  const { status } = await Location.requestForegroundPermissionsAsync()
  if (status !== 'granted') {
    Toast.show({
      type: 'error',
      text1: 'Problemas no GPS',
      text2: 'Libere o uso do GPS'
    })
    return undefined
  }

  const location = await Location.getCurrentPositionAsync()
  return location
}
