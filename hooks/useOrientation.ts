export function useOrientation() {
  const [orientation, setOrientation] = useState('LANDSCAPE');

  const determineAndSetOrientation = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
  }

  useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener('change', determineAndSetOrientation);

    return () => {
      Dimensions.removeEventListener('change', determineAndSetOrientation)
    }
  }, []);
}

import {useWindowDimensions} from 'react-native'

type DeviceOrientation = 'portrait' | 'landscape'

export function useDeviceOrientation(): DeviceOrientation {
  const {width, height} = useWindowDimensions()

  if (width >= height) {
    return 'landscape'
  }
  return 'portrait'
}
