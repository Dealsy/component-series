"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="rating">Rating</label>

      <div className="flex flex-row gap-2">
        <div>
          <button onClick={() => {}}>
            <Star className="w-6 h-6 cursor-pointer hover:fill-yellow-400 hover:text-yellow-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
