import { Account } from '@/models'

export type Credentials = {
  username: Account['username']
  password: string
}

export type Response = {
  type: 'sucess',
  token: string,
  user: Account
}

export type ErrorResponse = {
  type: 'error',
  error: string
}