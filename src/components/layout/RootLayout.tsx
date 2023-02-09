import { Fragment } from 'react'
import { Container, Toolbar } from '@mui/material'
import { Sidebar } from '@/components/layout/Sidebar'
import { Appbar } from '@/components/layout/Appbar'
import { Outlet } from './Outlet'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <Appbar />
      <Toolbar />
      <Container
        sx={{
          display: 'flex',
        }}
        disableGutters
      >
        <Sidebar />
        <Outlet>
          {children}
        </Outlet>
      </Container>
    </Fragment>
  )
}
