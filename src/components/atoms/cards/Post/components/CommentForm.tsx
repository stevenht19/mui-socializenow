import { mutate } from 'swr'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { useAccount } from '@/hooks'
import { Post } from '@/models'
import { withAuthModal } from '@/hocs'
import { CommentInput } from './CommentInput'
import { addComment } from '../services'
import { Inputs } from '../types'

const CommentInputWithModal = withAuthModal(CommentInput)

type Props = {
  postId: Post['_id']
  incrementComments: (postId: Post['_id']) => void
}

export const CommentForm = ({ 
  postId, 
  incrementComments 
}: Props) => {
  const { account } = useAccount()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!account?._id) return

    await addComment(postId, { ...data, author: account._id })
    incrementComments(postId)
    mutate('/comments/' + postId)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
