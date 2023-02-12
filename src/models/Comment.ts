import Account from './User';

interface Comment {
  _id: string
  author: Account
  text: string
  createdAt: Date
}

export default Comment
