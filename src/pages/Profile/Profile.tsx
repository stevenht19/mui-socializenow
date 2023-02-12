import { DefaultParams, Redirect } from 'wouter'
import { Tab } from '@mui/material'
import { Routes } from '@/routes'
import { TabPanelProvider } from '@/context/TabPanel'
import { ProfileCard } from './components/ProfileCard'
import { Skeleton } from './components/Skeleton'
import { AboutView, LikesView, PostsView } from './views'
import { useProfile, useScrollRestoration } from './hooks'

type Props = {
  params: DefaultParams
}

export default function Profile({
  params
}: Props) {

  useScrollRestoration(0)

  const userId = params!.id!

  return (
    <div>
      <Card id={userId} />
      <TabPanelProvider views={[
        <PostsView id={userId} />,
        <AboutView />,
        <LikesView id={userId} />
      ]}>
        <Tab label='Posts' />
        <Tab label='About' />
        <Tab label='Likes' />
      </TabPanelProvider>
    </div>
  )
}

const Card = (props: { id: string }) => {
  const { profile, isLoading } = useProfile(props.id)

  if (isLoading) {
    return <Skeleton />
  }

  if (!isLoading && !profile) {
    return (
      <Redirect to={Routes.MAIN} />
    )
  }

  return <ProfileCard {...profile!} />
}
