import Logo from "./logo";
import SidebarItems from "./sidebarItems";

import { BiHomeSmile, BiSearchAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {
  BsFillBookmarksFill,
  BsCardChecklist,
  BsExclamationCircleFill,
  BsThreeDots
} from "react-icons/bs";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";

export default function Sidebar() {
  return (
    <div
      className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] 
    p-2 fixed h-full"
    >
      <Logo />
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarItems text="Home" Icon={BiHomeSmile} active />
        <SidebarItems text="Explore" Icon={BiSearchAlt} />
        <SidebarItems text="Notifications" Icon={BsExclamationCircleFill} />
        <SidebarItems text="Messages" Icon={MdEmail} />
        <SidebarItems text="Bookmarks" Icon={BsFillBookmarksFill} />
        <SidebarItems text="Lists" Icon={BsCardChecklist} />
        <SidebarItems text="Profile" Icon={GiPlagueDoctorProfile} />
        <SidebarItems text="More" Icon={CgMoreO} />
      </div>
      <button
        className="hidden xl:inline ml-auto bg-[#24a3be] text-[#d9d9d9] 
      rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]"
      >
        Post
      </button>
      <div
        className="text-[#d9d9d9] flex items-center justify-center hoverAnimation 
      xl:ml-auto  mt-auto"
      >
        <img
          src="https://image.architonic.com/pro2-3/20017029/the-old-man-mirco-grotto18089-1-h-arcit18.jpg"
          alt="avatar"
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">BigBalls12</h4>
          <p className="text-[#6e767d]">@bigballs12</p>
        </div>
        <BsThreeDots className="h5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}
