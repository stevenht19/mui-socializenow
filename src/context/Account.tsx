import { createContext, useEffect, useState } from 'react'
import { Account } from '@/models'
import { Snackbar } from '@/components/atoms/Snackbar'
import { getAccount } from '@/context/services/getAccount'

type AccountContextType = {
  account: Account | null
  isLoading?: boolean
  logout(): void
  logIn(account?: Account): void
}

const tokenName = 'mui-social-app'

export const AccountContext = createContext<AccountContextType>({
  account: null,
  logout() {},
  logIn() {}
})

export default function AccountProvider({ children }: {
  children: React.ReactNode
}) {
  const token = localStorage.getItem(tokenName)
  const [account, setAccount] = useState<Account | null>(null)
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(token ? true : false)

  useEffect(() => {
    if (!token) return

    getAccount(token)
      .then(setAccount)
      .finally(() => setIsLoading(false))

  }, [])

  const logout = () => {
    localStorage.removeItem(tokenName)
    setAccount(null)
  }

  const logIn = (account?: Account) => {
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
      isLoading,
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
