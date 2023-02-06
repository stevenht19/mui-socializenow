interface FakeAccount {
  id: number
  firstName: string
  lastName: string
  email: string
  username: string
  image: string
}

export type FakeAccountResponse = {
  users: FakeAccount[]
}

export default FakeAccount