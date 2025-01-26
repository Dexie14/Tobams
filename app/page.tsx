"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <section className="flex items-center justify-center h-screen">
      <div>
        <h3 className="font-semibold text-center my-5">Tobams Group</h3>
        <div className="mx-auto">
          <Button
            className="cursor-pointer"
            onClick={() => router.push("/blogs")}
          >
            Go to Blogs Page
          </Button>
        </div>
      </div>
    </section>
  );
}
