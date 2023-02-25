import { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Post } from '@/models'
import { TextField } from '@mui/material'
import { useAccount } from '@/hooks'
import { withAuthModal } from '@/hocs'
import { CommentInput } from './CommentInput'
import { addComment } from '../services'
import { Inputs } from '../types'
import { useComments } from '../hooks'

const CommentInputWithModal = withAuthModal(CommentInput)

type Props = {
  postId: Post['_id']
  incrementComments: (postId: Post['_id']) => void
}

const CommentForm = ({ 
  postId, 
  incrementComments 
}: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const { account } = useAccount()
  const { comments, mutate } = useComments(postId)
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!account?._id) return

    await mutate([...comments, { 
      _id: String(Date.now()), 
      author: account, 
      text: data.text,
      likes: null,
      createdAt: new Date()
    }], { revalidate: false })

    formRef.current?.reset()

    incrementComments(postId)   

    await addComment(postId, { ...data, author: account._id })

    mutate()
   
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <CommentInputWithModal>
        <TextField
          placeholder='Write a comment'
          autoComplete='off'
          fullWidth
          {...register('text', { required: true })}
        />
      </CommentInputWithModal>
    </form>
  )
}

export default CommentForm
