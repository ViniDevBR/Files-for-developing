export function cpfMask(value: string) {
  const onlyNumbers = value.replace(/\D/g, '')

  // console.log(onlyNumbers, onlyNumbers.length)

  if (onlyNumbers.length === 4) {
    const regex = /^(\d{3})(\d{1})$/
    const result = '$1.$2'

    return onlyNumbers.replace(regex, result)
  }
  if (onlyNumbers.length === 7) {
    const regex = /^(\d{3})(\d{3})(\d{1})$/
    const result = '$1.$2.$3'

    return onlyNumbers.replace(regex, result)
  }
  if (onlyNumbers.length === 10) {
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{1})$/
    const result = '$1.$2.$3-$4'

    return onlyNumbers.replace(regex, result)
  }
  // const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
  // const result = '$1.$2.$3-$4'

  return value
}
//12345678900
//000.000.000-00
