import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from '@mui/material'
import FakeAccount from '@/models/FakeAccount'

type Props = {
  subheader: string
  accounts?: FakeAccount[]
}

export const Accounts: React.FC<Props> = ({
  subheader,
  accounts
}) => {
  return <>
    {
      accounts?.length ? (
        <List subheader={
          <ListSubheader disableGutters>
            {subheader}
          </ListSubheader>
        }>
          {
            accounts.map((props) => (
              <AccountItem 
                key={props.login.uuid} 
                {...props} 
              />
            ))
          }
        </List>
      ) : null
    }
  </>
}

const AccountItem = ({ login, name, picture }: FakeAccount) => {
  return (
    <ListItem disableGutters>
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
