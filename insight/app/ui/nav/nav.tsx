"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { tags } from "@/lib/utils";

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
import { home_href } from "@/lib/utils";

const Nav = function NavigationMenuDemo() {
  const searchParams = useSearchParams();
  const tag_str = searchParams.get("tag") || home_href;
  return (
    <div className="flex justify-center  border-b-2  border-grey-600">
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
