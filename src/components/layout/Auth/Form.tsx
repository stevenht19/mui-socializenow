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
      <LoadingButton loading={isSubmitting}>
        {textButton}
      </LoadingButton>
    </Box>
  )
}

type FormInputProps = {
  label: string
  type?: string
  value: string
  name: string
  gap?: number
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export const FormInput = ({ 
  name,
  gap,
  label = '',
  value = '',
  type = 'text',
  onChange
}: FormInputProps) => (
  <TextField
    label={label}
    type={type} 
    value={value}
    sx={{ mt: gap || 2.2 }}
    name={name}
    onChange={onChange}
    fullWidth
  />
)
