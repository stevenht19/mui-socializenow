import { Account, Post } from '@/models'

export const toggleLike = (likes: Post['likes'], userId: Account['_id']) => {
  if (likes?.some((id) => userId === id)) {
    return likes.filter(id => id !== userId)
  }
  return likes?.concat(userId)
}
