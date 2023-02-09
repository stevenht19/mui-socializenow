import { useEffect } from 'react'

const useScroll = <T, >(y: () => number, dependecies: T[]) => {
  useEffect(() => {
    window.scroll({
      top: y()
    })
  }, dependecies)
}

export default useScroll