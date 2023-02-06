import { Button } from '@/components/atoms/Button'
import { Props } from '@/hocs/withAuthModal'
import { Typography } from '@mui/material'
import { ListOfAccounts } from './ListOfAccounts'

export const FollowingAccounts = ({ 
  user,
  isLoading,
  onOpen 
}: Props) => {

  if (isLoading) return null

  if (!user) return (
    <>
      <Typography
        component='p'
        variant='body2'
      >
        Log in for following creators, like and comment posts.
      </Typography>
      <Button
        fullWidth
        onClick={onOpen}
        sx={{ mt: 2 }}
      >
        Log in
      </Button>
    </>
  )
  return (
    <ListOfAccounts 
      subheader='Following Accounts' 
      q='?limit=3&skip=5'
      disableSpinner
    />
  )

}
