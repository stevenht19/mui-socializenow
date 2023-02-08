import { Suspense, lazy } from 'react'
import { Post } from '@/models'
import { useAccount, useBoolean, usePosts } from '@/hooks'
import { FavoriteBorder, FavoriteOutlined } from '@mui/icons-material'
import { Checkbox, IconButton, Typography } from '@mui/material'
import { Flex } from '@/components/atoms/Flex'
import { likePost } from '../services/likePost'

const AuthModal = lazy(() => import('@/components/layout/Auth/Modal'))

export const Likes = ({ _id, likes }: Post) => {
  const [isOpen, onOpen, onClose] = useBoolean()
  const { toggleLike } = usePosts()
  const { account } = useAccount()

  const isLiked = likes?.some((id) => id === account?._id)

  const onChange = async () => {
    await likePost(_id)
    toggleLike(_id, account!._id)
  }

  return (
    <Flex>
      {
        isOpen && (
          <Suspense fallback={null}>
            <AuthModal
              open={isOpen}
              onClose={onClose}
            />
          </Suspense>
        )
      }
      {
        account ? (
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<FavoriteOutlined />}
            checked={isLiked}
            onChange={onChange}
          />
        ) : (
          <IconButton
            aria-label='likes'
            onClick={onOpen}
          >
            <FavoriteBorder />
          </IconButton>
        )
      }
      <Typography 
        id='likes' 
        component='span' 
        variant='body2'
      >
        {likes?.length}
      </Typography>
    </Flex>
  )
}
