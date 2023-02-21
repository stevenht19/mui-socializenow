import { getFetch } from '@/utils'
import { setLocalStorage } from '@/utils/localStorage'
import { Credentials, Response, ErrorResponse } from './types'

const handleAuth = async (credentials: Credentials, path: string): Promise<Response | ErrorResponse> => {
  const res: Response | ErrorResponse = await getFetch(`/auth${path}`, 'POST', {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, JSON.stringify(credentials))
  
  return res
}

export const getUser = async (credentials: Credentials, path: string) => {
  try {
    const data = await handleAuth(credentials, path)
    
    if (data.type === 'error') {
      throw new Error(data.error)
    }

    const { user, token } = data
    
    setLocalStorage('mui-social-app', token)

    return user
  } catch (error) {
    if (error instanceof Error)
    throw new Error(error.message)
  }
}

export default handleAuth