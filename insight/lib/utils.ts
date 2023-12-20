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

export async function fetchNews(keyword: string) {
  // Add noStore() here to prevent the response from being cached.
  noStore();
  // const sqlQuery = `SELECT headline, publish_site, summary FROM ads_market_insight WHERE keywords LIKE '%${keyword}%' LIMIT 6;`;
  const sqlQuery = `SELECT headline, publish_site, summary FROM ads_market_insight LIMIT 6;`;

  try {
    const data =
      await sql<News>`SELECT headline, publish_site, summary FROM ads_market_insight LIMIT 6;`;

    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch news", error);
  }
}
