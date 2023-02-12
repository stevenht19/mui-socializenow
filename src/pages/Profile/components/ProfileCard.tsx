import { Avatar } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/buttons/Button'
import { useAccount } from '@/hooks'
import { Account } from '@/models'
import { Edit } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Statistics } from './Statistics'

export const ProfileCard = ({
  _id,
  username,
  firstName,
  lastName,
  picture,
  color
}: Account) => {
  const { account } = useAccount()
  const isNotUserLogged = account?._id !== _id

  return (
    <Box minHeight='13rem'>
      <Box display='flex' gap={4.5}>
        <div>
          <Avatar 
            username={username}
            color={color}
            picture={picture}
            ariaLabel='profile'
            size={110}
          />
        </div>
        <div>
          <Typography component='h2' variant='h5' fontWeight={900}>
            {username}
          </Typography>
          <Typography component='h3' variant='body1' color='text.secondary'>
            {
              (firstName && lastName) ? (
                `${firstName} ${lastName}`
              ) : (
                `@${username.toLowerCase()}`
              )
            }
          </Typography>
          {
            isNotUserLogged ? (
              <Button
                sx={{ mt: 2.2 }}
                fullWidth
              >
                Follow
              </Button>
            ) : (
              <Button
                sx={{ mt: 2.2 }}
                fullWidth
                variant='outlined'
                startIcon={<Edit />}
              >
                Edit Profile
              </Button>
            )
          }
        </div>
      </Box>
      <Statistics />
    </Box>
  )
}