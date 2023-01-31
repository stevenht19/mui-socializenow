import { useState } from 'react'

const useAnchor = () => {
  const [anchorEl, setAnchor] = useState<HTMLElement | null>(null)

  const isOpen = Boolean(anchorEl)

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchor(e.currentTarget)
  }

  const onClose = () => {
    setAnchor(null)
  }

  return {
    anchorEl,
    isOpen,
    onClick,
    onClose
  }
}

export default useAnchor