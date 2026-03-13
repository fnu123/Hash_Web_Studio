"use client";

import { Star } from "lucide-react";

export function StarRatingSection() {
  return (
    <section className="bg-foreground section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-8 w-8 fill-amber-400 text-amber-400 md:h-10 md:w-10"
              />
            ))}
          </div>

          {/* Rating Text */}
          <div className="flex flex-col gap-2">
            <span className="text-background text-4xl font-bold md:text-5xl">
              4.9 / 5
            </span>
            <span className="text-background/80 text-lg md:text-xl">
              Average Rating
            </span>
          </div>

          {/* Count */}
          <p className="text-background/70 text-base md:text-lg">
            From 200+ local businesses
          </p>
        </div>
      </div>
    </section>
  );
}
