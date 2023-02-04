import Post from '@/models/Post'
import { CreatePost } from '../types'

export const createPost = async (post: CreatePost): Promise<Post> => {
  console.log(post)
  return await (await fetch('http://localhost:4000/posts/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })).json()
}