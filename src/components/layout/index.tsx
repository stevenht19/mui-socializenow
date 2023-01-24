import { Box, Container } from '@mui/material'
import { Sidebar } from '@/components/layout/Sidebar'
import Appbar from './Appbar'

export default function AppLayout({ children }: {
  children: React.ReactNode
}) {
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
        {children}
      </Box>
    </Container>
  </>
}
