import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Post } from '@/models'
import { Actions } from './components/CardActions'
import { Likes } from './components/Likes'
import { CardHeader } from './components/CardHeader'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

dayjs.extend(relativeTime)

const PostCard = (props: Post) => {
  const { author, text, image } = props
  const { username } = author

  return (
    <Card>
      <CardHeader {...props} />
      {
        image?.secure_url && (
          <CardMedia
            component='img'
            height='350'
            image={image?.secure_url}
            alt={`${username}-post-image`}
          />
        )
      }
      <CardContent>
        <Typography
          component='p'
          variant='body2'
          sx={{ whiteSpace: 'pre-wrap' }}
        >
          {text}
        </Typography>
      </CardContent>
      <Actions {...props}>
        <Likes {...props} />
      </Actions>
    </Card>
  )
}

export default PostCard