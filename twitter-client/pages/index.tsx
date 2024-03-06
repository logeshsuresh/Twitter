import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsBookmark } from "react-icons/bs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string,
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <BiHash />
  },
  {
    title: "Notifications",
    icon: <BsBell/>
  },
  {
    title: "Messages",
    icon: <RxEnvelopeClosed />
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />
  }, 
  {
    title: "Profile",
    icon: <BiUser />
  }
]

export default function Home() {
  return ( 
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen pl-56">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-4xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
            <FaTwitter/>
          </div>
          <div className="mt-4 text=2xl font-semibold pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full transition-all px-5 py-2 w-fit cursor-pointer mt-2" 
                key={item.title} >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 py-3">
              <button className="bg-[#1d9bf0] font-semibold text-lg p-4 rounded-full w-full mx-4">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[0.2] border-l-[0.2] border-white"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
