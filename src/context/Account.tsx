import { createContext, useState, Suspense, lazy, useCallback } from 'react'

const AuthModal = lazy(() => import('@/components/layout/Auth/Modal'))

type AccountContextType = {
  user: boolean
  onOpen(): void
  verifyIfUserExists(action: Function): void
}

export const AccountContext = createContext<AccountContextType>({
  user: false,
  verifyIfUserExists() {},
  onOpen() {}
})

export default function AccountProvider({ children }: {
  children: React.ReactNode
}) {

  const user = false
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  function onClose() {
    setIsModalOpen(false)
  }

  function onOpen() {
    setIsModalOpen(true)
  }

  function verifyIfUserExists(action: Function) {
    if (user) {
      action()
      return;
    }
    setIsModalOpen(true)
  }

  return (
    <AccountContext.Provider value={{
      user,
      verifyIfUserExists,
      onOpen
    }}>
      <Suspense fallback={null}>
        <AuthModal 
          isOpen={isModalOpen} 
          onClose={onClose} 
        />
      </Suspense>
      {children}
    </AccountContext.Provider>
  )
}
