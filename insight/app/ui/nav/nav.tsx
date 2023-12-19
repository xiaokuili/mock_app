"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import "./nav.css";

const tags: { title: string; href: string }[] = [
  {
    title: "招商",
    href: "zhaoshang",
  },
  {
    title: "半导体新材料",
    href: "bandaoti",
  },
  {
    title: "生物医药",
    href: "shengwuyiyao",
  },
  {
    title: "华为",
    href: "huawei",
  },
  {
    title: "能源化工",
    href: "nengyuanhuagong",
  },
  {
    title: "量子信息",
    href: "liangzixinx",
  },
];

const Nav = function NavigationMenuDemo() {
  const searchParams = useSearchParams();
  const tag_str = searchParams.get("tag");
  return (
    <div className="flex justify-center  border  border-b-grey-700 ">
      <NavigationMenu>
        <NavigationMenuList>
          {tags.map((tag) => (
            <NavigationMenuItem key={tag.href}>
              <Link href={`/?tag=${tag.href}`} legacyBehavior passHref>
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle(), "nav_title", {
                    active_nav: tag_str === tag.href,
                  })}
                >
                  {tag.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
