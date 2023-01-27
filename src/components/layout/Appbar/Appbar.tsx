import { AppBar, Toolbar, Container } from '@mui/material'
import { useBoolean } from '@/hooks'
import { PostModal } from '@/components/layout/Posts'
import { AppbarButtons } from './AppbarButtons'

const Buttons = () => {
  const { boolean, setTrue, setFalse } = useBoolean()
  
  return <>
    <PostModal
      open={boolean}
      onClose={setFalse}
    />
    <AppbarButtons handlePostModal={setTrue} />
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