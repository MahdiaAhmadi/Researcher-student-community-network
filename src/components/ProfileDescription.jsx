import Image from "next/image"

const ProfileDescription = ({ name, education, country }) => {
  return (
    <div className="flex w-screen flex-wrap py-3">
      <Image className="w-[100px] h-[85px]left-0 top-[33px]" alt="Profile picture of the user"/>
      <div className="w-1/5">
        <div>{name}</div>
        <div>{education}</div>
        <div>{country}</div>
        </div>
    </div>
  )
}

export { ProfileDescription }
