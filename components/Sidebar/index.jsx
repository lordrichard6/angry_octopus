import Logo from './logo'
import SidebarItems from './sidebarItems'

import { BiHomeSmile, BiSearchAlt } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <Logo />
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarItems text='Home' Icon={BiHomeSmile} active/>
        <SidebarItems text='Explore' Icon={BiSearchAlt} active/>
        <SidebarItems text='Notifications' Icon={BiHomeSmile} active/>
        <SidebarItems text='Messages' Icon={BiHomeSmile} active/>
        <SidebarItems text='Bookmarks' Icon={BiHomeSmile} active/>
        <SidebarItems text='Lists' Icon={BiHomeSmile} active/>
        <SidebarItems text='Profile' Icon={BiHomeSmile} active/>
        <SidebarItems text='More' Icon={BiHomeSmile} active/>
      </div>
    </div>
  );
}
