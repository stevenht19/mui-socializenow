import { Post } from '@/models'

export type CreatePost = {
  author: string
  text: Post['text']
  picture?: File
  feeling?: Post['feeling']
}

export type Emoji = {
  name: string
  emoji: string
}