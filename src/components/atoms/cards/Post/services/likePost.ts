import { getFetch } from '@/utils'
import { getToken } from '@/utils/localStorage'

const likePost = async (postId: string) => {
  return getFetch(`/posts/like/${postId}`, 'PUT', {
    authorization: getToken('mui-social-app')
  })
}
export default likePost
