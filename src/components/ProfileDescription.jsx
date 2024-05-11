import Image from "next/image"
import profilePicture from "./106x87.png"
const ProfileDescription = ({ name, education, country }) => {
  return (
    <div className="flex w-screen flex-wrap py-3 ml-48">
      <Image className="left-0 top-[33px] p-2" alt="Profile picture of the user" src={profilePicture} width={106} height={87}/>
      <div className="pl-2 w-1/5">
        <div>{name}</div>
        <div>{education}</div>
        <div>{country}</div>
        </div>
    </div>
  )
}

export { ProfileDescription }
