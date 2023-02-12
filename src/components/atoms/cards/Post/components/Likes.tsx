import { mutate } from 'swr'
import { Post } from '@/models'
import { useAccount, useLocation, usePosts } from '@/hooks'
import { FavoriteBorder, FavoriteOutlined } from '@mui/icons-material'
import { Checkbox } from '@mui/material'
import { verifyIfLikeExists } from '../utils'
import { likePost } from '../services'
import { ButtonValue } from './ActionButton'

export const Likes: React.FC<Post> = ({ _id, likes }) => {
  const { handleLike } = usePosts()
  const { account } = useAccount()
  const { params } = useLocation()
  const { isLiked } = verifyIfLikeExists(likes, account?._id)

  const onChange = async () => {
    await likePost(_id)
    if (Boolean(params.length)) {
      mutate(`/posts${params}`)
    }
    
    handleLike(_id, account?._id)
  }

  return (
    <>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<FavoriteOutlined />}
        checked={isLiked}
        onChange={onChange}
      />
      <ButtonValue 
        id='likes'
        value={likes.length}
      />
    </>
  )
}
