import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled
} from '@mui/material'
import { withAuthModal } from '@/hocs'
import { Home, People } from '@mui/icons-material'
import { Routes } from '@/routes'
import { Link } from './components/Link'
import { ListOfAccounts } from './components/ListOfAccounts'
import { FollowingAccounts } from './components/FollowingAccounts'

const FollowingAccountsWithModal = withAuthModal(FollowingAccounts)

const StyledSidebar = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '3.8rem',
    flex: '0 0 3.8rem',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  [theme.breakpoints.up('md')]: {
    width: '18.5rem',
    flex: '0 0 18.5rem',
    borderRight: 'none'
  }
}))

const Content = styled(Box)(() => ({
  position: 'fixed',
  overflowY: 'auto',
  overflowX: 'hidden',
  height: '100%',
  paddingBottom: '2rem',
  width: 'inherit'
}))

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Content>
        <List>
          <ListItem disablePadding>
            <Link to={Routes.MAIN}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Feed' />
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={Routes.FOLLOWING}>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary='Following' />
            </Link>
          </ListItem>
        </List>
        <FollowingAccountsWithModal />
        <ListOfAccounts subheader='Suggested Accounts' />
      </Content>
    </StyledSidebar>
  )
}

export default Sidebar