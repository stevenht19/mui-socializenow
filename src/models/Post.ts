import { User } from './User'

interface Post {
  user: User
  text: string
  picture?: string
  date: Date
}
export default Post