import * as FileSystem from 'expo-file-system'
// ALWAYS CHECK EXPO DOCS TO SEE IF THERE IS SOME CHANGES

export function getBase64(fileUri: string, options: FileSystem.ReadingOptions) {
  return FileSystem.readAsStringAsync(fileUri, options)
}
