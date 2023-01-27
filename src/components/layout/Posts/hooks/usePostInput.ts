import { useAccount, usePosts } from '@/hooks'
import { useState } from 'react'

const usePostInput = (action: () => void) => {
  const { account } = useAccount()
  const { addPost } = usePosts()
  const [value, setValue] = useState<string>('')

  const isDisabled = value.trim().length < 3

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (value?.trim()?.length < 3) return
    
    action()
    addPost({ user: account!, text: value })
  }

  return {
    value,
    isDisabled,
    onChange,
    handleSubmit
  }
}

export default usePostInput