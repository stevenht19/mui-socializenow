import { Account } from '@/models'
import { getFetch } from '@/utils'
import { Fetcher } from 'swr'
import useSWR from 'swr'

const fetcher: Fetcher<Account, string> = async (args) => {
  return getFetch(args)
}

const useProfile = (userId: string) => {
  const { data, isLoading } = useSWR(`/users/${userId}`, fetcher, {
    revalidateOnFocus: false
  })

  return {
    profile: data,
    isLoading
  }
}

export default useProfile