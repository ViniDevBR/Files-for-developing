import { ValidationError } from '../types/errors'
import { isAxiosError } from 'axios'
import Toast from 'react-native-toast-message'
import { Alert } from 'react-native'
//

interface ValidationError {
  error: string
  error_description: string
  message: string
  Message: string
}

export function getErrors(error: unknown) {
  if (isAxiosError<ValidationError>(error)) {
    // console.log('REQUEST -->', JSON.stringify(error.config, null, 2))
    const data = error.response?.data
    const dataString = String(error.response?.data)

    // if (dataString.includes('acesso negado devido a credenciais')) {
    //   return Toast.show({
    //     type: 'info',
    //     text1: 'Token expirado',
    //     text2: 'Por favor, refaça o login',
    //   })
    // }

    const detailError = error.response?.data.error_description
    const detailError2 = error.response?.data.error
    const detailError3 = error.response?.data.message
    const detailError4 = error.response?.data.Message

    const message = detailError || detailError2 || detailError3 || detailError4

    const isHTML = dataString.includes('<html')
  
    const lengthTagTitle = 7
    const getStartTitle = dataString.indexOf('<title>') + lengthTagTitle
    const getEndTitle = dataString.indexOf('</title>')
  
    const title = dataString.slice(getStartTitle, getEndTitle)
  
    Toast.show({
      type: 'error',
      text1: 'Erro',
      text2: isHTML ? title : message,
    })

    console.log('ERRO INTERNO AXIOS', data)

    return error
  }

  console.error('ERRO GENERICO -->', error)
  Toast.show({
    type: 'error',
    text1: 'Erro inesperado',
    text2: 'Entre em contato com o time de TI',
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const typedError = error as any
  const JSON1 = JSON.stringify(typedError, null, 2)
  const JSON2 = JSON.stringify(typedError.response, null, 2)

  Alert.alert('Erro', `ERROR_1: ${JSON1}, ERROR_2: ${JSON2}`)

  return typedError
}
