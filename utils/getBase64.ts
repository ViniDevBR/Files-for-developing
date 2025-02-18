import * as FileSystem from 'expo-file-system'
// ALWAYS CHECK EXPO DOCS TO SEE IF THERE IS SOME CHANGES

export async function getBase64(fileUri: string, options?: FileSystem.ReadingOptions) {
  return await FileSystem.readAsStringAsync(fileUri, options || { encoding: 'base64' })
}
