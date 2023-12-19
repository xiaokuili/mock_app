import Nav from "./ui/nav/nav";
import News from "./ui/news/news";
import Topbar from "./ui/topbar/topbar";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    tag?: string;
  };
}) {
  const tag = searchParams?.tag || "招商";

  return (
    <>
      <Topbar />
      <Nav />
      <News tag_str={tag} />
    </>
  );
}
