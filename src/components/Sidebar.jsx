import { PlayIcon, FriendIcon, HistoryIcon, SaveIcon, GroupIcon, MarketIcon, DropdownIcon } from "../icons"
import useUserStore from "../stores/userStore"
import { Avatar } from "./Avatar"
import MenuItem from "./MenuItem"
import { Link } from "react-router"

function Sidebar() {
  const user = useUserStore(state=>state.user)
  return (
    <div className="fixed top-14 h-full w-[350px] pt-2 flex flex-col gap-2 min-w-[220px] bg-slate-100">
      <Link to="/profile" className="my-2">
        <MenuItem icon={Avatar} text={`${user.firstName} ${user.lastName}`} imgSrc={user.profileImage}
        className="w-11 h-11 rounded-full bg-slate-200"  />
      </Link>

      <div className="flex flex-col gap-3">
        <MenuItem icon={FriendIcon} text='Friends' className="w-10" />
        <MenuItem icon={HistoryIcon} text='Histories' className="w-10" />
        <MenuItem icon={SaveIcon} text='Save' className="w-10" />
        <MenuItem icon={GroupIcon} text='Group' className="w-10" />
        <MenuItem icon={PlayIcon} text='Video' className="w-10" />
        <MenuItem icon={MarketIcon} text='Marketplace' className="w-10" />

        <MenuItem icon={DropdownIcon} text='More..' className="w-10 border rounded-full opacity-40" />
      </div>
     
    </div>
  )
}
export default Sidebar