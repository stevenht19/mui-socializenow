import { LoadingButton } from '@/components/atoms/LoadingButton'
import { Box, TextField, Typography } from '@mui/material'

type Props = {
  subtitle: string
  textButton: string
  isSubmitting: boolean
  children: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Form: React.FC<Props> = ({ 
  subtitle,
  textButton,
  onSubmit,
  isSubmitting,
  children
}) => {
  return (
    <Box component='form' p={3.5} onSubmit={onSubmit}>
      <Typography mb={1.5} color='text.secondary'>
        {subtitle}
      </Typography>
      {children}
      <LoadingButton 
        loading={isSubmitting} 
        isDisabled={false}
      >
        {textButton}
      </LoadingButton>
    </Box>
  )
}
