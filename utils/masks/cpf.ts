export function cpfMask(value: string) {
  const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
  const result = '$1.$2.$3-$4'

  return value.replace(regex, result)
}
//000.000.000-00
