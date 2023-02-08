import { createContext, useEffect, useState } from 'react'
import { Account, Post } from '@/models'
import { getPosts } from '@/context/services/getPosts'
import { handleLike } from './utils'

type PostContextType = {
  posts: Post[]
  userPosts: Post[]
  isLoading: boolean
  addPost: (post: Omit<Post, 'date'>, author: Account) => void
  toggleLike: (postId: Post['_id'], userId?: Account['_id']) => void
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  userPosts: [],
  isLoading: true,
  addPost: () => {},
  toggleLike: () => {}
})

export default function Posts({ children }: {
  children: React.ReactNode
}) {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [userPosts, setUserPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false))
  }, [])

  const addPost = (post: Post, author: Account) => {
    setUserPosts(actualPosts => [{...post, author }, ...actualPosts])
  }

  const toggleLike = (postId: Post['_id'], userId?: Account['_id']) => {
    if (!userId) return

    setPosts(posts => posts.map((post) => (post._id === postId) ? (
      {...post, likes: handleLike(post.likes, userId) }
    ) : post))
  }

  return (
    <PostContext.Provider value={{
      isLoading,
      posts,
      userPosts,
      addPost,
      toggleLike
    }}>
      {children}
    </PostContext.Provider>
  )
}
