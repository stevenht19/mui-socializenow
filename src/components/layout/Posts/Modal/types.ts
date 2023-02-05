import { Post } from '@/models'

export type CreatePost = {
  author: string
  text: Post['text']
  image?: File
  feeling?: Post['feeling']
}

export type Emoji = {
  name: string
  emoji: string
}