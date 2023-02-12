import { usePosts } from '@/hooks'
import { PostCard } from '@/components/atoms/cards/Post'
import { PostSkeleton } from '@/components/atoms/skeletons/Post'
import { ListView } from '@/components/atoms/ListView'

export const Posts = () => {
  const { posts, isLoading } = usePosts()

  return (
    <ListView
      isLoading={isLoading}
      items={posts ?? []}
      renderItem={(props) => (
        <PostCard 
          key={props._id}
          {...props} 
        />
      )}
      skeletonRender={(key) => (
        <PostSkeleton key={key} />
      )}
    />
  )
}
