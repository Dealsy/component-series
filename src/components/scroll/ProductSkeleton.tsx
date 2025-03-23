import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <Card className="min-h-70 w-70 animate-pulse">
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
    </Card>
  );
}
