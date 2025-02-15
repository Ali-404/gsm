import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Dashboard from "../pages/dashboard/Dashboard"

export const routesConfig =  [
  {
    path:"/login",
    element: <div>Login</div>
  },

  {
    path: "/",
    element: <App />,
    children: [
      {
        name: "Tableau de board",
        path: "/",
        element: <Dashboard />
      },
      {
        name: "Stock",
        path: "/stock",
        element: <div>Stock</div>
      },
      {
        name: "Notifications",
        path: "/notifications",
        element: <div>Stock</div>
      },
      {
        name: "Parametres",
        path: "/settings",
        element: <div>Stock</div>
      },


    ]
  }

]


export default createBrowserRouter(routesConfig)



