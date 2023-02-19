import { lazy, Suspense } from 'react'
import { AppBar, Toolbar, Container, Typography } from '@mui/material'
import { useBoolean } from '@/hooks'
import { withAuthModal } from '@/hocs'
import { Link } from '@/components/atoms/Link'
import { Snackbar } from '@/components/atoms/Snackbar'
import { AppbarButtons } from './AppbarButtons'
import logo from '@/assets/logo.svg'

const Modal = lazy(() => import('@/components/layout/Posts/Modal'))

const ButtonsWithModal = withAuthModal(AppbarButtons)

const Buttons = () => {
  const [isOpen, onOpen, onClose] = useBoolean()
  const [snackbarOpen, openSnackbar, closeSnackbar] = useBoolean()

  const onPostSuccess = () => {
    openSnackbar()
    onClose()
  }

  return (
    <div>
      <Snackbar 
        open={snackbarOpen}
        onClose={closeSnackbar}
        message='Congrats! You have posted succesfully'
      />
      {
        isOpen && (
          <Suspense fallback={null}>
            <Modal
              open={isOpen}
              onClose={onClose}
              onSuccess={onPostSuccess}
            />
          </Suspense>
        )
      }
      <ButtonsWithModal action={onOpen} />
    </div>
  )
}

const Header = () => {
  return (
    <AppBar
      position='fixed'
      color='inherit'
      variant='outlined'
      elevation={0}
    >
      <Toolbar disableGutters>
        <Container sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link 
            to='/' 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5
            }}>
            <img 
              src={logo} 
              alt='socialize-now logo' 
              width={35} 
              height={35} 
            />
            <Typography 
              fontWeight={800} 
              variant='h5'
              component='span'
              color={(theme) => theme.palette.primary.main}
              sx={{
                display: {
                  xs: 'none',
                  md: 'block'
                }
              }}
            >
              SN
            </Typography>
          </Link>
          <Buttons />
        </Container>
      </Toolbar>
    </AppBar>
  )
}
export default Header