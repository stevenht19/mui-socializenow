import { Post } from '@/models'

export const verifyIfLikeExists = (likes: Post['likes'], userId?: string | null) => {
  return { isLiked: likes?.some((id) => id === userId) }
}