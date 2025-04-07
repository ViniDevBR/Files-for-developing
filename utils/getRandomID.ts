import * as Crypto from 'expo-crypto'

export function getRandomID(arrayId: string[]): string {
  const newID = Crypto.randomUUID()

  if (arrayId.includes(newID)) {
    return getRandomID(arrayId)
  }

  return newID
}
