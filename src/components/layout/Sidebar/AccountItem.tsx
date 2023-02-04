import { FakeAccount } from '@/models'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

export const AccountItem = ({ login, name, picture }: FakeAccount) => {
  return (
    <ListItem 
      disableGutters
      sx={{
        p: {
          xs: 0,
          md: 1
        }
      }}
    >
      <ListItemAvatar>
        <Avatar
          src={picture.thumbnail} 
          sx={{
            width: 40,
            height: 40
          }} 
        />
      </ListItemAvatar>
      <ListItemText 
        primary={login.username} 
        secondary={`${name.first} ${name.last}`} 
      />
    </ListItem>
  )
}
