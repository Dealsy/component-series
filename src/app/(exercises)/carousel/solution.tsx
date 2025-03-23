"use client";

import CarouselButton from "@/components/carousel/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  const carouselItems = images.map((image) => image.id);
  const [currentItem, setCurrentItem] = useState(0);

  const handleNext = () => {
    setCurrentItem((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrevious = () => {
    setCurrentItem(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-4 items-center">
        <CarouselButton onClick={handlePrevious}>
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
            src={images[currentItem].src}
            alt={images[currentItem].alt}
            width={500}
            height={500}
            className="rounded-[calc(var(--card-radius)-var(--card-padding))]"
          />
        </div>

        <CarouselButton onClick={handleNext}>
          <ChevronRight className="text-black" />
        </CarouselButton>
      </div>
    </div>
  );
}
