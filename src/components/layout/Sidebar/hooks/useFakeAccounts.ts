import { useEffect, useState } from 'react'
import FakeAccount, { FakeAccountResponse } from '@/models/FakeAccount'

const API = 'https://dummyjson.com/users'

const useFakeAccounts = (q?: string) => {
  const [fakeAccounts, setFakeAccounts] = useState<FakeAccount[]>([])

  useEffect(() => {
    fetch(API + (q || '?limit=4'))
      .then((res) => res.json())
      .then((data: FakeAccountResponse) => { 
        setFakeAccounts(data.users) 
      })
  }, [])

  return [fakeAccounts] as const

}
export default useFakeAccounts