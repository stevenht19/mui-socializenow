import { Post } from '@/models'
import { getFetch } from '@/utils'

export type Response = {
  docs: Post[]
  hasNextPage: boolean
}

export const getPosts = async (page: number, offset: number, limit: number): Promise<Response> => {
  return getFetch(`/posts?page=${page}&offset=${offset}&limit=${limit}`) 
}
