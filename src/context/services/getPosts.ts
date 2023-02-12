import { Post } from '@/models'

type Response = {
  type: 'sucess'
  posts: Post[]
}

export const getPosts = async (): Promise<Response['posts']> => {
  return fetch(`${import.meta.env.VITE_MONGO_API_URL}/posts`)
    .then(res => res.json())
}
