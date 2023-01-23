interface FakeAccount {
  email: string
  login: {
    username: string
  }
  name: {
    first: string
    last: string
  }
  picture: {
    medium: string
    thumbnail: string
  }
}

export type FakeAccountResponse = {
  results: FakeAccount[]
}

export default FakeAccount