import { useState } from 'react'

const useBoolean = (initialState = false) => {
  const [boolean, setBoolean] = useState(initialState)

  const setTrue = () => { 
    setBoolean(true) 
  }

  const setFalse = () => { 
    setBoolean(false) 
  }

  const onToggle = () => { 
    setBoolean(bool => !bool) 
  }

  return {
    boolean,
    setTrue,
    setFalse,
    onToggle
  }
}
export default useBoolean