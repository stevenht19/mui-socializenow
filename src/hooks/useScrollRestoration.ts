import { useEffect } from 'react'

const useScrollRestoration = (n: number) => {
  return useEffect(() => {
    window.scrollTo(n, n)
  }, [])
}
export default useScrollRestoration