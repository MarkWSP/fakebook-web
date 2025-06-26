import { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
const Login = lazy(()=> import ('../pages/Login'))
const Home = lazy(()=> import ('../pages/Home'))
const Friends = lazy(()=> import ('../pages/Friends'))
const Profile = lazy(()=> import ('../pages/Profile'))

const guestRouter = createBrowserRouter([
  { path: "/", element: <p>Login</p> },
  { path: "/ads", element: <p>Advertising</p> },
  { path: "*", element: <Navigate to="/" /> },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        
        {/* <div className="py-4 text-4xl border">Header</div> */}
        <Outlet />
      </>
    ),

    children: [
      { path: "", element: <Home /> },
      { path: "friends", element: <Friends /> },
      { path: "profile", element: <Profile /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function AppRouter() {
let user = 'andy@gmail.com'

  // const [user, setUser ] = useState(false)
  const finalRouter = user ? userRouter : guestRouter

  return (  
  <Suspense fallback={<div>Loading.....</div>}>
  {/* <button className="btn btn-primary" onClick={()=>setUser(!user)}>Login</button> */}
  <RouterProvider router={finalRouter} />
  </Suspense>
  )
}
export default AppRouter;
