import { Box, Button, TextField, Typography } from '@mui/material'

type Props = {
  subtitle: string
  textButton: string
  inputs: string[]
}

export const Form: React.FC<Props> = ({ 
  subtitle,
  textButton, 
  inputs
}) => {
  return (
    <Box component='form' p={3.5}>
      <Typography mb={1.5} color='text.secondary'>
        {subtitle}
      </Typography>
      {
        inputs.map((input) => (
          <TextField
            key={input}
            label={input}
            sx={{
              mt: 2.2
            }}
            fullWidth
          />
        ))
      }
      <Button
        variant='contained'
        fullWidth
        size='large'
        sx={{
          mt: 5.2
        }}
      >
        {textButton}
      </Button>
    </Box>
  )
}
