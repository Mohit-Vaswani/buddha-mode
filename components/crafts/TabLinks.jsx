import { NavList } from "@/constants/constant"
import Link from "next/link"

const TabLinks = () => {
  return (
    <div className="">
      <ul className="grid grid-rows-3 sm:grid-rows-2 grid-flow-col gap-8 mt-8">
        {
          NavList.map((navitem, index) => (
            <Link key={index} href={navitem.link}>
            <li className="border-2 p-4 bg-gray-800 w-40">{navitem.item}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default TabLinks