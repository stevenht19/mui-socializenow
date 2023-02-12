import { Post } from '@/models'
import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<Post[], string> = async (args) => {
  return fetch(`${import.meta.env.VITE_MONGO_API_URL}${args}`)
    .then(res => res.json())
}

const usePosts = (userId: string) => {
  const { data, isLoading } = useSWR(`/posts/${userId}`, fetcher)
  
  return {
    posts: data,
    isLoading
  }

}

export default usePosts