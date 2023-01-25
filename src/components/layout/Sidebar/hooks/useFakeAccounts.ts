import { useEffect, useState } from 'react'
import FakeAccount, { FakeAccountResponse } from '@/models/FakeAccount'

const API = 'https://randomuser.me/api/?results=5'

const useFakeAccounts = () => {
  const [fakeAccounts, setFakeAccounts] = useState<FakeAccount[]>([])

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data: FakeAccountResponse) => { 
        setFakeAccounts(data.results) 
      })
  }, [])

  return [fakeAccounts] as const

}
export default useFakeAccounts