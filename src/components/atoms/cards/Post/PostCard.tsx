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

type Props = Post & {
  disableActions?: boolean
}

const PostCard = ({
  author,
  text,
  feeling,
  image,
  createdAt,
  disableActions
}: Props) => {
  const { username, color, picture } = author
  const date = dayjs(createdAt).fromNow()

  const feelingMessage = feeling ? feeling.split('-') : null

  const handleLike = () => { }

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
          picture ? (
            <Avatar
              aria-label='post'
              src={picture}
            />
          ) : (
            <Avatar
              sx={{ bgcolor: color }}
              aria-label='post'
            >
              {username[0].toUpperCase()}
            </Avatar>
          )
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
      {
        !disableActions ? (
          <ActionsWithModal action={handleLike} />
        ) : null
      }
    </Card>
  )
}

export default PostCard