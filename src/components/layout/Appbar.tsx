import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Stack,
} from '@mui/material'
import { Add, AccountCircle } from '@mui/icons-material'
import { useBoolean, useAuthModal } from '@/hooks'
import { PostModal } from './Posts'
import { Modal } from './Auth'

const Buttons = () => {
  const { boolean, setTrue, setFalse } = useBoolean()
  const { open, onOpen, onClose, verifyIfUserExists } = useAuthModal()

  const handleUploadPost = () => {
    verifyIfUserExists(setTrue)
  }

  return <>
    <Modal 
      open={open} 
      onClose={onClose} 
    />
    <PostModal
      open={boolean}
      onClose={setFalse}
    />
    <Stack
      direction='row'
      spacing={2}
    >
      <Button
        variant='outlined'
        startIcon={<Add />}
        onClick={handleUploadPost}
      >
        Post
      </Button>
      <Button
        variant='contained'
        startIcon={<AccountCircle />}
        onClick={onOpen}
      >
        Login
      </Button>
    </Stack>
  </>
}

const Header = () => {
  return (
    <AppBar
      position='sticky'
      color='inherit'
      elevation={0}
      variant='outlined'
    >
      <Toolbar>
        <Container sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          App Logo
          <Buttons />
        </Container>
      </Toolbar>
    </AppBar>
  )
}
export default Header