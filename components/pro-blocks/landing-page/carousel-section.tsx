"use client";

import { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const websites = [
  {
    title: "Plumber Website",
    description: "Modern plumbing services website with online booking",
    image: "/mockup-plumber.jpg",
  },
  {
    title: "HVAC Company Website",
    description: "Professional heating & cooling services site",
    image: "/mockup-hvac.jpg",
  },
  {
    title: "Electrician Website",
    description: "Clean electrical contractor website design",
    image: "/mockup-electrician.jpg",
  },
  {
    title: "Restaurant Website",
    description: "Appetizing restaurant website with menu integration",
    image: "/mockup-restaurant.jpg",
  },
  {
    title: "Cleaning Service Website",
    description: "Fresh cleaning business website with quotes",
    image: "/mockup-cleaning.jpg",
  },
  {
    title: "Landscaping Website",
    description: "Beautiful landscaping company portfolio site",
    image: "/mockup-landscaping.jpg",
  },
];

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % websites.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + websites.length) % websites.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="bg-secondary section-padding-y border-b" id="examples">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <h2 className="heading-lg text-foreground">
            Example Websites We Build
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            See the quality of websites we create for local service businesses
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-background/80 backdrop-blur-sm hidden md:flex"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-background/80 backdrop-blur-sm hidden md:flex"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {websites.map((website, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={website.image}
                        alt={website.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 bg-background">
                      <h3 className="text-foreground text-lg font-semibold">
                        {website.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {website.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {websites.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-foreground"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
