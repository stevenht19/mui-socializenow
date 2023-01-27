import { createContext, useState } from 'react'

type AccountContextType = {
  account?: AccountState
}

export const AccountContext = createContext<AccountContextType>({})

type AccountState = {
  username: string
  color: string
}

export default function Account({ children }: {
  children: React.ReactNode
}) {
  const [account, _setAccount] = useState<AccountState>({
    username: 'hello123',
    color: '#B583E7'
  })

  return (
    <AccountContext.Provider value={{
      account,
    }}>
      {children}
    </AccountContext.Provider>
  )
}
