import Image from "next/image"
import Link from "next/link"

const BuddhaLogo = () => {
  return (
    <Link href="/">
      <Image src="/assets/Buddha.svg" alt="Buddha logo" width={70} height={70}/>
    </Link>
  )
}

export default BuddhaLogo