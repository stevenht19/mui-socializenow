import { Credentials, Response, ErrorResponse } from './types'

const handleAuth = async (credentials: Credentials, path: string): Promise<Response | ErrorResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth${path}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })

  return response.json()
}

export const getUser = async (credentials: Credentials, path: string) => {
  try {
    const data = await handleAuth(credentials, path)

    if (data.type === 'error') {
      throw new Error(data.error)
    }

    const { token, user } = data

    localStorage.setItem('mui-social-app', token)

    return user    
  } catch (error) {
    if (error instanceof Error)
    throw new Error(error.message)
  }
}

export default handleAuth