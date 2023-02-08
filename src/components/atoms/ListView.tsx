import Stack from '@mui/material/Stack'

type Props<Item> = {
  items: Item[]
  isLoading?: boolean
  customMessage?: string
  renderItem: (item: Item) => React.ReactNode
  skeletonRender?: (n: number) => React.ReactNode
}

export function ListView<Item>({ 
  items,
  isLoading,
  customMessage,
  skeletonRender,
  renderItem 
}: Props<Item>) {
  return (
    <Stack 
      spacing={4}
      pb={4}
    >
      {
        isLoading ? (
          skeletonRender && (
            [1, 2, 3, 4, 5].map(skeletonRender)
          )
        ) : (
          items.length ? (
            items?.map(renderItem)
          ) : customMessage
        )
      }
    </Stack>
  )
}
