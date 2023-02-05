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
          <Avatar
            sx={{ bgcolor: color }}
            aria-label='post'
          >
            {username[0].toUpperCase()}
          </Avatar>
        }
      />
      <CardMedia
        component='img'
        height='300'
        image={image?.secure_url || 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png'}
      />
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