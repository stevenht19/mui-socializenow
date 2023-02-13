import { Post, Comment } from '@/models'
import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<Comment[], string> = async (args) => {
  return fetch(`${import.meta.env.VITE_MONGO_API_URL}/posts${args}`)
    .then(res => res.json())
}

const useComments = (postId: Post['_id']) => {
  const { data, isLoading } = useSWR('/comments/' + postId, fetcher, {
    revalidateOnFocus: false
  })

  return {
    comments: data ?? [],
    isLoading
  }
}
export default useComments