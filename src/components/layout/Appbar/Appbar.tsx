import { lazy, Suspense } from 'react'
import { AppBar, Toolbar, Container } from '@mui/material'
import { useBoolean } from '@/hooks'
import { withAuthModal } from '@/hocs'
import { AppbarButtons } from './AppbarButtons'

const PostModal = lazy(() => import('@/components/layout/Posts/Modal/Modal'))

const ButtonsWithModal = withAuthModal(AppbarButtons)

const Buttons = () => {
  const [isOpen, onOpen, onClose] = useBoolean()

  return (
    <div>
      {
        isOpen && (
          <Suspense fallback={null}>
            <PostModal
              open={isOpen}
              onClose={onClose}
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