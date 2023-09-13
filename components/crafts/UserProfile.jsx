import Image from "next/image"

const UserProfile = () => {
  return (
    <div className="user-info flex flex-col gap-1">
      <Image src="/assets/cat.png" alt="user" width={70} height={70} className="rounded-lg" />
      <h3>Mohit Vaswani</h3>
    </div>
  )
}

export default UserProfile