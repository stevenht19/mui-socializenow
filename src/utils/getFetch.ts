const getFetch = async <T>(args: string, method?: string): Promise<T> => {
  return fetch(`${import.meta.env.VITE_MONGO_API_URL}${args}`, {
    method: method || 'GET'
  }).then((res) => res.json())
}

export default getFetch