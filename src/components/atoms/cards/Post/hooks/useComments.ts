import { Post, Comment } from '@/models'
import { getFetch } from '@/utils'
import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<Comment[], string> = async (args) => {
  return getFetch(`/posts${args}`)
}

const useComments = (postId: Post['_id']) => {
  const { data, isLoading, mutate } = useSWR('/comments/' + postId, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false
  })

  return {
    comments: data ?? [],
    isLoading,
    mutate
  }
}
export default useComments