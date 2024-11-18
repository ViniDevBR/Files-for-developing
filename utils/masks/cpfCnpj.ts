import { cnpjMask } from './cnpj'
import { cpfMask } from './cpf'

export function cpfCnpjMask(value: string) {
  if (!value || value === null || value.length === 0) {
    return value
  }

  const onlyNumbers = value.replace(/\D/g, '')

  if (onlyNumbers.length <= 11) {
    return cpfMask(value)
  }
  if (onlyNumbers.length >= 11) {
    return cnpjMask(value)
  }

  return value
}
