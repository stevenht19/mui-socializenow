import { Avatar } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/buttons/Button'
import { Snackbar } from '@/components/atoms/Snackbar'
import { useAccount, useBoolean } from '@/hooks'
import { Account } from '@/models'
import { Edit, Reply } from '@mui/icons-material'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

export const ProfileCard = (props: Account) => {
  const { username, picture, color } = props
  const { breakpoints } = useTheme()
  const isDesktop = useMediaQuery('(min-width: ' + breakpoints.values.lg + breakpoints.unit + ')')
  
  return (
    <Box minHeight='10rem'>
      <Box 
        display='flex'
        maxWidth='20rem'
        width='100%'
        gap={isDesktop ? 4.5 : 2.5}
      >
        <Box 
          display='flex' 
          justifyContent='center'
        >
          <Avatar
            username={username}
            color={color}
            picture={picture}
            ariaLabel='profile'
            size={isDesktop ? 110 : 70}
          />
        </Box>
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

  const onShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/users/${_id}`)
    setSnackbarOpen()
  }

  return (
    <Box flex={1} overflow={['hidden', 'visible']}>
      <Snackbar 
        open={snackbarOpen}
        onClose={closeSnackbar}
      />
      <Snackbar
        open={editProfileOpen}
        onClose={closeEditProfile}
        message='Good things are comming soon...'
      />
      <Typography component='h2' variant='h5' fontWeight={900} textOverflow='ellipsis' overflow='hidden'>
        {username}
      </Typography>
      <Typography component='h3' variant='body1' color='text.secondary' textOverflow='ellipsis' overflow={'hidden'}>
        {
          (firstname && lastname) ? (
            `${firstname} ${lastname}`
          ) : (
            `@${username.toLowerCase().split(' ').join('')}`
          )
        }
      </Typography>
      {
        isNotUserLogged ? (
          <Button
            sx={{ mt: 2.2 }}
            startIcon={<Reply />}
            onClick={onShare}
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
    </Box>
  )
}