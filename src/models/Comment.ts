import Account from './User';

interface Comment {
  _id: string
  author: Account
  text: string
  likes: string[] | null
  createdAt: Date
}

export default Comment
