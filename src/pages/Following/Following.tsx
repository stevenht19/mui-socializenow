import { Grid, Skeleton } from '@mui/material'
import { useFakeUsers } from '@/hooks'
import { UserCard } from './components/UserCard'
import { Item } from './components/Item'

let n = 0
const skeletonArray = new Array(15).fill('').map(() => n++)

const Following = () => {
  const [fakeUsers, isLoading] = useFakeUsers('?limit=15&skip=16')

  return (
    <Grid container spacing={4} pb={4}>
      {
        isLoading ? (
          skeletonArray.map((number) => (
            <Item key={number}>
              <Skeleton
                variant='rectangular'
                height={250}
                sx={{
                  borderRadius: 2
                }}
              />
            </Item>
          ))
        ) : (
          fakeUsers?.map((props) => (
            <UserCard
              key={props.id}
              {...props}
            />
          ))
        )
      }
    </Grid>
  )
}

export default Following