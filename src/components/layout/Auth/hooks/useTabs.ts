import { useState } from 'react'

const useTabs = () => {
  const [value, setValue] = useState<number>(0)

  const onChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  
  return {
    value, 
    onChange
  }
}

export default useTabs