import { useEffect } from 'react'

function useTimeout(callback: () => void, delay: number) {
  useEffect(() => {
    if (delay !== null) {
      let id = setTimeout(callback, delay)
      return () => clearTimeout(id)
    }
    return () => undefined
  }, [delay])
}

export default useTimeout
