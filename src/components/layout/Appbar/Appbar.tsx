import { AppBar, Toolbar, Container } from '@mui/material'
import { useBoolean } from '@/hooks'
import { withAuthModal } from '@/hocs'
import { PostModal } from '@/components/layout/Posts'
import { AppbarButtons } from './AppbarButtons'

const ButtonsWithModal = withAuthModal(AppbarButtons)

const Buttons = () => {
  const { boolean, setTrue, setFalse } = useBoolean()
  
  return (
    <div>
      <PostModal
        open={boolean}
        onClose={setFalse}
      />
      <ButtonsWithModal action={setTrue} />
    </div>
  )
}

const Header = () => {
  return (
    <AppBar
      position='sticky'
      color='inherit'
      variant='outlined'
      elevation={0}
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