import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import withAuthModal, { Props } from '@/hocs/withAuthModal'
import { Home, People } from '@mui/icons-material'
import { Spinner } from '@/components/atoms/Spinner'
import { Button } from '@/components/atoms/Button'
import { Flex } from '@/components/atoms/Flex'
import { Accounts } from './Accounts'
import { fakeFollowings } from './fakeUsers'
import { useFakeAccounts } from './hooks'

const text = 'Log in for following creators, like and comment posts.'

const FollowingAccounts = ({ user, isLoading, onOpen }: Props) => {

  if (isLoading) return (
    <Box 
      mt={1.3} 
      height='8rem'
    />
  )

  if (!user) return (
    <Box 
      display='flex'
      minHeight='8rem'
      flexDirection='column' 
      mt={1.3} 
      gap={.5} 
      pl={2}
    >
      <Typography
        component='p'
        variant='body2'
      >
        {text}
      </Typography>
      <Button
        fullWidth
        onClick={onOpen}
        sx={{ mt: 2 }}
      >
        Log in
      </Button>
    </Box>
  )

  return (
    <Accounts
      accounts={fakeFollowings}
      subheader='Following Accounts'
    />
  )
}

const SuggestedAccounts = () => {
  const [accounts] = useFakeAccounts()

  return (
    <>
      {
        accounts.length ? (
          <Accounts
            subheader='Suggested Accounts'
            accounts={accounts}
          />
        ) : (
          <Flex justifyContent={'center'} pt={3}>
            <Spinner />
          </Flex>
        )
      }
    </>
  )
}

const FollowingAccountsWithModal = withAuthModal(FollowingAccounts)

const Sidebar = () => {
  return (
    <Box
      overflow='hidden'
      sx={{
        width: {
          xs: '3.7rem',
          md: '19rem'
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
        <FollowingAccountsWithModal />
        <SuggestedAccounts />
      </Box>
    </Box>
  )
}

export default Sidebar