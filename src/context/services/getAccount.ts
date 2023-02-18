import { Account } from '@/models'
import { getFetch } from '@/utils'

type ErrorResponse = {
  type: 'error'
  error: string
}

type Response = {
  type: 'sucess',
  user: Account
}

export const getAccount = async (token: string) => {
  const data = await getFetch<Response | ErrorResponse>('/auth', 'GET', {
    'authorization': `Bearer ${token}`
  })

  if (data.type === 'error') {
    throw new Error(data.error)
  }

  return data.user
}
