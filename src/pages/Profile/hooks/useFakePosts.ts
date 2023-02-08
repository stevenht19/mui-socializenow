import useSWRImmutable from 'swr/immutable'
import { Fetcher } from 'swr'
import { FakeAccount, Post } from '@/models'
import { postAdapter } from '../adapters/postAdapter'
import { FakePostResponse } from '../types'

const API = `${import.meta.env.VITE_FAKE_DATA_API_URL}/posts/user`

type FetcherParams = {
  url: string
  user: FakeAccount
}

const fetcher: Fetcher<Post[], FetcherParams> = ({ url, user }) => fetch(url)
  .then((res) => res.json())
  .then((res: FakePostResponse) => res.posts.map((res) => postAdapter(res, user)))

export const useFakePosts = (userId: string, user?: FakeAccount) => {
  const { data, isLoading } = useSWRImmutable(user ? `${API}/${userId}` : null, (url) => fetcher({ url, user: user! }))

  return {
    posts: data ?? [],
    isLoading
  }
}