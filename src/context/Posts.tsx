import { createContext, useEffect, useReducer } from 'react'
import { Account, Post } from '@/models'
import { getPosts } from '@/context/services/getPosts'
import { postsReducer } from './reducers/postsReducer'
import { Types } from './reducers/types'

export type PostsContextState = {
  posts: Post[]
  page: number
  isLoading: boolean
  hasMore: boolean
}

type PostContextType = PostsContextState & {
  addPost: (post: Omit<Post, 'createdAt'>, author: Account) => void
  handleLike: (postId: Post['_id'], userId?: Account['_id']) => void
  incrementComments: (postId: Post['_id']) => void
  onNext: () => void
}

const initialState = {
  posts: [],
  page: 1,
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
  const { posts, isLoading, page, hasMore } = postState 

  useEffect(() => { 
    getPosts(page)
      .then((res) => dispatch({
        type: Types.SET,
        payload: res
      }))
  }, [page])

  const addPost = (post: Omit<Post, 'createdAt'>, author: Account) => {
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
