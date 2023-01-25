import { useState } from 'react'

const useTabs = (bool: boolean) => {
  const [value, setValue] = useState<number>(bool ? 1 : 0)

  const onChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  
  return {
    value, 
    onChange
  }
}

export default useTabs