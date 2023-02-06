import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { withAuthModal } from '@/hocs'
import { Home, People } from '@mui/icons-material'
import { Link } from './components/Link'
import { ListOfAccounts } from './components/ListOfAccounts'
import { FollowingAccounts } from './components/FollowingAccounts'

const FollowingAccountsWithModal = withAuthModal(FollowingAccounts)

const Sidebar = () => {
  return (
    <Box
      overflow='hidden'
      sx={{
        width: {
          xs: '3.7rem',
          md: '18.5rem'
        },
        borderRight: (theme) => ({
          xs: '1px solid ' + theme.palette.divider,
          md: 'none'
        })
      }}
    >
      <Box
        position='fixed'
        height='100%'
        width='inherit'
        overflow={'auto'}
        pb={8}
      >
        <List>
          <ListItem disablePadding>
            <Link to='/'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Feed' />
            </Link>
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
        <FollowingAccountsWithModal />
        <ListOfAccounts subheader='Suggested Accounts' />
      </Box>
    </Box>
  )
}

export default Sidebar