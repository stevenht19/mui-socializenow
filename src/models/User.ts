interface Account {
  _id: string
  username: string
  color: string
  password: string
  picture?: string
}

export type User = Omit<Account, '_id' | 'password'>

export default Account