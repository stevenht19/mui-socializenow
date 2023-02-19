import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled
} from '@mui/material'
import { withAuthModal } from '@/hocs'
import { Routes } from '@/utils'
import { Home, People } from '@mui/icons-material'
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

const Content = styled(Box)(({ theme }) => ({
  position: 'fixed',
  overflowY: 'auto',
  overflowX: 'hidden',
  height: '100%',
  paddingTop: '.5rem',
  paddingBottom: '2rem',
  width: 'inherit',
  [theme.breakpoints.up('md')]: {
    paddingInline: '.6rem'
  }
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
        <ListOfAccounts 
          subheader='Suggested Accounts'
          skip={6}
          limit={3}
        />
      </Content>
    </StyledSidebar>
  )
}

export default Sidebar