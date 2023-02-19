import { useTabPanel } from '@/context/hooks'
import { EmojiEmotions, Photo } from '@mui/icons-material'
import { Tabs as MuiTabs, Tab, styled, Tooltip } from '@mui/material'

const StyledTabs = styled(MuiTabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  }
})

const style = (color: string) => ({
  minWidth: '0px', 
  px: 1.2, 
  opacity: 1,
  color 
})

export const Tabs = ({ onOpen }: {
  onOpen: () => void
}) => {
  const { value, onChange } = useTabPanel()

  return (
    <StyledTabs value={value} onChange={onChange}>
      <Tab
        disableRipple
        icon={<EmojiEmotions />}
        sx={style('#ffce47')}
        value={1}
      />
      <Tab
        icon={<Photo />}
        sx={style('#44bc78 !important')}
        value={0}
        onClick={onOpen}
      />
    </StyledTabs>
  )
}
