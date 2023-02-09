import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Fragment } from 'react'
import { Post } from '@/models'
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material'
import { Actions } from './CardActions'
import { Likes } from './components/Likes'

dayjs.extend(relativeTime)

type Props = Post & {
  disableActions?: boolean
}

const PostCard = (props: Props) => {
  const {
    author,
    text,
    feeling,
    image,
    createdAt,
    disableActions
  } = props
  
  const { username, color, picture } = author
  const feelingMessage = feeling ? feeling.split('-') : null
  const date = dayjs(createdAt).fromNow()

  return (
    <Card>
      <CardHeader
        title={
          <Fragment>
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
          </Fragment>
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
            alt={`${username}-post-image`}
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
        !disableActions && (
          <Actions>
            <Likes
              {...props}
            />
          </Actions>
        )
      }
    </Card>
  )
}

export default PostCard