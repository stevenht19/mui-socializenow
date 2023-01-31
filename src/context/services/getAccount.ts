import { User } from '@/models'

type ErrorResponse = {
  type: 'error'
  error: string
}

type Response = {
  type: 'sucess',
  user: User
}

export const getAccount = async (token: string) => {
  const response = await fetch('http://localhost:4000/auth', {
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
