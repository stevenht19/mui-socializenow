import { Tab } from '@mui/material'
import { TabPanelProvider } from '@/context/TabPanel'
import { ProfileCard } from './components/ProfileCard'
import { PostsView } from './views/PostsView'
import { AboutView } from './views/AboutView'
import { LikesView } from './views/LikesView'
import { Props } from './types'

export default function Profile({ params }: Props) {
  return (
    <div>
      <ProfileCard params={params} />
      <TabPanelProvider
        views={[
          <PostsView params={params} />, 
          <AboutView params={params} />, 
          <LikesView params={params} />
        ]}
      >
        <Tab label='Posts' />
        <Tab label='About' />
        <Tab label='Likes' />
      </TabPanelProvider>
    </div>
  )
}