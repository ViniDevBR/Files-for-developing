import { cepMask } from './cep'
import { cnpjMask } from './cnpj'
import { cpfMask } from './cpf'
import { cellphoneMask3 } from './cellphone'
import { creditCardMask } from './creditCard'
import { cpfCnpjMask } from './cpfCnpj'
// import { timeMask } from './time'

export type TMasks = 'CPF' | 'CNPJ' | 'TIME' | 'BRL_PHONE_1' | 'CEP' | 'CARD' | 'CPF CNPJ'
export function mask(value: string, type?: TMasks) {
  if (!type) {
    return value
  }

  if (type === 'BRL_PHONE_1') {
    return cellphoneMask3(value)
  }
  if (type === 'CPF') {
    return cpfMask(value)
  }
  if (type === 'CEP') {
    return cepMask(value)
  }
  if (type === 'CNPJ') {
    return cnpjMask(value)
  }
  if (type === 'CARD') {
    return creditCardMask(value)
  }
  if (type === 'CPF CNPJ') {
    return cpfCnpjMask(value)
  }

  return value
}
