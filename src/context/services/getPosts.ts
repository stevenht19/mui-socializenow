import { Post } from '@/models'

type Response = {
  type: 'sucess'
  posts: Post[]
}

export const getPosts = async (): Promise<Response['posts']> => {
  return fetch('http://localhost:4000/posts')
    .then(res => res.json())
    .then((res: Response) => res.posts)
}
