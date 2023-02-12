import { Box, styled } from '@mui/material'

const Container = styled(Box)({
  paddingTop: '2rem',
  maxWidth: '56rem',
  paddingInline: '2.2rem',
  marginInline: 'auto',
  width: '100%',
})

export const Outlet = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
