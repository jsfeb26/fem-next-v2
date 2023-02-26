"use client";

import clsx from "clsx";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";

type Icons = "Settings" | "User" | "Grid" | "Calendar";

const icons = { Settings, User, Grid, Calendar };

export interface LinkObject {
  label: string;
  icon: Icons;
  link: string;
}

interface Props {
  link: LinkObject;
}

export const SidebarLink = ({ link }: Props) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
