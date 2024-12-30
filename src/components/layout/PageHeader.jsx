"use client";

import Button from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const PageHeader = ({ heading }) => {
  const router = useRouter();

  return (
    <header className="flex w-full flex-col justify-start px-4 pt-2 md:px-8 lg:px-40">
      <Button
        variant="ghost"
        className={
          "flex w-20 items-center space-x-2 rounded-none pl-0 shadow-none"
        }
        onClick={() => router.back()}
      >
        <ChevronLeft />
        Back
      </Button>
      <h1 className="text-3xl font-bold capitalize">{heading}</h1>
    </header>
  );
};

export default PageHeader;
