import { useState } from 'react'

type TLocaleStorageHook<D> = [D | null, (data: D) => void]

export function useLocaleStorge<D>(key: string, initial?: D): TLocaleStorageHook<D | null> {
  const [value, setStorage] = useState<D | null>(() => {
    const itemStorage = localStorage.getItem(key)
    const data = (itemStorage ? JSON.parse(itemStorage) : initial || {}) as D
    return data
  })

  function setValue(data: D | null) {
    localStorage.setItem(key, JSON.stringify(data))
    setStorage(data)
  }

  return [value, setValue]
}
