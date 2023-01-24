import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Home, People } from '@mui/icons-material'
import { useFakeAccounts } from './hooks'
import { Accounts } from './Accounts'

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

  return <>
    {
      accounts.length ? (
        <Accounts
          subheader='Suggested Accounts'
          accounts={accounts}
        />
      ) : (
        <Box 
          display='flex' 
          justifyContent='center' 
          pt={3}
        >
        <CircularProgress />
        </Box> 
      )
    }
  </>
}

export default Sidebar