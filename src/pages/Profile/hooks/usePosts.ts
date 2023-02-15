import { Post } from '@/models'
import { getFetch } from '@/utils'
import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<Post[], string> = async (args) => {
  return getFetch(args)
}

const usePosts = (userId: string) => {
  const { data, isLoading } = useSWR(`/posts/${userId}`, fetcher, {
    revalidateOnFocus: false,
  })
  
  return {
    posts: data,
    isLoading
  }

}

export default usePosts