import { Post } from '@/models'
import { CreateComment } from '../types'

const addComment = async (postId: Post['_id'], comment: CreateComment) => {
  await fetch(import.meta.env.VITE_MONGO_API_URL + '/posts/comments/' + postId, {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('mui-social-app')!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment)
  })
}

export default addComment