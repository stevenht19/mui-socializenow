interface FakeAccount {
  email: string
  login: {
    uuid: string
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