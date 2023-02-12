import { Account } from '@/models'
import { Fetcher } from 'swr'
import useSWRImmutable from 'swr/immutable'

const fetcher: Fetcher<Account[], string> = async (args) => {
  return fetch(`${import.meta.env.VITE_MONGO_API_URL}${args}`).then((res) => res.json())
}

const useAccounts = (skip: number, limit: number) => {
  const { data, isLoading } = useSWRImmutable(`/users?skip=${skip}&limit=${limit}`, fetcher)

  return {
    accounts: data,
    isLoading
  }
}

export default useAccounts