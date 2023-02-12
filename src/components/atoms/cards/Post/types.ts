import { Account, Comment } from '@/models'

export type CreateComment = {
  author: Account['_id']
  text: Comment['text']
}

export type Inputs = {
  text: Comment['text']
}