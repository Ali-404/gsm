import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import theme from './theme/muiTheme'
import routes from './routes/routes'



import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} >
      </RouterProvider>
    </ThemeProvider>
  </Provider>
  </React.StrictMode>
)
