import { Linking, Platform } from 'react-native'

async function openMap() {
    const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' })
    const latLng = `${infos.latitude},${infos.longitude}`
    const label = infos.nome
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    })


    await Linking.openURL(url!)
  }
