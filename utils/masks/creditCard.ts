export function creditCardMaskEmpty(value: string) {
  const onlyNumbers = value.replace(/\D/g, '')
  const regex = /^(\d{4})(\d{4})(\d{4})(\d{4})$/
  const result = '**** **** **** $4'

  return onlyNumbers.replace(regex, result)
}
//**** **** **** 4444

export function creditCardMask(value: string) {
  const onlyNumbers = value.replace(/\D/g, '')

  // console.log(onlyNumbers, onlyNumbers.length)
  if (onlyNumbers.length === 5) {
    const regex = /^(\d{4})(\d{1})$/
    const result = '$1 $2'
    
    return onlyNumbers.replace(regex, result)
  }
  
  if (onlyNumbers.length === 9) {
    const regex = /^(\d{4})(\d{4})(\d{1})$/
    const result = '$1 $2 $3'

    return onlyNumbers.replace(regex, result)
  }
  if (onlyNumbers.length === 13) {
    const regex = /^(\d{4})(\d{4})(\d{4})(\d{1})$/
    const result = '$1 $2 $3 $4'

    return onlyNumbers.replace(regex, result)
  }
  
  // const regex = /^(\d{4})(\d{4})(\d{4})(\d{4})$/
  // const result = '$1 $2 $3 $4'

  return value
}
//4444 4444 4444 4444
