import AppLayout from '@/components/layout'
import { useEffect } from 'react'

function App() {
  /*
  useEffect(() => {
    fetch('https://dummyapi.io/data/v1/user?limit=10', {
      headers: {
        'app-id': '63ce07e6788d90dfa295945c'
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }, [])*/
  return <>
    <AppLayout />
  </>
}

export default App
