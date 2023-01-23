import {
  Box,
  Divider, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
} from '@mui/material'
import { Home, People } from '@mui/icons-material'
import { Accounts } from './Accounts'
import { useFakeAccounts } from './hooks/useFakeAccounts'

const Sidebar = () => {
  return (
    <Box 
      top={70}
      flex={.35}
      position='sticky' 
      height='100%'
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='Feed' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary='Following' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {
        false && (
          <Accounts 
            subheader='Following Accounts' 
          />
        )
      }
      <SuggestedAccounts />
    </Box>
  )
}

const SuggestedAccounts = () => {
  const [accounts] = useFakeAccounts()

  return (
    <Accounts
      subheader='Suggested Accounts'
      accounts={accounts}
    />
  )
}

export default Sidebar