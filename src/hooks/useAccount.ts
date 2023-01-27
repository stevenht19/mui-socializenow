import { AccountContext } from '@/context/Account'
import { useContext } from 'react'

const useAccount = () => {
  return useContext(AccountContext)
}

export default useAccount