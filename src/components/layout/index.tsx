import { Fragment } from 'react'
import { Box, Container } from '@mui/material'
import { Sidebar } from '@/components/layout/Sidebar'
import { Appbar } from '@/components/layout/Appbar'

export default function AppLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <Appbar />
      <Container
        disableGutters
        sx={{ 
          display: 'flex', 
        }}
      >
        <Sidebar />
        <Box
          mx='auto'
          flex={1}
          pt={3}
          minHeight='100vh'
        >
          {children}
        </Box>
      </Container>
    </Fragment>
  )
}
