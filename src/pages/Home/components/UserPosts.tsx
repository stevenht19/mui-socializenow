import { usePosts } from '@/hooks'
import ListView from '@/components/atoms/ListView'
import PostCard from '@/components/atoms/PostCard'

export const UserPosts = () => {
  const { userPosts } = usePosts()

  if (!userPosts.length) return null

  return (
    <ListView pb>
      {
        userPosts.map((props) => (
          <PostCard {...props} />
        ))
      }
    </ListView>
  )
}