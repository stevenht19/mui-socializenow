import { usePosts } from '@/hooks'
import { PostCard } from '@/components/atoms/cards/Post'
import { PostSkeleton } from '@/components/atoms/skeletons/Post'
import { ListView } from '@/components/atoms/ListView'
import { Spinner } from '@/components/atoms/Spinner'
import { Typography } from '@mui/material'
import { Flex } from '@/components/atoms/Flex'
import InfiniteScroll from 'react-infinite-scroll-component'

export const Posts = () => {
  const { posts, isLoading, hasMore, onNext } = usePosts()

  return (
    <InfiniteScroll
      dataLength={posts.length}
      hasMore={hasMore}
      next={onNext}
      style={{
        overflow: 'hidden'
      }}
      loader={
        <Flex justifyContent={'center'}>
          <Spinner />
        </Flex>
      }
      endMessage={
        <Typography 
          pb={3}
          textAlign='center'
          color='text.secondary'
        >
          You have seen it all!
        </Typography>
      }
    >
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
    </InfiniteScroll>
  )
}
