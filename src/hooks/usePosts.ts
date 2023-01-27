import { PostContext } from '@/context/Posts'
import { useContext } from 'react'

const usePosts = () => {
  return useContext(PostContext)
}
export default usePosts
