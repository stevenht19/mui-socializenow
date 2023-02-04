import { Flex } from '@/components/atoms/Flex'
import { Button } from '@/components/atoms/AbsoluteButton'
import { useTabPanel } from '@/context/hooks'
import { ArrowBack } from '@mui/icons-material'
import { Typography } from '@mui/material'

type Props = {
  children: React.ReactNode
  disableArrowBack?: true
}

export const ModalHeader: React.FC<Props> = ({ children, disableArrowBack }) => {
  const { onBack } = useTabPanel()

  return (
    <Flex
      py={1.8}
      position='relative'
      borderBottom={({ palette }) => (
        `1px solid ${palette.divider}`
      )}
    >
      {
        !disableArrowBack && (
          <Button
            onClick={onBack}
            sx={{ left: 7 }}
          >
            <ArrowBack />
          </Button>
        )
      }
      <Typography
        variant='body1'
        component='h2'
        fontWeight={600}
        textAlign={'center'}
        flex={1}
      >
        {children}
      </Typography>
    </Flex>
  )
}