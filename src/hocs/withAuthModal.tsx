import { Fragment, Suspense, lazy } from 'react'
import { useAccount, useBoolean } from '@/hooks'
import { User } from '@/models'

export type Props = {
  user: User | null
  onOpen: () => void
  verifyUser: () => void
}

type Params = {
  action: () => void
}

const Modal = lazy(() => import('@/components/layout/Auth/Modal'))

const withAuthModal = (Component: React.FC<Props>) => {
  return ({ action }: Params) => {

    const [isOpen, onOpen, onClose] = useBoolean()
    const { account } = useAccount()

    const verifyIfUserExists = () => {
      if (account) {
        action()
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
          onOpen={onOpen}
          verifyUser={verifyIfUserExists}
        />
      </Fragment>
    )
  }
}

export default withAuthModal