import Image from "next/image";
import {
  BuildingOfficeIcon,
  CloudArrowUpIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import { fetchNews } from "../../../lib/utils";
import { truncate } from "lodash";
import "./news.css";

const getRandomImageUrl = () => {
  const randomNumber = Math.floor(Math.random() * 1000); // 生成 0 到 999 之间的随机整数
  return `https://picsum.photos/200/150?random=${randomNumber}`;
};

const News = async ({ tag_str }: { tag_str: string }) => {
  const newsItems = await fetchNews(tag_str);

  return (
    <div className="flex w-2/5 mx-auto mt-20 flex-wrap">
      {newsItems.map((item, index) => (
        <NewsItem
          key={index} // Use a unique key for each NewsItem
          title={item.headline}
          summary={item.summary}
          source={item.publish_site}
        />
      ))}
    </div>
  );
};

const NewsItem = ({
  title,
  summary,
  source,
}: {
  title: string;
  summary: string;
  source: string;
}) => {
  const url = getRandomImageUrl();
  return (
    <div className="flex justify-center items-start w-full hover:bg-gray-100 h-60 border-b-2  border-grey  pt-6">
      <div className="p-2">
        <Image
          src={url}
          width={200}
          height={200}
          alt="pic"
          className=" rounded-3xl	 overflow-hidden"
        ></Image>
      </div>
      <div className="group  p-2 flex flex-col w-full h-full justify-between">
        <div className="pl-2">
          <div className="pb-6">
            <p className="new_title text-xl font-semibold">
              {truncate(title, { length: 20 })}
            </p>
          </div>
          <div className="pb-4">
            <p className="new_subtitle text-sm tracking-tight	leading-relaxed">
              {truncate(summary, { length: 100 })}
            </p>
          </div>
          <div className="flex justify-start">
            <BuildingOfficeIcon className="h-4 w-4 mr-2" />
            <p className="text-xs font-medium new_source">{source}</p>
          </div>
        </div>

        <div className="flex justify-between content-end  p-2 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
          <HandThumbUpIcon className="h-4 w-4 mr-2 icon" />
          <HandThumbDownIcon className="h-4 w-4 mr-2 icon" />
          <CloudArrowUpIcon className="h-4 w-4 mr-2 icon" />
        </div>
      </div>
    </div>
  );
};

export default News;
