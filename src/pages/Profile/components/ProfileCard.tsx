import { Button } from '@/components/atoms/Button'
import { Avatar, Box, Typography } from '@mui/material'
import { useFakeProfile } from '../hooks'
import { Statistics } from './ProfileStatistics'
import { ProfileCardSkeleton } from './ProfileCardSkeleton'
import { Props } from '../types'

export const ProfileCard = ({ params }: Props) => {
  const { profile, isLoading } = useFakeProfile(params.id!)

  if (isLoading || !profile) return <ProfileCardSkeleton />

  const { username, firstName, lastName, image } = profile

  return (
    <Box minHeight='13rem'>
      <Box display='flex' gap={2.5}>
        <div>
          <Avatar
            src={image}
            sx={{
              width: 120,
              height: 120
            }}
            alt={`${profile.username}-avatar`}
          />
        </div>
        <div>
          <Typography component='h2' variant='h5' fontWeight={900}>
            {username}
          </Typography>
          <Typography component='h3' variant='body1' color='text.secondary'>
            {firstName} {lastName}
          </Typography>
          <Button
            sx={{ mt: 2.2 }}
            fullWidth
            size='small'
          >
            Follow
          </Button>
        </div>
      </Box>
      <Statistics />
    </Box>
  )
}