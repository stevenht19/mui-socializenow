import { useEffect } from 'react'
import { getState, saveState } from '@/utils/scrollStore'

const useScrollRestoration = () => {
  useEffect(() => {
    if (getState('Home')) {
      const scrollY = getState('Home')
      window.scrollTo(0, scrollY)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      saveState('Home', window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

}

export default useScrollRestoration