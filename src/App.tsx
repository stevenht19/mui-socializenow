import { Route } from 'wouter'
import { AccountProvider, PostProvider } from '@/context'
import { RootLayout } from '@/components/layout'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile/Profile'

function App() {
  return (
    <AccountProvider>
      <RootLayout>
        <PostProvider>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/users/:id'>
            {(params) => <Profile params={params} />}
          </Route>
        </PostProvider>
      </RootLayout>
    </AccountProvider>
  )
}

export default App
