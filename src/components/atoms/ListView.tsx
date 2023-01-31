import Stack from '@mui/material/Stack'

type Props<Item> = {
  pb?: true
  items: Item[]
  renderItem: (item: Item) => React.ReactNode
}

export function ListView<Item>({ pb, items, renderItem }: Props<Item>) {
  return (
    <Stack 
      spacing={3} 
      {...(pb && { pb: 3 })}
    >
      {items.map(renderItem)}
    </Stack>
  )
}
