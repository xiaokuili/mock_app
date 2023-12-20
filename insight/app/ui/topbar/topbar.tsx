import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import "./topbar.css";
import { PlusIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";

const Topbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 border-b-2  border-grey-600  px-16">
        <Image
          src={logo}
          alt="Logo"
          width={40} // 设置宽度
          height={20} // 设置高度
        />
        <Link href="#">
          <p className="text-2xl font-bold title">Lennys Newsletter</p>
        </Link>

        <Button>
          <PlusIcon className="mr-2 h-4 w-4" /> Subcribe
        </Button>
      </div>
    </>
  );
};
export default Topbar;
