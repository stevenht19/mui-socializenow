import { Account } from '@/models'
import { Fetcher } from 'swr'
import useSWR from 'swr'

const fetcher: Fetcher<Account, string> = async (args) => {
  return fetch(`${import.meta.env.VITE_MONGO_API_URL}${args}`)
    .then(res => res.json())
}

const useProfile = (userId: string) => {
  const { data, isLoading } = useSWR(`/users/${userId}`, fetcher)

  return {
    profile: data,
    isLoading
  }
}

export default useProfile