import { FakeAccount } from '@/models'
import { Routes } from '@/routes'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material'
import { Link } from './Link'

export const AccountItem = ({
  id,
  firstName,
  lastName,
  username,
  image
}: FakeAccount) => {
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
      <Link to={`${Routes.FAKE_USER}/${id}`} disablePadding>
        <ListItemAvatar>
          <Avatar
            src={image}
            sx={{
              width: 40,
              height: 40
            }}
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
