export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay = 500
) {
  let timeoutID: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

// SEMPRE USAR COM USECALLBACK PARA NAO RECRIAR O ID DO TIMER
// ISSO É SOMENTE PARA FUNÇOES, PARA USO DE INPUTS TEM O HOOK USEDEBOUNCE
const searchFn = useCallback(debounce(onSearch, debounceDelay), [])
