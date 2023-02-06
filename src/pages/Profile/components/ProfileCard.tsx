import { Button } from '@/components/atoms/Button'
import { FakeAccount } from '@/models'
import { Avatar, Box, Typography } from '@mui/material'
import { Statistics } from './ProfileStatistics'

export const ProfileCard = ({ username, firstName, lastName, image }: FakeAccount) => {
  return (
    <Box px={4} minHeight='13rem'>
      <Box display='flex' gap={2.5} px={2}>
        <Avatar
          src={image}
          sx={{
            width: 120,
            height: 120
          }}
        />
        <Box maxWidth='15rem' flex={1}>
          <Typography component='h2' variant='h5' fontWeight={900}>
            {username}
          </Typography>
          <Typography component='h3' variant='body1' color='text.secondary'>
            {firstName} {lastName}
          </Typography>
          <Button
            sx={{ mt: 2.2 }}
            onClick={() => { }}
            fullWidth
          >
            Follow
          </Button>
        </Box>
      </Box>
      <Statistics />
    </Box>
  )
}