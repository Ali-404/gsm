import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import theme from './theme/muiTheme'
import routes from './routes/routes'



import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RouterProvider router={routes} >
    </RouterProvider>
  </ThemeProvider>
  </React.StrictMode>
)
