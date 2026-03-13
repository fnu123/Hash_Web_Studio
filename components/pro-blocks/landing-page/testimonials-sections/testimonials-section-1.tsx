"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Hash built a beautiful website for our plumbing company and we started getting more calls from Google within the first month!",
    name: "Mike Thompson",
    business: "Thompson Plumbing Co.",
    rating: 5,
  },
  {
    quote:
      "The free demo was exactly what I needed to see before committing. Now my HVAC business looks professional online.",
    name: "Sarah Martinez",
    business: "Martinez Heating & Cooling",
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but seeing my website before paying anything made it a no-brainer. Highly recommend!",
    name: "David Chen",
    business: "Chen Electric Services",
    rating: 5,
  },
  {
    quote:
      "Our landscaping website looks amazing and the booking form has saved us so much time scheduling appointments.",
    name: "Jennifer Wilson",
    business: "Wilson's Lawn & Garden",
    rating: 5,
  },
  {
    quote:
      "Professional, responsive, and delivered exactly what he promised. Our cleaning business looks top-notch now.",
    name: "Robert Johnson",
    business: "Sparkle Clean Services",
    rating: 5,
  },
  {
    quote:
      "The best investment I've made for my contracting business. Customers tell me the website made them choose us.",
    name: "Amanda Brooks",
    business: "Brooks Construction LLC",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="testimonials"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Testimonials</Tagline>
          <h2 className="heading-lg text-foreground">
            Loved by Local Business Owners
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            See what our clients say about their new websites
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <StarRating rating={testimonial.rating} />
                <p className="text-foreground leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex flex-col gap-0.5 mt-auto pt-2">
                  <span className="text-foreground font-semibold">
                    {testimonial.name}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {testimonial.business}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
