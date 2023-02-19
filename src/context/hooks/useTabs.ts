import { useState } from 'react'

const useTabs = () => {
  const [value, setValue] = useState<number>(0)

  const onChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const onBack = () => setValue(0)
  
  return {
    value, 
    onChange,
    onBack
  }
}
export default useTabs
