import { Card, CardHeader, CardContent, Skeleton } from '@mui/material'

export const PostSkeleton = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Skeleton
            animation='wave'
            variant='circular'
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation='wave'
            height={15}
            width='80%'
            sx={{ mb: 1 }}
          />
        }
        subheader={
          <Skeleton
            animation='wave'
            height={15}
            width='40%'
          />
        }
      />
      <Skeleton
        sx={{ height: 300 }}
        animation='wave'
        variant='rectangular'
      />
      <CardContent>
        <>
          <Skeleton animation="wave" height={15} sx={{ mb: .8 }} />
          <Skeleton animation="wave" height={15} width='80%' />
        </>
      </CardContent>

    </Card>
  )
}
