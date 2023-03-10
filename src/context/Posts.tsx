import { createContext, useEffect, useReducer } from 'react'
import { Account, Post } from '@/models'
import { getPosts } from '@/context/services/getPosts'
import { postsReducer } from './reducers/postsReducer'
import { Types } from './reducers/types'

export type PostsContextState = {
  posts: Post[]
  page: number
  limit: number
  offset: number
  isLoading: boolean
  hasMore: boolean
}

type PostContextType = PostsContextState & {
  addPost: (post: Post, author: Account) => void
  handleLike: (postId: Post['_id'], userId?: Account['_id']) => void
  incrementComments: (postId: Post['_id']) => void
  onNext: () => void
}

const initialState = {
  posts: [],
  page: 1,
  offset: 0,
  limit: 6,
  hasMore: true,
  isLoading: true,
}

export const PostContext = createContext<PostContextType>({
  ...initialState,
  addPost: () => {},
  onNext: () => {},
  handleLike: () => {},
  incrementComments: () => {}
})

export default function Posts({ children }: {
  children: React.ReactNode
}) {
  const [postState, dispatch] = useReducer(postsReducer, initialState)
  const { posts, isLoading, page, offset, limit, hasMore } = postState 

  useEffect(() => {
    getPosts(page, offset)
      .then(dispatch)
  }, [page])

  const addPost = (post: Post, author: Account) => {
    dispatch({
      type: Types.ADD,
      payload: {
        post,
        author
      }
    })
  }

  const handleLike = (
    postId: Post['_id'], 
    userId?: Account['_id']
  ) => {
    if (!userId) return

    dispatch({
      type: Types.LIKE,
      payload: {
        postId,
        userId
      }
    })
  }

  const incrementComments = (postId: Post['_id']) => {
    if (!posts.some(({ _id }) => postId === _id)) return

    dispatch({
      type: Types.COMMENT,
      payload: postId
    })
  }

  const onNext = () => {
    if (!hasMore) return
    dispatch({
      type: Types.NEXT,
    })
  }

  return (
    <PostContext.Provider value={{
      isLoading,
      posts,
      page,
      offset,
      limit,
      hasMore,
      addPost,
      handleLike,
      onNext,
      incrementComments
    }}>
      {children}
    </PostContext.Provider>
  )
}
