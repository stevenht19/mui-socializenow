import { FakeAccount, Post } from '@/models'

type FakePost = {
  id: number
  title: string
  body: string
}

export const postAdapter = (entrie: FakePost, fakeUser: FakeAccount): Post => {
  return ({
    _id: String(entrie.id),
    text: entrie.body,
    createdAt: new Date('2022-01-01'),
    author: {
      _id: String(fakeUser.id),
      username: fakeUser.username,
      color: 'none',
      picture: fakeUser.image
    }
  })
}