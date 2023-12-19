import Image from "next/image";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { fetchNews } from "../../../lib/utils";

const News = async ({ tag_str }) => {
  const newsItems = await fetchNews(tag_str);

  return (
    <div className="flex w-2/5 mx-auto mt-2 flex-wrap">
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
  return (
    <div className="flex justify-center items-center w-full hover:bg-gray-100">
      <div className="w-1/3 p-2">
        <Image
          src="https://picsum.photos/200/200?random=1"
          width={200}
          height={200}
          alt="pic"
        ></Image>
      </div>
      <div className=" p-2 flex flex-col w-full">
        <div className="p-4">
          <p className="new_title text-xl font-semibold">{title}</p>
        </div>
        <div className="p-4">
          <p className="new_subtitle text-sm"> {summary}</p>
        </div>
        <div className="p-4 flex justify-start">
          <BuildingOfficeIcon className="h-4 w-4 mr-2" />
          <p className="text-xs font-medium new_source">{source}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
