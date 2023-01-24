import { useContext } from 'react'
import { AccountContext } from '@/context/Account'

const useAccount = () => {
  return useContext(AccountContext)
}

export default useAccount