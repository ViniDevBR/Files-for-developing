import { RefObject, useEffect } from 'react'

export function useFocusFieldOnLoad(ref?: RefObject<HTMLInputElement>, timeout?: number) {
  useEffect(() => {
    if (ref?.current) {
      setTimeout(() => {
        ref?.current?.focus()
      }, timeout || 0);
    }
  }, [ref])
}
