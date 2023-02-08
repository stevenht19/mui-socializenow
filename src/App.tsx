import { Route } from 'wouter'
import { lazy, Suspense } from 'react'
import { AccountProvider, PostProvider } from '@/context'
import { RootLayout } from '@/components/layout'
import Home from '@/pages/Home'

const Following = lazy(() => import('@/pages/Following'))
const Profile = lazy(() => import('@/pages/Profile'))

function App() {
  return (
    <AccountProvider>
      <PostProvider>
        <RootLayout>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/following'>
            <Suspense fallback={null}>
              <Following />
            </Suspense>
          </Route>
          <Route path='/fakeusers/:id'>
            {(params) => (
              <Suspense fallback={null}>
                <Profile params={params} />
              </Suspense>
            )}
          </Route>
        </RootLayout>
      </PostProvider>
    </AccountProvider>
  )
}

export default App
