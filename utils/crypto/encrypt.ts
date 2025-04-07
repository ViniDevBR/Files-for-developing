import CryptoES from 'crypto-es'
import { WordArray } from 'crypto-es/lib/core'

const secretMessage = 's2ad56vd9c6g395d'
// OBRIGATORIO SER 16 CARACTERES

export function encrypt(message: WordArray | string, key: string) {
  let resultadoFinal = ''
  const iv = CryptoES.lib.WordArray.random(16)

  const result = CryptoES.AES.encrypt(message, CryptoES.enc.Utf8.parse(key), {
    iv,
    padding: CryptoES.pad.Pkcs7
  })

  if (result.ciphertext) {
    resultadoFinal = iv.concat(result.ciphertext).toString(CryptoES.enc.Base64)
  }

  return resultadoFinal
}
