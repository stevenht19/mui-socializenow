import { mutate } from 'swr'
import { Post } from '@/models'
import { useAccount, useLocation, usePosts } from '@/hooks'
import { FavoriteBorder, FavoriteOutlined } from '@mui/icons-material'
import { Checkbox } from '@mui/material'
import { ButtonValue } from './ActionButton'
import { verifyIfLikeExists } from '../utils'
import likePost from '../services/likePost'

export const Likes = ({ _id, likes }: Post) => {
  const { posts, handleLike } = usePosts()
  const { account } = useAccount()
  const { params } = useLocation()
  const { isLiked } = verifyIfLikeExists(likes, account?._id)

  const onChange = async () => {
    if (!params.length) {
      handleLike(_id, account?._id)
      await likePost(_id)
      return;
    }

    await likePost(_id)

    mutate(`/posts${params}`)

    if (posts.some((post) => post._id === _id)) {
      handleLike(_id, account?._id)
    }

  }

  return <>
    <Checkbox
      icon={<FavoriteBorder />}
      checkedIcon={<FavoriteOutlined />}
      checked={isLiked}
      onChange={onChange}
    />
    <ButtonValue value={likes.length} />
  </>
}
