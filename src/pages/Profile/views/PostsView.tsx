import { PostCard } from '@/components/atoms/cards/Post'
import { ListView } from '@/components/atoms/ListView'
import { PostSkeleton } from '@/components/atoms/skeletons/Post'
import { usePosts } from '../hooks'
import { Props } from '../types'

const PostsView = ({ id }: Props) => {
  const { posts, isLoading } = usePosts(id)


  return (
    <ListView
      py={3}
      items={posts ?? []}
      isLoading={isLoading}
      skeletonRender={(props) => (
        <PostSkeleton key={props} />
      )}
      renderItem={(props) => (
        <PostCard 
          key={props._id}
          {...props} 
        />
      )}
      customMessage={`There are no posts yet.`}
    />
  )
}

export default PostsView