"use client";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import pix from "../../public/assets/images/Logo.png";
import Image from "next/image";
import { navigationLinks } from "@/data/data";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "products",
    label: "Products",
    path: "/products",
    icon: <TbBrandProducthunt size={25} />,
  },
  {
    id: "visitors",
    label: "Visitors",
    path: "/visitors",
    icon: <PiUsersFourLight size={25} />,
  },
];
interface ILogo {
  //   image: HTMLImageElement;
  src: string;
}
const Sidebar: React.FC<ILogo> = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const pathName = usePathname();

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);
  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 border-r-2
  ${sidebarClass ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 borde">
        <Link href={"/"} className="text-[40px] text-black mt-4">
          <Image
            src={pix}
            alt="img.png"
            height={40}
            width={40}
            className="object-cover"
          />{" "}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="navigation">
          <ul className="nav-list">
            {navigationLinks.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a
                  href="#"
                  className={`nav-link ${
                    navigationLink.id === activeLinkIdx ? "active" : null
                  }`}
                >
                  <div className="nav-link-icon">{navigationLink.icon}</div>
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
