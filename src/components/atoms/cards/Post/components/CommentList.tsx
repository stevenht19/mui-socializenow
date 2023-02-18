import { Stack } from '@mui/material'
import { Post } from '@/models'
import { Spinner } from '@/components/atoms/Spinner'
import { CommentItem } from './CommentItem'
import { useComments } from '../hooks'

const CommentList = (props: { postId: Post['_id'] }) => {
  const { postId } = props
  const { comments, isLoading } = useComments(postId)

  if (isLoading) {
    return (
      <Spinner mx={2} />
    )
  }

  return <>
    {
      comments.length ? (
        <Stack spacing={2} mx={2.5} py={2}>
          {
            comments.map((props) => (
              <CommentItem
                key={props._id}
                postId={postId}
                {...props}
              />
            ))
          }
        </Stack>
      ) : null
    }
  </>
}
export default CommentList