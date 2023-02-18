import { createContext, useEffect, useState } from 'react'
import { Account } from '@/models'
import { Snackbar } from '@/components/atoms/Snackbar'
import { getAccount } from '@/context/services/getAccount'
import { getLocalStorage } from '@/utils/localStorage'

type AccountContextType = {
  account: Account | null
  isLoading?: boolean
  logout(): void
  logIn(account?: Account): void
}

const TOKEN_KEY = 'mui-social-app'

export const AccountContext = createContext<AccountContextType>({
  account: null,
  logout() {},
  logIn() {}
})

export default function AccountProvider({ children }: {
  children: React.ReactNode
}) {
  const token = getLocalStorage(TOKEN_KEY)
  const [account, setAccount] = useState<Account | null>(null)
  const [snackbarOpen, setSnackbar] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(token ? true : false)

  useEffect(() => {
    if (!token) return

    getAccount(token)
      .then(setAccount)
      .finally(() => setIsLoading(false))

  }, [])

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setAccount(null)
  }

  const logIn = (account?: Account) => {
    if (!account) return;
    
    setAccount(account)
    setSnackbar(true)
  }

  const onClose = () => {
    setSnackbar(false)
  }

  return (
    <AccountContext.Provider value={{
      account,
      isLoading,
      logout,
      logIn
    }}>
      <Snackbar
        open={snackbarOpen}
        onClose={onClose}
        message={`Welcome ${account?.username}`}
      />
      {children}
    </AccountContext.Provider>
  )
}
