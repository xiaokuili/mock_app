import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "./page.css";

export default function Page() {
  return (
    <div className="flex  flex-col items-center m-auto max-w-md mt-40">
      <div className="mb-8">
        <p className="text-xl title font-semibold">
          Subscribe to like this post
        </p>
      </div>
      <div className="flex w-full  items-center space-x-2">
        <Input type="email" placeholder="Type Your Email..." />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}
