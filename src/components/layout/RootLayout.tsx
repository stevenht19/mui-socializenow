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
        disableGutters
        sx={{
          display: 'flex'
        }}
      >
        <Sidebar />
        <Outlet>
          {children}
        </Outlet>
      </Container>
    </Fragment>
  )
}
