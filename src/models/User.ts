interface Account {
  _id: string
  username: string
  color: string
  password: string
  picture?: string
}

export type User = Omit<Account, 'id' | 'password'>

export default Account