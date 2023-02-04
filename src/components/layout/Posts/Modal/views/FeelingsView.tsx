import { useFormContext } from 'react-hook-form'
import { useTabPanel } from '@/context/hooks'
import { Grid, Typography, Box, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import { emojis } from '../emojis'
import { Emoji } from '../types'
import { FormBox } from '../components/Box'

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: .6rem;
  cursor: pointer;
  &:hover {
    background-color: ${grey[100]};
  }
`

export const FeelingsView = () => {
  return (
    <FormBox title='How are you feeling today?'>
      <Grid container>
        {
          emojis.map((props) => (
            <FeelingItem
              key={props.emoji}
              {...props}
            />
          ))
        }
      </Grid>
    </FormBox>
  )
}

const FeelingItem = ({ name, emoji }: Emoji) => {
  const { setValue } = useFormContext()
  const { onBack } = useTabPanel()

  const onClick = () => {
    onBack()
    setValue('feeling', `${emoji}-${name}`)
  }

  return (
    <Grid
      item
      xs={6}
      onClick={onClick}
      fontSize='1.4rem'
    >
      <StyledBox>
        {emoji}
        <Typography
          variant='body2'
          color='text.secondary'
          component='span'
          ml={1.3}
        >
          {name.substring(0, 1).toUpperCase() + name.substring(1)}
        </Typography>
      </StyledBox>
    </Grid>
  )
}