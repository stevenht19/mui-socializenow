import { Box, Container } from '@mui/material'
import Appbar from '@/components/layout/Appbar'
import Sidebar from '@/components/layout/Sidebar'
import ListView from '@/components/atoms/ListView'
import PostCard from '@/components/atoms/PostCard'

function App() {
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
        flex={1}  
        mx='auto' 
        pt={3}
      >
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

export default App
