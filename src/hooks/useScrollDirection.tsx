import { useState, useEffect, useCallback } from 'react'

export function useScrollDirection(element: HTMLElement | Element | Window | null = null): {
  distance: number
  direction: 'up' | 'down'
} {
  const [y, setY] = useState<number>(getDirY())
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')

  const handleDirection = useCallback(() => {
    const scrollCurrent = getDirY()

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

  function getDirY(): number {
    return element instanceof Window ? element.scrollY : element?.scrollTop || 0
  }

  return {
    distance: y,
    direction: scrollDir
  }
}
