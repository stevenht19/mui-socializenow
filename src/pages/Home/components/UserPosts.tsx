import { usePosts } from '@/hooks'
import { ListView } from '@/components/atoms/ListView'
import { PostCard } from '@/components/atoms/cards/Post'

export const UserPosts = () => {
  const { userPosts } = usePosts()

  if (!userPosts.length) return null

  return (
    <ListView
      items={userPosts}
      renderItem={PostCard}
      pb 
    />
  )
}