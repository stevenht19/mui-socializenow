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
  Typography
} from '@mui/material'

const ActionsWithModal = withAuthModal(Actions)

dayjs.extend(relativeTime)

const PostCard = ({ user, text, date }: Post) => {

  const handleLike = () => {
    console.log('handleLike')
  }

  return (
    <Card>
      <CardHeader
        title={user?.username || 'Jesse Pinkman'}
        subheader={dayjs(date).fromNow()}
        titleTypographyProps={{
          fontWeight: 500
        }}
        avatar={
          <Avatar
            sx={{ bgcolor: user.color }}
            aria-label='post'
          >
            {user.username[0]?.toUpperCase()}
          </Avatar>
        }
      />
      <CardMedia
        component='img'
        height='300'
        image='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png'
      />
      <CardContent>
        <Typography 
          variant='body2'
          sx={{
            whiteSpace: 'pre-wrap'
          }}
        >
          {text || 'This is a post'}
        </Typography>
      </CardContent>
      <ActionsWithModal action={handleLike} />
    </Card>
  )
}

export default PostCard