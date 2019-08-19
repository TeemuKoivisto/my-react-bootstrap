import { useEffect } from 'react'

function useScrollLock(isActive: boolean) {
  function getHtmlElement() {
    return document.querySelector('html')
  }
  useEffect(() => {
    const htmlElement = getHtmlElement()
    if (isActive) {
      htmlElement!.classList.add('scroll-lock')
    } else {
      htmlElement!.classList.remove('scroll-lock')
    }
  }, [isActive])
}

export default useScrollLock
