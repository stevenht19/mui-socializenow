import { Typography } from '@mui/material'

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed velit consequat, varius lectus porta, pellentesque dui. Proin vitae tristique erat. Nunc commodo nunc eget dui finibus, nec sagittis diam venenatis. Mauris posuere ante eget nibh semper tincidunt. Ut eget leo euismod, vulputate massa quis, hendrerit felis. Integer sit amet odio magna. Curabitur hendrerit arcu vel eros consectetur, eget congue mauris commodo. Maecenas sed ultricies tellus, at rutrum mi.`

const AboutView = () => {
  return (
    <Typography
      component='p'
      color='text.secondary'
      py={3}
    >
      {text}
    </Typography>
  )
}

export default AboutView