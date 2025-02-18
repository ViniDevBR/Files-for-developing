import * as FileSystem from 'expo-file-system'
// ALWAYS CHECK EXPO DOCS TO SEE IF THERE IS SOME CHANGES

export async function getBase64(fileUri: string, options?: FileSystem.ReadingOptions) {
  if (!fileUri || fileUri === null || fileUri.length === 0) {
    return ''
  }
  
  return await FileSystem.readAsStringAsync(fileUri, options || { encoding: 'base64' })
}
