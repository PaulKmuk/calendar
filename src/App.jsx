import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Calendar from "./pages/Calendar/Calendar.jsx"
import ListEvents from "./pages/ListEvents/ListEvents"
import Navbar from "./components/Navbar/Navbar"
import { useSelector } from "react-redux"
import {
   createBrowserRouter,
   RouterProvider,
   Outlet
} from "react-router-dom"

function App() {

   const user = useSelector(state => state.auth.user)
   const userLocalStorage = JSON.parse(localStorage.getItem("user"))

   const Layout = () => {
      return (
         <>
            <Navbar />
            <Outlet />
         </>
      )
   }

   // console.log(user);
   // console.log(userLocalStorage);

   const router = createBrowserRouter([
      {
         path: "/",
         element: (user || userLocalStorage) ? <Layout /> : <Login />,
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
