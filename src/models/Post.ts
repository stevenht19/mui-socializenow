import User from './User'

interface Post {
  user: User
  text: string
  picture?: string
}
export default Post