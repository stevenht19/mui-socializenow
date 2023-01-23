import { Box, Container } from '@mui/material'
import ListView from '@/components/atoms/ListView'
import PostCard from '@/components/atoms/PostCard'
import PostInput from '@/components/atoms/PostInput'
import Appbar from './Appbar'
import Sidebar from './Sidebar/Sidebar'

export default function AppLayout() {
  return <>
    <Appbar />
    <Container
      sx={{
        display: 'flex',
        gap: 10
      }}
    >
      <Sidebar />
      <Box
        mx='auto'
        flex={1}
        pt={3}
      >
        <PostInput />
        <ListView>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </ListView>
      </Box>
    </Container>
  </>
}
