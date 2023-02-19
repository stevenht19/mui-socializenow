import { Post } from '@/models'
import { getFetch } from '@/utils'
import { getToken } from '@/utils/localStorage'
import { CreatePost } from '../types'

export const createPost = async (post: CreatePost, author: CreatePost['author']) => {
  try {
    const formData = new FormData()

    formData.append('text', post.text)
    formData.append('author', author)
  
    if (post?.image) formData.append('image', post.image)
    if (post.feeling) formData.append('feeling', post.feeling)
  
    const postToSave: Post = await getFetch('/posts/create', 'POST', {
      authorization: getToken('mui-social-app')!
    }, formData) 

    return postToSave
  } catch (error) {
    if (error instanceof Error)
    throw new Error(error.message)
  }

}