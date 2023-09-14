import NavItems from "../crafts/NavItems"
import BuddhaLogo from "../crafts/BuddhaLogo"
import UserProfile from "../crafts/UserProfile"

const Sidebar = ({userName}) => {
  return (
    <nav className="sidebar flex flex-col justify-between p-12 w-3/12">
        <UserProfile userName={userName}/>
        <NavItems/>
        <BuddhaLogo/>
    </nav>
  )
}

export default Sidebar