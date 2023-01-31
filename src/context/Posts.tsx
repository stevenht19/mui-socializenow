import { createContext, useState } from 'react'
import { Post } from '@/models'

type PostContextType = {
  userPosts: Post[]
  addPost(post: Post): void
}

export const PostContext = createContext<PostContextType>({
  userPosts: [],
  addPost() {}
})

export default function Posts({ children }: {
  children: React.ReactNode
}) {
  const [userPosts, setUserPosts] = useState<Post[]>([])

  function addPost(post: Post) {
    setUserPosts(actualPosts => [post, ...actualPosts])
  }

  return (
    <PostContext.Provider value={{
      userPosts,
      addPost
    }}>
      {children}
    </PostContext.Provider>
  )
}
