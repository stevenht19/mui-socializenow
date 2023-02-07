import { Fragment } from 'react'
import { Box, Container } from '@mui/material'
import { Sidebar } from '@/components/layout/Sidebar'
import { Appbar } from '@/components/layout/Appbar'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <Appbar />
      <Container
        disableGutters
        sx={{ 
          display: 'flex',
          gap: 2
        }}
      >
        <Sidebar />
        <Box
          mx='auto'
          minHeight='100%'
          flex={1}
          pt={3}
          px={4}
        >
          {children}
        </Box>
      </Container>
    </Fragment>
  )
}
