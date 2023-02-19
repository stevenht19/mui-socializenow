export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getToken = (key: string) => {
  return `Bearer ${getLocalStorage(key)}`
}