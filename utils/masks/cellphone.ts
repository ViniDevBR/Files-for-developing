export function cellphoneMask(value: string) {
  const onlyNumbers = value.replace(/\D/g, '')

  // console.log(onlyNumbers, onlyNumbers.length)
  if (onlyNumbers.length === 3) {
    const regex = /^(\d{2})(\d{1})$/
    const pattern = '($1) $2'
    
    return onlyNumbers.replace(regex, pattern)
  }
  if (onlyNumbers.length === 8) {
    const regex = /^(\d{2})(\d{5})(\d{1})$/
    const pattern = '($1) $2-$3'
    
    return onlyNumbers.replace(regex, pattern)
  }
  // const regex = /^(\d{2})(\d{5})(\d{4})$/

  return value
}
//(00) 00000-0000

export function cellphoneMask2(value: string) {
  const onlyNumbers = value.replace(/\D/g, '')
  
  const regex = /^(\d{2})(\d{2})(\d{5})(\d{4})$/
  const pattern = '+$1 ($2) $3-$4'

  return onlyNumbers.replace(regex, pattern)
}

export function cellphoneMask3(value: string) {
  const onlyNumbers = value.replace(/\D/g, '')
  const regex = /^(\S{3})(\d{2})(\d{5})(\d{4})$/
  const pattern = '$1 ($2) $3-$4'

  return onlyNumbers.replace(regex, pattern)
}
// +55 (19) 98310-0871
