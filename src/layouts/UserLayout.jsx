import { Outlet } from "react-router"

import Header from "../components/Header"

function UserLayout() {
  return (
    <div className="min-h-screen">
        <Header />
          <div className="relative flex gap-2 bg-slate-100 border pt-14">
            <Outlet />
          </div>
      </div>
  )
}
export default UserLayout