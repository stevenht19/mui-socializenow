import FakeAccount, { FakeAccountResponse } from '@/models/FakeAccount'
import { useEffect, useState } from 'react'

const API = 'https://randomuser.me/api/?results=5'

export const useFakeAccounts = () => {
  const [fakeAccounts, setFakeAccounts] = useState<FakeAccount[]>([])

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data: FakeAccountResponse) => setFakeAccounts(data.results))
  }, [])

  return [fakeAccounts] as const

}
