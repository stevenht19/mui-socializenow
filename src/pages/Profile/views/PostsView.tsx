import { Box } from '@mui/material'
import { PostCard } from '@/components/atoms/cards/Post'
import { ListView } from '@/components/atoms/ListView'
import { PostSkeleton } from '@/components/atoms/skeletons/Post'
import { useFakeProfile } from '../hooks/useFakeProfile'
import { useFakePosts } from '../hooks/useFakePosts'
import { Props } from '../types'

export const PostsView = ({ params }: Props) => {
  const { id } = params

  const { profile } = useFakeProfile(id!)
  const { posts } = useFakePosts(id!, profile)

  return (
    <Box pt={4}>
      <ListView 
        items={posts}
        skeletonRender={(key) => (
          <PostSkeleton key={key} />
        )}
        renderItem={(props) => (
          <PostCard 
            key={props._id}
            disableActions
            {...props} 
          />
        )}
      />
    </Box>
  )
}
