import { lazy, Suspense } from 'react'
import { AccountCircle, Add } from '@mui/icons-material'
import { Button } from '@/components/atoms/Button'
import { Flex } from '@/components/atoms/Flex'
import { Props } from '@/hocs/withAuthModal'

const AccountMenu = lazy(() => import('./AccountMenu'))

export const AppbarButtons: React.FC<Props> = ({ 
  user,
  onOpen,
  verifyUser 
}) => {
  return (
    <Flex gap={2}>
      <Button
        variant='outlined'
        onClick={verifyUser}
        startIcon={<Add />}
      >
        Post
      </Button>
      {
        !user ? (
          <Button
            startIcon={<AccountCircle />}
            onClick={onOpen}
          >
            Login
          </Button>
        ) : (
          <Suspense fallback={null}>
            <AccountMenu />
          </Suspense>
        )
      }
    </Flex>
  )
}