import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Stack,
} from '@mui/material'
import { Add, AccountCircle } from '@mui/icons-material'
import { useAccount } from '@/hooks';

const Buttons = () => {
  const { verifyIfUserExists, onOpen } = useAccount()

  const handleUploadPost = () => {
    verifyIfUserExists(() => console.log('hello'))
  }

  return (
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
  )
}

const Header = () => {
  return (
    <AppBar
      position='sticky'
      color='inherit'
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