import Comment from './Comment'
import Account from './User'

interface Post {
  _id: string
  author: Account
  text: string
  createdAt: Date
  feeling?: string
  likes: string[]
  image?: Image
  totalComments: number
  comments: Comment[]
}

type Image = {
  public_id: string
  secure_url: string
}

export default Post