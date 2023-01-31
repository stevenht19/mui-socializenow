import { Post } from '@/models'
import { PostCard } from '@/components/atoms/cards/Post'
import { ListView } from '@/components/atoms/ListView'

const singlePost: Post = {
  user: {
    username: 'Jesse',
    color: '#5c6bc0',
  },
  date: new Date('2022-04-07'),
  text: 'This is a post!'
}

export const Posts = () => {
  return (
    <ListView 
      items={new Array(10).fill('.').map(() => singlePost)}
      renderItem={PostCard}
    />
  )
}
