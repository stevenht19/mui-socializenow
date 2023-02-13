import { createContext, useEffect, useState } from 'react'
import { Account, Post } from '@/models'
import { getPosts } from '@/context/services/getPosts'
import { toggleLike } from './utils'

type PostContextType = {
  posts: Post[]
  isLoading: boolean
  addPost: (post: Omit<Post, 'date'>, author: Account) => void
  handleLike: (postId: Post['_id'], userId?: Account['_id']) => void
  incrementComments: (postId: Post['_id']) => void
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  isLoading: true,
  addPost: () => {},
  handleLike: () => {},
  incrementComments: () => {}
})

export default function Posts({ children }: {
  children: React.ReactNode
}) {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false))
  }, [])

  const addPost = (post: Post, author: Account) => {
    setPosts(actualPosts => [{...post, author }, ...actualPosts])
  }

  const handleLike = (
    postId: Post['_id'], 
    userId?: Account['_id']
  ) => {
    if (!userId) return
    if (!posts.some(({ _id }) => postId === _id)) return

    setPosts(posts => {
      return posts.map((post) => (post._id === postId) ? (
        {
          ...post,
          likes: toggleLike(post.likes, userId) 
        }
        ) : 
          post
        )
      })
  }

  const incrementComments = (postId: Post['_id']) => {
    setPosts(posts => posts.map((post) => post._id === postId ? {...post, totalComments: post.totalComments + 1 } : post))
  }

  return (
    <PostContext.Provider value={{
      isLoading,
      posts,
      addPost,
      handleLike,
      incrementComments
    }}>
      {children}
    </PostContext.Provider>
  )
}
