import { Fragment, Suspense, lazy } from 'react'
import { useAccount, useBoolean } from '@/hooks'
import { Account } from '@/models'

export type Props = {
  user: Account | null
  isLoading?: boolean
  children?: React.ReactNode
  onOpen: () => void
  verifyUser: () => void
}

type Params = {
  action?: () => void
  children?: React.ReactNode
}

const Modal = lazy(() => import('@/components/layout/Auth'))

const withAuthModal = (Component: React.FC<Props>) => {
  return ({ action, children }: Params) => {

    const [isOpen, onOpen, onClose] = useBoolean()
    const { account, isLoading } = useAccount()

    const verifyIfUserExists = () => {
      if (account && action) {
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
          isLoading={isLoading}
          onOpen={onOpen}
          verifyUser={verifyIfUserExists}
        >
          {children && children}
        </Component>
      </Fragment>
    )
  }
}

export default withAuthModal