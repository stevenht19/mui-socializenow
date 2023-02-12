import dayjs from 'dayjs'
import { Comment } from '@/models'
import { Avatar } from '@/components/atoms/Avatar'
import { 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Typography 
} from '@mui/material'

export const CommentItem: React.FC<Comment> = ({ 
  text, 
  author, 
  createdAt 
}) => {
  const { username, color, picture } = author
  const date = dayjs(createdAt).fromNow()

  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar
          username={username}
          color={color}
          picture={picture}
          ariaLabel='author'
        />
      </ListItemAvatar>
      <ListItemText
        primary={author.username}
        secondary={
          <>
            <Typography
              display='block'
              width='100%'
              py={.5}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {text}
            </Typography>
            <Typography
              display='block'
              component='span'
              variant='body2'
              textAlign='end'
            >
              {date}
            </Typography>
          </>
        }
      />
    </ListItem>
  )
}