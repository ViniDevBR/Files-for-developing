export function cellPhoneMask(value: string) {
  const regex = /^(\d{2})(\d{5})(\d{4})$/
  const result = '($1) $2-$3'

  return value.replace(regex, result)
}
//(00) 00000-0000
