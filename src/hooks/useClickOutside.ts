import { RefObject, useEffect, useState } from 'react'

const useClickOutside = (
    ref : RefObject<HTMLElement | null>,
    onClickOutside: (event: MouseEvent | TouchEvent) => void,
    isActive: boolean) => {
  const [isListening, setListening] = useState(false)
  const handler = (event: MouseEvent | TouchEvent) => {
    const { current: el } = ref
    if (el && event.target && event.target instanceof HTMLElement && !el.contains(event.target)) {
      onClickOutside(event)
    }
  }
  function addHandlers() {
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
  }
  function removeHandlers() {
    document.removeEventListener('mousedown', handler)
    document.removeEventListener('touchstart', handler)
  }
  useEffect(() => {
    if (!isListening && isActive) {
      addHandlers()
      setListening(true)
    } else if (isListening && !isActive) {
      removeHandlers()
      setListening(false)
    }
    return () => {
      removeHandlers()
    }
  }, [ref, !onClickOutside, isActive])
}

export default useClickOutside
