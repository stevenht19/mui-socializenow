import { Post } from '@/models'
import { CreatePost } from '../types'

export const createPost = async (post: CreatePost, author: CreatePost['author']): Promise<Post> => {
  const formData = new FormData()

  formData.append('text', post.text)
  formData.append('author', author)

  if (post?.image) formData.append('image', post.image)
  if (post.feeling) formData.append('feeling', post.feeling)

  return await (await fetch('http://localhost:4000/posts/create', {
    method: 'POST',
    body: formData
  })).json()

}