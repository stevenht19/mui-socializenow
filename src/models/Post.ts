import { User } from './User'

interface Post {
  _id: string
  author: User
  text: string
  createdAt: Date
  feeling?: string
  picture?: string
}

export default Post