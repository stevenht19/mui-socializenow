import { Account } from '@/models'
import { getFetch } from '@/utils'
import { Fetcher } from 'swr'
import useSWRImmutable from 'swr/immutable'

const fetcher: Fetcher<Account[], string> = async (args) => {
  return getFetch(args)
}

const useAccounts = (skip: number, limit: number) => {
  const { data, isLoading } = useSWRImmutable(`/users?skip=${skip}&limit=${limit}`, fetcher)

  return {
    accounts: data,
    isLoading
  }
}

export default useAccounts