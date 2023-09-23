import {Navigate, useRoutes} from 'react-router-dom'
import Login from '../views/login'

export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="login"></Navigate>
  },
  {
    path: "/login",
    element: <Login></Login>,
    meta: {
      requiresAuth: false
    }
  }
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router