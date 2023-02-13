export const verifyIfLikeExists = (likes: string[], userId?: string | null) => {
  return { isLiked: likes?.some((id) => id === userId) }
}