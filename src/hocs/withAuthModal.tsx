import { Fragment, Suspense, lazy } from 'react'
import { useAccount, useBoolean } from '@/hooks'
import { User } from '@/models'

export type Props = {
  user: User | null
  isLoading?: boolean
  onOpen: () => void
  verifyUser: () => void
}

type Params = {
  action?: () => void
}

const Modal = lazy(() => import('@/components/layout/Auth/Modal'))

const withAuthModal = (Component: React.FC<Props>) => {
  return ({ action }: Params) => {

    const [isOpen, onOpen, onClose] = useBoolean()
    const { account, isLoading } = useAccount()

    const verifyIfUserExists = () => {
      if (account) {
        action && action()
        return;
      }
      onOpen()
    }

    return (
      <Fragment>
        {
          isOpen && (
            <Suspense fallback={null}>
              <Modal
                open={isOpen}
                onClose={onClose}
              />
            </Suspense>
          )
        }
        <Component
          user={account}
          isLoading={isLoading}
          onOpen={onOpen}
          verifyUser={verifyIfUserExists}
        />
      </Fragment>
    )
  }
}

export default withAuthModal