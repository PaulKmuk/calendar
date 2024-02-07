import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Calendar from "./pages/Calendar/Calendar.jsx"
import ListEvents from "./pages/ListEvents/ListEvents"
import Navbar from "./components/Navbar/Navbar"
import {
   createBrowserRouter,
   RouterProvider,
   Outlet
} from "react-router-dom"

function App() {

   const Layout = () => {
      return (
         <>
            <Navbar />
            <Outlet />
         </>
      )
   }

   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <Calendar />
            },
            {
               path: "/calendar",
               element: <Calendar />
            },
            {
               path: "/list",
               element: <ListEvents />
            },
         ]
      },
      {
         path: "/login",
         element: <Login />
      },
      {
         path: "/register",
         element: <Register />
      },
   ])

   return (
      <div>
         <RouterProvider router={router}/>
      </div>
   )
}

export default App
