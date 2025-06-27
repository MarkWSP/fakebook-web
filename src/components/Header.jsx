import useUserStore from "../stores/userStore"
import { DropdownIcon, FakebookLogo, SearchIcon } from "../icons"
import { Link } from "react-router"
import { HomeIcon, PlayIcon, MarketIcon, FriendIcon, MenuIcon, NotificationIcon, MessengerIcon} from "../icons"
import { Avatar } from "./Avatar"
Link

function Header() {
  const logout = useUserStore(state=>state.logout)
  const user = useUserStore(state=> state.user)

  return (
    <div className="flex flex-row justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10">
    
      <div className="flex-1 flex gap-2 items-center">
        <FakebookLogo className='w-12' />
        <label className="input rounded-full">
    <SearchIcon className="w-5 opacity-60" />
  <input placeholder="Search" />
</label>
      </div>

      <div className="flex-1 flex gap-2 justify-center">
          <Link to='/' className='flex justify-center w-20 hover:outline-2 hover:border-blue-700 '>
          <HomeIcon className='w-1/2' />
          </Link>
          <Link to='/' className='flex justify-center w-20 hover:outline-2 hover:border-blue-700 '>
          <PlayIcon className='w-1/2' />
          </Link>
          <Link to='/' className='flex justify-center w-20 hover:outline-2 hover:border-blue-700 '>
          <MarketIcon className='w-1/2' />
          </Link>
          <Link to='/' className='flex justify-center w-20 hover:outline-2 hover:border-blue-700 '>
          <FriendIcon className='w-1/2' />
          </Link>
      </div>
    
    <div className="flex-1 flex gap-3 justify-end">
        <div className="avatar justify-center items-center ">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MenuIcon className="w-6" />
          </div>
        </div>
        <div className="avatar justify-center items-center ">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MessengerIcon className="w-6" />
          </div>
        </div>
        <div className="avatar justify-center items-center ">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <NotificationIcon className="w-8" />
          </div>
        </div>

<div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn my-2 btn-circle">
      <Avatar className="w-10 rounded-full " menu imgSrc={user.profileImage} />
   </div> 
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><Link to='/profile'><strong>Profile</strong></Link></li>
    <li><a onClick={logout}><strong>Logout</strong></a></li>
  </ul>
</div>
            


        

    </div>
      
    </div>

    
  )
}
export default Header