import { Fetcher } from 'swr'
import FakeAccount, { FakeAccountResponse } from '@/models/FakeAccount'
import useSWRImmutable from 'swr/immutable'

const fetcher: Fetcher<FakeAccount[], string> = async (args) => {
  return fetch(`${import.meta.env.VITE_FAKE_DATA_API_URL}/users` + args)
    .then(res => res.json())
    .then((data: FakeAccountResponse) => data.users)
}

const useFakeUsers = (q?: string) => {
  const { data, isLoading } = useSWRImmutable(q || '?limit=4', fetcher)

  return [data, isLoading] as const

}
export default useFakeUsers