const likePost = async (postId: string) => {
  return fetch(`${import.meta.env.VITE_MONGO_API_URL}/posts/like/${postId}`, {
    method: 'PUT',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('mui-social-app')!
    }
  })
}
export default likePost
