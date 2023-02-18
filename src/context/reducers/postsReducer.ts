import { Account, Post } from '@/models'
import { Response } from '../services/getPosts'
import { PostsContextState } from '../Posts'
import { toggleLike } from '../utils'
import { Types } from './types'

export type PostsAction = {
  type: Types.SET,
  payload: Response
} | {
  type: Types.ADD,
  payload: {
    post: Post,
    author: Account
  }
} | {
  type: Types.COMMENT,
  payload: Post['_id']
} | {
  type: Types.LIKE
  payload: {
    postId: Post['_id'],
    userId: Account['_id']
  }
} | {
  type: Types.NEXT
}

export const postsReducer = (state: PostsContextState, action: PostsAction) => {
  switch (action.type) {
    case Types.SET:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.concat(action.payload.docs),
        hasMore: action.payload.hasNextPage
      }
    case Types.NEXT:
      return {
        ...state,
        page: state.page + 1
      }
    case Types.LIKE:
      return {
        ...state,
        posts: state.posts.map(post => {
          return (post._id === action.payload.postId) ? (
            {
              ...post,
              likes: toggleLike(post.likes, action.payload.userId)
            }
          ) : (post)
        })
      }
    case Types.COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return (post._id === action.payload) ? ({
            ...post,
            totalComments: post.totalComments + 1
          }) : post
        })
      }
    case Types.ADD:
      return {
        ...state,
        posts: [{ ...action.payload.post, author: action.payload.author }, ...state.posts]
      }
    default: return state
  }

}