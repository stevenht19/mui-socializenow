import { lazy, Suspense } from 'react'
import { AccountCircle, Add } from '@mui/icons-material'
import { Button } from '@/components/atoms/buttons/Button'
import { Flex } from '@/components/atoms/Flex'
import { Spinner } from '@/components/atoms/Spinner'
import { Props } from '@/hocs/withAuthModal'

const AccountMenu = lazy(() => import('./AccountMenu'))

export const AppbarButtons: React.FC<Props> = ({
  user,
  isLoading,
  onOpen,
  verifyUser
}) => {
  return (
    <Flex gap={2}>
      {
        isLoading ? (
          <Spinner size={28} />
        ) : (
          <>
            <Button
              variant='outlined'
              onClick={verifyUser}
              startIcon={<Add />}
            >
              Post
            </Button>
            {
              user ? (
                <Suspense fallback={null}>
                  <AccountMenu />
                </Suspense>
              ) : (
                <Button
                  startIcon={<AccountCircle />}
                  onClick={onOpen}
                >
                  Login
                </Button>
              )
            }
          </>
        )
      }
    </Flex>
  )
}