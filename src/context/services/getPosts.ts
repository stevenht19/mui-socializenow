import { Post } from '@/models'
import { getFetch } from '@/utils'

export type Response = {
  docs: Post[]
  hasNextPage: boolean
}

export const getPosts = async (page: number): Promise<Response> => {
  return getFetch(`/posts?page=${page}`) 
}
