import { useContext } from 'react'
import { TabPanelContext } from '../TabPanel'

const useTabPanel = () => {
  return useContext(TabPanelContext)
}

export default useTabPanel