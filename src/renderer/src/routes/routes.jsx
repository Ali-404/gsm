import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Dashboard from "../pages/dashboard/Dashboard"

const routes =  [
  {
    path:"/login",
    element: <div>Login</div>
  },

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/stock",
        element: <div>Stock</div>
      },
      {
        path: "/notifications",
        element: <div>Stock</div>
      },
      {
        path: "/settings",
        element: <div>Stock</div>
      },


    ]
  }

]


export default createBrowserRouter(routes)



