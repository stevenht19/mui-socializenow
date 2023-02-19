import { useState } from 'react'

const useError = () => {
  const [error, setError] = useState<string | null>(null)

  const onError = (err: string) => {
    setError(err)
  }
  
  return {
    error,
    onError
  }
}

export default useError