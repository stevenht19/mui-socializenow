import { Post, Comment } from '@/models'
import { getFetch } from '@/utils'
import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<Comment[], string> = async (args) => {
  return getFetch(`/posts${args}`)
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