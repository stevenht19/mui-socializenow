import { FakeAccount } from '@/models'
import { Fetcher } from 'swr'
import useSWRImmutable from 'swr/immutable'

const fetcher: Fetcher<FakeAccount, string> = (args) => fetch(`${import.meta.env.VITE_FAKE_DATA_API_URL}${args}`)
  .then((res) => res.json())
  .then((res: FakeAccount) => res)


export const useFakeProfile = (userId: string) => {
  const { data, isLoading } = useSWRImmutable(`/users/${userId}`, fetcher)

  return {
    profile: data,
    isLoading
  }
}
