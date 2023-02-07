import { FakeAccount } from '@/models'
import { Fetcher } from 'swr'
import useSWRImmutable from 'swr/immutable'

const fetcher: Fetcher<FakeAccount, string> = (args) => fetch(args)
  .then((res) => res.json())
  .then((res: FakeAccount) => res)


export const useFakeProfile = (userId: string) => {
  const { data, isLoading } = useSWRImmutable(`https://dummyjson.com/users/${userId}`, fetcher)

  return {
    profile: data,
    isLoading
  }

}
