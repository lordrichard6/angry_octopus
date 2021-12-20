import Image from "next/image";

import logo from "../../public/logo/angry_octopus_simple_white.png";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src={logo} width={40} height={40} />
      </div>
    </div>
  );
}
