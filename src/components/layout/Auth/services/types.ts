import { Account, User } from '@/models'

export type Credentials = {
  username: Account['username']
  password: Account['password']
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