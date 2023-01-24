import AppLayout from '@/components/layout'
import { AccountProvider } from '@/context'
import { Home } from '@/pages/Home'

function App() {
  return (
    <AccountProvider>
      <AppLayout>
        <Home />
      </AppLayout>
    </AccountProvider>
  )
}

export default App
