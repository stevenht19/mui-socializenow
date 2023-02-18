import { Posts } from './components/Posts'
import { useScrollRestoration } from './hooks'

export default function Home() {
  useScrollRestoration()
  
  return (
    <Posts />
  )
}
