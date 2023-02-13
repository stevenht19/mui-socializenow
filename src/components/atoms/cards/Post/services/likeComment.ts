import { Comment } from '@/models'

const likeComment = async (commentId: Comment['_id']) => {
  return fetch(import.meta.env.VITE_MONGO_API_URL + '/posts/comments/like/' + commentId, {
    method: 'PUT',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('mui-social-app')!
    }
  })
}

export default likeComment