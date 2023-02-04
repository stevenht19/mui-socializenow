import Stack from '@mui/material/Stack'

type Props<Item> = {
  items: Item[]
  renderItem: (item: Item) => React.ReactNode
  skeletonRender?: (n: number) => React.ReactNode
}

export function ListView<Item>({ 
  items,
  skeletonRender,
  renderItem 
}: Props<Item>) {
  return (
    <Stack 
      spacing={4}
      pb={4}
      px={4}
    >
      {
        Boolean(items.length) ? (
          items.map(renderItem)
        ) : (
          skeletonRender && (
            [1, 2, 3, 4, 5].map(skeletonRender)
          )
        )
      }
    </Stack>
  )
}
