import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type News = {
  headline: string;
  publish_site: string;
  summary: string;
};
export const home_href = "zhaoshang";
const home_title = "招商";
export const tags: { title: string; href: string }[] = [
  {
    title: "招商",
    href: "zhaoshang",
  },
  {
    title: "半导体",
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

export function getHrefByTitle(targetHref: string): string {
  const tag = tags.find((tag) => tag.href === targetHref);
  return tag ? tag.title : home_title;
}

export async function fetchNews(keyword: string) {
  // Add noStore() here to prevent the response from being cached.
  noStore();
  keyword = `%${keyword}%`;
  try {
    const data =
      await sql<News>`SELECT headline, publish_site, summary FROM ads_market_insight  where keywords like ${keyword} LIMIT 6;`;

    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch news");
  }
}
