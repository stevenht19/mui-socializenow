import { Post } from '@/models'
import { getFetch } from '@/utils'
import { PostsAction } from '../reducers/postsReducer'
import { Types } from '../reducers/types'

export type Response = {
  docs: Post[]
  hasNextPage: boolean
}

export const getPosts = async (page: number, offset: number): Promise<PostsAction> => {
  return {
    type: Types.SET,
    payload: await getFetch(`/posts?page=${page}&offset=${offset}`) 
  }
}
