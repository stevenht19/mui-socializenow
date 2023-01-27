import Stack from '@mui/material/Stack'

export default function ListView({ pb, children }: {
  pb?: boolean
  children: React.ReactNode
}) {
  return (
    <Stack 
      spacing={3} 
      {...(pb && { pb: 3 })}
    >
      {children}
    </Stack>
  )
}
