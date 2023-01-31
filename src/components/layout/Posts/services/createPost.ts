import { Post } from '@/models'

export type CreatePost = {
  text: string
  author: string
  picture?: string
  date: Date
}

export const createPost = async (post: CreatePost): Promise<Post> => {
  return await (await fetch('http://localhost:4000/posts/create', {
    method: 'POST',
    body: JSON.stringify(post)
  })).json()

}