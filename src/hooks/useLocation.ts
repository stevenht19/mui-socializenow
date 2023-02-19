import { useLocation as useWouterLocation } from 'wouter'

const useLocation = () => {
  const [path] = useWouterLocation()
  const splitedPath = path.split('/')

  return {
    location: '/' + splitedPath[0],
    params: splitedPath[2]?.trim()?.length ? '/' + splitedPath[2] : ''
  }

}

export default useLocation