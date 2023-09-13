import { NavList } from "@/constants/constant"
import Link from "next/link"

const NavItems = () => {
  return (
    <div className="navlist">
      <ul>
        {
          NavList.map((navitem, index) => (
            <Link key={index} href={navitem.link}>
            <li>{navitem.item}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default NavItems