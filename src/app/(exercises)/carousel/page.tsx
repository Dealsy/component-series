"use client";

import CarouselButton from "@/components/carousel/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/*
 *  Exercise:
 *  - Create a carousel component that displays a list of images
 *  - Add a Next and Previous button to navigate through the images
 */

const images = [
  {
    id: 1,
    src: "/images/ducati-b.jpg",
    alt: "V4 SP",
  },
  {
    id: 2,
    src: "/images/ducati-r.jpg",
    alt: "959",
  },
  {
    id: 3,
    src: "/images/ducati-d.jpg",
    alt: "V4s Superleggera",
  },
  {
    id: 4,
    src: "/images/ducati-b-2.jpg",
    alt: "V4s",
  },
] as const;

export default function Page() {
  // Write your carousel logic here
  // Hint - You will need to use the % operator

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-4 items-center">
        {/* Add a function to handle going back */}
        <CarouselButton onClick={() => {}}>
          <ChevronLeft className="text-black" />
        </CarouselButton>

        <div
          className={cn(
            "border border-gray-500",
            "rounded-(--card-radius) p-(--card-padding)",
            "[--card-padding:--spacing(2)] [--card-radius:var(--radius-4xl)]"
          )}
        >
          <Image
            //  Update this to use a index array to show the currentItem
            src={"/images/ducati-b.jpg"}
            alt={"V4 SP"}
            width={500}
            height={500}
            className="rounded-[calc(var(--card-radius)-var(--card-padding))]"
          />
        </div>

        {/* Add a function to handle going forward */}
        <CarouselButton onClick={() => {}}>
          <ChevronRight className="text-black" />
        </CarouselButton>
      </div>
    </div>
  );
}
