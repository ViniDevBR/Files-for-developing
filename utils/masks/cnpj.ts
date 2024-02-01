export function cnpjMask(value: string) {
  const regex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/
  const result = '$1.$2.$3/$4-$5'

  return value.replace(regex, result)
}
//57.146.179/0001-07
