import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Post } from '@/models'
import { withAuthModal } from '@/hocs'
import { Actions } from './CardActions'
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material'

const ActionsWithModal = withAuthModal(Actions)

dayjs.extend(relativeTime)

const PostCard = ({ author, text, feeling, image, createdAt }: Post) => {
  const { username, color } = author
  const date = dayjs(createdAt).fromNow()

  const feelingMessage = feeling ? feeling.split('-') : null

  const handleLike = () => {}

  return (
    <Card>
      <CardHeader
        title={
          <>
            {author.username + ' '}
            {
              feelingMessage && (
                <Typography
                  color='text.secondary'
                  component='span'
                  variant='body2'
                >
                  - is {feelingMessage[0]} feeling
                  {' ' + feelingMessage[1]}
                </Typography>
              )
            }
          </>
        }
        subheader={date}
        titleTypographyProps={{
          fontWeight: 500
        }}
        avatar={
          <Avatar
            sx={{ bgcolor: color }}
            aria-label='post'
          >
            {username[0].toUpperCase()}
          </Avatar>
        }
      />
      {
        image?.secure_url && (
          <CardMedia
            component='img'
            height='350'
            image={image?.secure_url}
          />
        )
      }
      <CardContent>
        <Typography
          component='p'
          variant='body2'
          sx={{
            whiteSpace: 'pre-wrap'
          }}
        >
          {text}
        </Typography>
      </CardContent>
      <ActionsWithModal action={handleLike} />
    </Card>
  )
}

export default PostCard