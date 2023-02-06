import { DefaultParams } from 'wouter'
import { useState, useEffect } from 'react'
import { TabPanelProvider } from '@/context/TabPanel'
import { FakeAccount } from '@/models'
import { Tab } from '@mui/material'
import { PostsView } from './views/PostsView'
import { AboutView } from './views/AboutView'
import { LikesView } from './views/LikesView'
import { ProfileCard } from './components/ProfileCard'
import { ProfileCardSkeleton } from './components/ProfileCardSkeleton'
import { Statistics } from './components/ProfileStatistics'

type Props = {
  params: DefaultParams
}

export default function Profile({ params }: Props) {
  const [user, setUser] = useState<FakeAccount | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/users/${params.id}`)
      .then((res) => res.json())
      .then(setUser)
      .finally(() => setLoading(false))
  }, [params.id])

  return (
    <div>
      {
        !isLoading && user ? (
          <ProfileCard {...user} />
        ) : (
          <ProfileCardSkeleton />
        )
      }
      <TabPanelProvider 
        views={[<PostsView />, <AboutView/>, <LikesView />]}
      >
        <Tab label='Posts' />
        <Tab label='About' />
        <Tab label='Likes' />
      </TabPanelProvider>
    </div>
  )
}