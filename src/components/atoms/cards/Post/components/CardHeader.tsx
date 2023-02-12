import { Post } from '@/models'
import { Routes } from '@/routes'
import { Link } from '@/components/atoms/Link'
import { CardHeader as MuiCardHeader, Typography } from '@mui/material'
import { Fragment } from 'react'
import { Avatar } from '@/components/atoms/Avatar'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const CardHeader: React.FC<Post> = ({ 
  feeling, 
  author,
  createdAt 
}) => {
  const { _id, username, color, picture } = author
  const feelingMessage = feeling ? feeling.split('-') : null
  const date = dayjs(createdAt).fromNow()

  return (
    <MuiCardHeader
      title={
        <Fragment>
          <Link to={`${Routes.USER}/${_id}`}>
            {username + ' '}
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
          </Link>
        </Fragment>
      }
      subheader={date}
      titleTypographyProps={{
        fontWeight: 500
      }}
      avatar={
        <Avatar
          picture={picture}
          username={username}
          color={color}
          ariaLabel='post'
        />
      }
    />
  )
}
