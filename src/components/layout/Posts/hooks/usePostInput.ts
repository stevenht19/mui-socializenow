import { useState } from 'react'
import { useAccount, usePosts } from '@/hooks'
import { createPost } from '../services/createPost'

const usePostInput = (action: () => void) => {
  const { account } = useAccount()
  const { addPost } = usePosts()
  const [value, setValue] = useState<string>('')

  const isDisabled = value.trim().length < 3

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (value?.trim()?.length < 3) return
    
    const post = await createPost({
      author: account!.id,
      text: value,
      date: new Date()
    })

    action()
    addPost(post)
  }

  return {
    value,
    isDisabled,
    onChange,
    handleSubmit
  }
}

export default usePostInput