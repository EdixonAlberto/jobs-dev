import { useState, useEffect, useCallback } from 'react'

export function useScrollDirection(element: HTMLElement | null = null): 'up' | 'down' {
  const [y, setY] = useState<number>(element?.scrollTop || 0)
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')

  const handleDirection = useCallback(() => {
    const scrollCurrent = element!.scrollTop

    if (y > scrollCurrent) setScrollDir('up')
    else if (y < scrollCurrent) setScrollDir('down')

    setY(scrollCurrent)
  }, [element, y])

  useEffect(() => {
    if (element) {
      element.addEventListener('scroll', () => handleDirection())
      return () => {
        element.removeEventListener('scroll', () => handleDirection())
      }
    }
  }, [element, y])

  return scrollDir
}
