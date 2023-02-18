import { Box, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  paddingTop: '2rem',
  maxWidth: '56rem',
  marginInline: 'auto',
  width: '100%',
  paddingInline: '.65rem',
  [theme.breakpoints.up('md')]: {
    paddingInline: '2.2rem',
  }
}))

export const Outlet = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
