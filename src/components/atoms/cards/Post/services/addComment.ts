import { Post } from '@/models'
import { getFetch } from '@/utils'
import { getToken } from '@/utils/localStorage'
import { CreateComment } from '../types'

const addComment = async (postId: Post['_id'], comment: CreateComment) => {
  await getFetch(`/posts/comments/${postId}`, 'POST', {
    'Content-Type': 'application/json',
    authorization: getToken('mui-social-app')!
  }, JSON.stringify(comment))
}

export default addComment