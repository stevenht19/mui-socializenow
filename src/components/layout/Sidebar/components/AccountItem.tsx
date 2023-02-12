import { Account } from '@/models'
import { Routes } from '@/routes'
import {
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material'
import { Avatar } from '@/components/atoms/Avatar'
import { Link } from './Link'

export const AccountItem = ({
  _id,
  color,
  username,
  firstName,
  lastName,
  picture
}: Account) => {
  return (
    <ListItem
      disablePadding
      sx={{
        p: {
          xs: 0,
          md: 1
        }
      }}
    >
      <Link to={`${Routes.USER}/${_id}`} disablePadding>
        <ListItemAvatar>
          <Avatar 
            picture={picture}
            color={color}
            username={username}
            ariaLabel={'suggested-account'}
          />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={`${firstName} ${lastName}`}
        />
      </Link>
    </ListItem>
  )
}
