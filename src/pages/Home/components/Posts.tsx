import ListView from '@/components/atoms/ListView'
import PostCard from '@/components/atoms/PostCard'

export const Posts = () => {
  return (
    <ListView>
      {
        [1, 2, 3, 4, 5].map((v) => (
          <PostCard key={v} />
        ))
      }
    </ListView>
  )
}
