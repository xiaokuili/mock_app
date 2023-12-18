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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Nav = function NavigationMenuDemo() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  return (
    <div className="flex justify-center  border  border-b-grey-700 ">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle(), {
                  active_nav: tag === null,
                })}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/?tag=potcas" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle(), {
                  active_nav: tag === "potcas",
                })}
              >
                PotCas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/?tag=doc" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle(), {
                  active_nav: tag === "doc",
                })}
              >
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
