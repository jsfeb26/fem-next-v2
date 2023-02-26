import Image from "next/image";

import logo from "@/assets/images/logo.png";

import { Card } from "./Card";
import SidebarLink, { LinkObject } from "./SidebarLink";

const links: LinkObject[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

export const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div>
      {links.map((link) => (
        <SidebarLink key={link.link} link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
