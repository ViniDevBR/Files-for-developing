import CryptoES from 'crypto-es'


export function decrypt<T>(ciphertext: string, key: string): T {
  const resultadoBase64 = CryptoES.enc.Base64.parse(ciphertext)
  const textoCifrado = CryptoES.lib.WordArray.create(resultadoBase64.words.slice(4), resultadoBase64.sigBytes - 16)
  const ivExtraido = resultadoBase64.words.slice(0, 4)

  const textoDescriptografado = CryptoES.AES.decrypt(
    { 
      ciphertext: textoCifrado, 
    }, 
    CryptoES.enc.Utf8.parse(key), 
    {
      iv: CryptoES.lib.WordArray.create(ivExtraido),
      padding: CryptoES.pad.Pkcs7
    }
  ).toString(CryptoES.enc.Utf8) as T

  return textoDescriptografado
}
