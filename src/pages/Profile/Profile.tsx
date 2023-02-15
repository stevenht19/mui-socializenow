import { DefaultParams, Redirect } from 'wouter'
import { Box, Tab } from '@mui/material'
import { Routes } from '@/utils'
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
  const userId = params!.id!

  useScrollRestoration(0)

  return (
    <Box py={1}>
      <Card id={userId} />
      <TabPanelProvider views={[
        <PostsView id={userId} />,
        <AboutView />,
        <LikesView id={userId} />
      ]}>
        <Tab label='Posts' disableTouchRipple />
        <Tab label='About' disableTouchRipple />
        <Tab label='Likes' disableTouchRipple />
      </TabPanelProvider>
    </Box>
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
