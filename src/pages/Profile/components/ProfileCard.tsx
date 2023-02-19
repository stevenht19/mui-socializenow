import { Avatar } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/buttons/Button'
import { Snackbar } from '@/components/atoms/Snackbar'
import { useAccount, useBoolean } from '@/hooks'
import { Account } from '@/models'
import { Edit, Reply } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

export const ProfileCard = (props: Account) => {
  const { username, picture, color } = props

  return (
    <Box minHeight='10rem'>
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
        <CardButton {...props} />
      </Box>
    </Box>
  )
}

const CardButton = ({ _id, username, firstname, lastname }: Account) => {
  const { account }= useAccount()
  const [snackbarOpen, setSnackbarOpen, closeSnackbar] = useBoolean()
  const [editProfileOpen, setEditProfileOpen, closeEditProfile] = useBoolean()
  const isNotUserLogged = account?._id !== _id

  return (
    <div>
      <Snackbar 
        open={snackbarOpen}
        onClose={closeSnackbar}
      />
      <Snackbar 
        open={editProfileOpen}
        onClose={closeEditProfile}
        message='Good things are comming soon...'
      />
      <Typography component='h2' variant='h5' fontWeight={900}>
        {username}
      </Typography>
      <Typography component='h3' variant='body1' color='text.secondary'>
        {
          (firstname && lastname) ? (
            `${firstname} ${lastname}`
          ) : (
            `@${username.toLowerCase()}`
          )
        }
      </Typography>
      {
        isNotUserLogged ? (
          <Button
            sx={{ mt: 2.2 }}
            startIcon={<Reply />}
            onClick={setSnackbarOpen}
            fullWidth
          >
            Share
          </Button>
        ) : (
          <Button
            sx={{ mt: 2.2 }}
            fullWidth
            variant='outlined'
            startIcon={<Edit />}
            onClick={setEditProfileOpen}
          >
            Edit Profile
          </Button>
        )
      }
    </div>
  )
}