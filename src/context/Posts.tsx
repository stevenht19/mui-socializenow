import { createContext, useEffect, useState } from 'react'
import { Account, Post } from '@/models'
import { getPosts } from '@/context/services/getPosts'

type PostContextType = {
  posts: Post[]
  userPosts: Post[]
  isLoading: boolean
  addPost(post: Omit<Post, 'date'>, author: Account): void
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  userPosts: [],
  isLoading: true,
  addPost() {},
})

export default function Posts({ children }: {
  children: React.ReactNode
}) {
  const [posts, setPosts] = useState<Post[]>([])
  const [userPosts, setUserPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts()
      .then(setPosts)
  }, [])

  function addPost(post: Post, author: Account) {
    setUserPosts(actualPosts => [{...post, author }, ...actualPosts])
  }

  return (
    <PostContext.Provider value={{
      isLoading: posts.length === 0,
      posts,
      userPosts,
      addPost
    }}>
      {children}
    </PostContext.Provider>
  )
}
