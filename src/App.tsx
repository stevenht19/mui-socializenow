import { Home } from '@/pages/Home'
import { AccountProvider, PostProvider } from '@/context'
import AppLayout from '@/components/layout'

function App() {
  return (
    <AccountProvider>
      <PostProvider>
        <AppLayout>
          <Home />
        </AppLayout>
      </PostProvider>
    </AccountProvider>
  )
}

export default App
