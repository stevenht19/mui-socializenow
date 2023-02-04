import { Posts } from './components/Posts'
import { UserPosts } from './components/UserPosts'

export default function Home() {
  return <>
    <UserPosts />
    <Posts />
  </>
}
