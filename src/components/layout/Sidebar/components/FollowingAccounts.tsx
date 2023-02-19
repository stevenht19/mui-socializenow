import { Button } from '@/components/atoms/buttons/Button'
import { Props } from '@/hocs/withAuthModal'
import { Box, Typography } from '@mui/material'
import { ListOfAccounts } from './ListOfAccounts'

const LoginBox = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Box
      pl={1.6}
      sx={{ 
        display: { 
          xs: 'none', 
          md: 'block' 
        } 
      }}
    >
      <Typography
        component='p'
        variant='body2'
        mt={1.2}
      >
        Log in for posting, like and comment posts.
      </Typography>
      {children}
    </Box>
  )
}

export const FollowingAccounts = ({
  user,
  isLoading,
  onOpen
}: Props) => {

  if (isLoading) return null

  if (!user) return (
    <LoginBox>
      <Button
        fullWidth
        onClick={onOpen}
        sx={{ mt: 2, mb: 4 }}
      >
        Log in
      </Button>
    </LoginBox>
  )

  return (
    <ListOfAccounts
      subheader='Following Accounts'
      skip={0}
      limit={3}
      disableSpinner
    />
  )

}
