import { grey } from '@mui/material/colors';
import { Search, Add, AccountCircle } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  InputBase,
  Divider,
  IconButton,
  Button,
  Stack,
} from '@mui/material';

const SearchBar = () => {
  return (
    <Box
      bgcolor={grey[100]}
      pl={2.5}
      pr={1}
      py={.4}
      borderRadius={6}
      flex={.45}
      sx={{
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}
    >
      <InputBase
        placeholder='Search posts'
        sx={{
          flex: 1
        }}
      />
      <Divider
        orientation='vertical'
        sx={{ 
          height: 28, 
          m: 0.5 
        }}
      />
      <IconButton>
        <Search />
      </IconButton>
    </Box>
  )
}

const Header = () => {
  return (
    <AppBar
      position='sticky'
      color='inherit'
      variant='outlined'
    >
      <Toolbar>
        <Container sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          App Logo
          <SearchBar />
          <Stack direction='row' spacing={2}>
            <Button variant='outlined' startIcon={<Add />}>
              Post
            </Button>
            <Button variant='contained' startIcon={<AccountCircle />}>
              Login
            </Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
export default Header