export function cnpjMask(value: string) {
  const onlyNumbers = value.replace(/\D/g, '')

  // console.log(onlyNumbers, onlyNumbers.length)
  
  if (onlyNumbers.length === 3) {
    const regex = /^(\d{2})(\d{1})$/
    const result = '$1.$2'

    return onlyNumbers.replace(regex, result)
  }
  if (onlyNumbers.length === 6) {
    const regex = /^(\d{2})(\d{3})(\d{1})$/
    const result = '$1.$2.$3'

    return onlyNumbers.replace(regex, result)
  }
  if (onlyNumbers.length === 9) {
    const regex = /^(\d{2})(\d{3})(\d{3})(\d{1})$/
    const result = '$1.$2.$3/$4'

    return onlyNumbers.replace(regex, result)
  }
  if (onlyNumbers.length === 13) {
    const regex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1})$/
    const result = '$1.$2.$3/$4-$5'

    return onlyNumbers.replace(regex, result)
  }
  // const regex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/
  // const result = '$1.$2.$3/$4-$5'

  return value
}
//12345678900000
//00.000.000/0000-00
