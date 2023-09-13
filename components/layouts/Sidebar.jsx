import NavItems from "../crafts/NavItems"
import BuddhaLogo from "../crafts/BuddhaLogo"
import UserProfile from "../crafts/UserProfile"

const Sidebar = () => {
  return (
    <nav className="sidebar flex flex-col justify-between p-12 w-3/12">
        <UserProfile/>
        <NavItems/>
        <BuddhaLogo/>
    </nav>
  )
}

export default Sidebar