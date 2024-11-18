export function cepMask(value: string) {
  const onlyNumbers = value.replace(/\D/g, '')
  // console.log(onlyNumbers, onlyNumbers.length)

  if (onlyNumbers.length === 6) {
    const regex = /^(\d{5})(\d{1})$/
    const result = '$1-$2'

    return onlyNumbers.replace(regex, result)
  }

  return value
}
// 123455678
// 00000-000
