import { User } from './User'

interface Post {
  _id: string
  author: User
  text: string
  createdAt: Date
  feeling?: string
  likes?: string[]
  image?: Image
}

type Image = {
  public_id: string
  secure_url: string
}

export default Post