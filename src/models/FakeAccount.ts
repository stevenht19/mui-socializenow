interface FakeAccount {
  id: number
  firstName: string
  lastName: string
  email: string
  username: string
  image: string
  phone: string
  address: Address
}

type Address = {
  state: string
  city: string
}

export type FakeAccountResponse = {
  users: FakeAccount[]
}

export default FakeAccount