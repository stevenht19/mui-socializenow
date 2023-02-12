import { List } from '@mui/material'
import { Post } from '@/models'
import { Spinner } from '@/components/atoms/Spinner'
import { CommentItem } from './CommentItem'
import { useComments } from '../hooks'

export const CommentList = (props: { postId: Post['_id'] }) => {
  const { comments, isLoading } = useComments(props.postId)

  if (isLoading) {
    return (
      <Spinner mx={2} />
    )
  }

  return (
    <List>
      {
        comments.map((props) => (
          <CommentItem
            key={props._id}
            {...props}
          />
        ))
      }
    </List>
  )
}
