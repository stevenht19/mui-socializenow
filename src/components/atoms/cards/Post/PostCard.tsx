import dayjs from 'dayjs'
import Linkify from 'linkify-react'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Post } from '@/models'
import { Actions } from './components/CardActions'
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
            sx={{ 
              objectFit: 'contain', 
              bgcolor: (theme) => theme.palette.grey[100]
            }}
          />
        )
      }
      <CardContent>
        <Typography
          component='p'
          variant='body2'
          sx={{ whiteSpace: 'pre-wrap' }}
        >
          <Linkify options={{
            target: '_blank',
            rel: 'noopenner'
          }}>
            {text}
          </Linkify>
        </Typography>
      </CardContent>
      <Actions {...props} />
    </Card>
  )
}

export default PostCard