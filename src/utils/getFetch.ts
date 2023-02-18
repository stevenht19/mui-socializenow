const getFetch = async <T>(
  args: string, 
  method?: string,
  headers?: HeadersInit,
  body?: FormData | string,
): Promise<T> => {
  return fetch(`${import.meta.env.VITE_MONGO_API_URL}${args}`, {
    method: method || 'GET',
    ...(headers && {
      headers
    }),
    ...(body && {
      body
    })
  }).then((res) => res.json())
}

export default getFetch