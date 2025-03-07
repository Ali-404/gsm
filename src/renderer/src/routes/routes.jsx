import {  createHashRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../pages/dashboard/Dashboard'
import Stock from '../pages/stock/stock'
import Parametres from '../pages/parametres/parametres'
import Notifications from '../pages/notifications/notifications'
import Login from '../pages/login/Login'

export const routesConfig = [
    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/',
        element: <App />,
        children: [
            {
                name: 'Tableau de board',
                path: '/',
                element: <Dashboard />
            },
            {
                name: 'Stock',
                path: '/stock',
                element: <Stock />
            },
            {
                name: 'Notifications',
                path: '/notifications',
                element: <Notifications />
            },
            {
                name: 'Parametres',
                path: '/parametres',
                element: <Parametres />
            }
        ]
    }
]

export default createHashRouter(routesConfig)
