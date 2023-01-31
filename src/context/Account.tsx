import { createContext, useEffect, useState } from 'react'
import { User } from '@/models'
import { Snackbar } from '@/components/atoms/Snackbar'
import { getAccount } from './services/getAccount'

type AccountContextType = {
  account: User | null
  logout(): void
  logIn(account?: User): void
}

const tokenName = 'mui-social-app'

export const AccountContext = createContext<AccountContextType>({
  account: null,
  logout() {},
  logIn() {}
})

export default function Account({ children }: {
  children: React.ReactNode
}) {
  const token = localStorage.getItem(tokenName)
  const [account, setAccount] = useState<User | null>(null)
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    if (!token) return

    getAccount(token)
      .then(setAccount)

  }, [])

  const logout = () => {
    localStorage.removeItem(tokenName)
    setAccount(null)
  }

  const logIn = (account?: User) => {
    if (!account) return;
    
    setAccount(account)
    setIsLogged(true)
  }

  const onClose = () => {
    setIsLogged(false)
  }

  return (
    <AccountContext.Provider value={{
      account,
      logout,
      logIn
    }}>
      <Snackbar
        open={isLogged}
        onClose={onClose}
        message={`Welcome ${account?.username}`}
      />
      {children}
    </AccountContext.Provider>
  )
}
