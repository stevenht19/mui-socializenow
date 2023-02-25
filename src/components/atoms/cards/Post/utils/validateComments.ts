import { Comment, Account } from '@/models'

export const getComments = (
  comments: Comment[], 
  commentId: Comment['_id'], 
  authorId: Account['_id']
) => {
  return comments.map((comment) => {
    if (comment._id === commentId) {
      console.log(comment.likes?.includes(authorId))
      return {
        ...comment,
        likes: comment.likes?.includes(authorId) ? 
          comment.likes?.filter((id) => id !== authorId) : 
          comment.likes?.concat(authorId)
      } 
    }
    return comment
  })
}