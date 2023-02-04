type Props = {
  children?: React.ReactNode
  index: number
  value: number
}

export const TabPanel = ({
  value,
  index,
  children
}: Props) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
    >
      {
        value === index ? (
          children
        ) : null
      }
    </div>
  )
}