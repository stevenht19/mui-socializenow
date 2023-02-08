import { Account } from '@/models'

type ErrorResponse = {
  type: 'error'
  error: string
}

type Response = {
  type: 'sucess',
  user: Account
}

export const getAccount = async (token: string) => {
  const response = await fetch(`${import.meta.env.VITE_MONGO_API_URL}/auth`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${token}`
    }
  })

  const data: ErrorResponse | Response = await response.json()

  if (data.type === 'error') {
    throw new Error(data.error)
  }

  return data.user
}
