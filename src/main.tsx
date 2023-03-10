import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter'
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>,
)
