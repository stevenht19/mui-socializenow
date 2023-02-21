import { Typography } from '@mui/material'

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed velit consequat, varius lectus porta, pellentesque dui. Proin vitae tristique erat. Nunc commodo nunc eget dui finibus, nec sagittis diam venenatis. Mauris posuere ante eget nibh semper tincidunt. Ut eget leo euismod, vulputate massa quis, hendrerit felis. Integer sit amet odio magna.`

const AboutView = () => {
  return (
    <Typography
      component='p'
      color='text.secondary'
      textAlign='center'
      py={3}
    >
      {text}
    </Typography>
  )
}

export default AboutView