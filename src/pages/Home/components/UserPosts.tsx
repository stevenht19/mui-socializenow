import { ListView } from '@/components/atoms/ListView'
import { PostCard } from '@/components/atoms/cards/Post'
import { usePosts } from '@/hooks'

export const UserPosts = () => {
  const { userPosts } = usePosts()
  
  if (!userPosts.length) return null

  return (
    <ListView
      items={userPosts}
      customMessage='aa'
      renderItem={(props) => (
        <PostCard 
          key={props._id} 
          {...props}
        />
      )}
    />
  )
}