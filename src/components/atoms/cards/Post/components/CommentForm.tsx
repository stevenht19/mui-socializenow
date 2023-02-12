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
  incrementComments: () => void
}

export const CommentForm = ({ postId, incrementComments }: Props) => {
  const { account } = useAccount()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!account?._id) return

    addComment(postId, { ...data, author: account._id })
    mutate('/comments/' + postId)
    incrementComments()
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
