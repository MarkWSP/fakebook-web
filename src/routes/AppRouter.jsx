import { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import UserLayout from "../layouts/userLayout";
import useUserStore from "../stores/userStore";

const Login = lazy(()=> import ('../pages/Login'))
const Home = lazy(()=> import ('../pages/Home'))
const Friends = lazy(()=> import ('../pages/Friends'))
const Profile = lazy(()=> import ('../pages/Profile'))

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/ads", element: <p>Advertising</p> },
  { path: "*", element: <Navigate to="/" /> },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "friends", element: <Friends /> },
      { path: "profile", element: <Profile /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function AppRouter() {
let user = useUserStore(state=>state.user)

  // const [user, setUser ] = useState(false)
  const finalRouter = user ? userRouter : guestRouter

  return (  
  <Suspense fallback={<div>Loading.....</div>}>
  {/* <button className="btn btn-primary" onClick={()=>setUser(!user)}>Login</button> */}
  <RouterProvider key={user?.id} router={finalRouter} />
  </Suspense>
  )
}
export default AppRouter;
