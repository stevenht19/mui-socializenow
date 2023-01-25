import Stack from '@mui/material/Stack'

export default function ListView({ children }: {
  children: React.ReactNode
}) {
  return (
    <Stack spacing={3} pb={3}>
      {children}
    </Stack>
  )
}
