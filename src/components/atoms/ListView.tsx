import Stack from '@mui/material/Stack'

type Props<Item> = {
  items: Item[]
  isLoading?: boolean
  customMessage?: string
  py?: number
  renderItem: (item: Item) => React.ReactNode
  skeletonRender?: (n: number) => React.ReactNode
}

export function ListView<Item>({ 
  items,
  isLoading,
  customMessage,
  py,
  skeletonRender,
  renderItem 
}: Props<Item>) {
  return (
    <Stack 
      spacing={4}
      pb={4}
      {...(py && { py })}
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
