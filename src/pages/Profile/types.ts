import { DefaultParams } from 'wouter'

export type Props = {
  params: DefaultParams
}

export type FakePost = {
  id: number
  title: string
  body: string
}

export type FakePostResponse = {
  posts: FakePost[]
}
