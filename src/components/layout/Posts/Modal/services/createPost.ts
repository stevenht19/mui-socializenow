import { Post } from '@/models'
import { getFetch } from '@/utils'
import { getToken } from '@/utils/localStorage'
import { CreatePost } from '../types'

export const createPost = async (post: CreatePost, author: CreatePost['author']): Promise<Post> => {
  const formData = new FormData()

  formData.append('text', post.text)
  formData.append('author', author)

  if (post?.image) formData.append('image', post.image)
  if (post.feeling) formData.append('feeling', post.feeling)

  return await getFetch('/posts/create', 'POST', {
    authorization: getToken('mui-social-app')!
  }, formData)

}