import FakeAccount, { FakeAccountResponse } from '@/models/FakeAccount'
import { useEffect, useState } from 'react'

const API = 'https://randomuser.me/api/?results=5'

const useFakeAccounts = () => {
  const [fakeAccounts, setFakeAccounts] = useState<FakeAccount[]>([])

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data: FakeAccountResponse) => { 
        console.log(data.results)
        setFakeAccounts(data.results) 
      })
  }, [])

  return [fakeAccounts] as const

}
export default useFakeAccounts