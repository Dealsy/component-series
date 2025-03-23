"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import ProductSkeleton from "@/components/scroll/ProductSkeleton";

const ITEMS_PER_PAGE = 12;
const LOADING_DELAY = 1000; // 1 second delay

export default function Page() {
  const items = Array.from({ length: 124 }, (_, index) => index + 1);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const hasMore = visibleItems < items.length;

  const handleLoadMore = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => Math.min(prev + ITEMS_PER_PAGE, items.length));
      setIsLoading(false);
    }, LOADING_DELAY);
  };

  const { loadMoreRef } = useInfiniteScroll({
    onLoadMore: handleLoadMore,
    hasMore: hasMore && !isLoading,
  });

  const visibleItemsList = items.slice(0, visibleItems);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Infinite Scroll</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleItemsList.map((item) => (
          <Card className="min-h-70 w-70" key={item}>
            <CardHeader>
              <CardTitle>Product {item}</CardTitle>
            </CardHeader>
          </Card>
        ))}
        {isLoading && (
          <>
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <ProductSkeleton key={`skeleton-${index}`} />
            ))}
          </>
        )}
      </div>
      <div ref={loadMoreRef} className="h-10" />
    </div>
  );
}
