import dayjs from 'dayjs'
import { mutate } from 'swr'
import { Comment, Post } from '@/models'
import { useAccount } from '@/hooks'
import { CommentLike } from './CommentLike'
import { Avatar } from '@/components/atoms/Avatar'
import { Box, Button, Typography, styled } from '@mui/material'
import { FavoriteBorder, FavoriteOutlined } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { Flex } from '@/components/atoms/Flex'
import { likeComment } from '../services'
import { verifyIfLikeExists } from '../utils'
import { withAuthModal } from '@/hocs'

type Props = Comment & {
  postId: Post['_id']
}

const SpanStyled = styled('span')`
  padding-left: .4rem;
  padding-right: .5rem;
`

const CommentLikeWithModal = withAuthModal(CommentLike)

export const CommentItem: React.FC<Props> = ({
  postId,
  _id,
  text,
  author,
  likes,
  createdAt
}) => {
  const { account } = useAccount()
  const { isLiked } = verifyIfLikeExists(likes, account?._id)
  const { username, color, picture } = author
  const date = dayjs(createdAt).fromNow()

  const handleLike = async () => {
    await likeComment(_id)
    mutate('/comments/' + postId)
  }

  return (
    <Box
      display='flex'
      gap={1}
    >
      <Avatar
        username={username}
        color={color}
        picture={picture}
        size={38}
        ariaLabel='author'
      />
      <Box width='fit-content'>
        <Box
          bgcolor={grey[100]}
          px={1.7}
          py={1}
          borderRadius={4.5}
        >
          <Typography
            component='h2'
            variant='body2'
            fontWeight={600}
          >
            {username}
          </Typography>
          <Typography component='p' variant='body2'>
            {text}
          </Typography>
        </Box>
        <Flex gap={2}>
          <CommentLikeWithModal action={handleLike}>
            {
              isLiked ? (
                <FavoriteOutlined
                  sx={{
                    fontSize: 18,
                    color: (theme) => theme.palette.primary.main
                  }}
                />
              ) : (
                <FavoriteBorder sx={{ fontSize: 18 }} />
              )
            }
            <SpanStyled>
              {likes.length ?? 0}
            </SpanStyled>
            {
              likes?.length !== 1 ? 'Likes' : 'Like'
            }
          </CommentLikeWithModal>
          <Typography
            component='span'
            color='text.secondary'
            variant='body2'
          >
            {date}
          </Typography>
        </Flex>
      </Box>
    </Box>
  )
}