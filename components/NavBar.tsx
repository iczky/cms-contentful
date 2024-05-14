"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-between w-screen p-5">
        <h1>Hot Coffee</h1>
        <NavigationMenuItem className="flex gap-5">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
