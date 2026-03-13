"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  Droplets,
  Thermometer,
  Zap,
  HardHat,
  SprayCan,
  TreeDeciduous,
} from "lucide-react";

const industries = [
  {
    icon: Droplets,
    title: "Plumbers",
    description:
      "Websites that showcase your plumbing services and generate emergency service calls.",
  },
  {
    icon: Thermometer,
    title: "HVAC Companies",
    description:
      "Professional sites for heating, cooling, and ventilation businesses.",
  },
  {
    icon: Zap,
    title: "Electricians",
    description:
      "Modern websites that highlight your electrical expertise and certifications.",
  },
  {
    icon: HardHat,
    title: "Contractors",
    description:
      "Portfolio-focused sites to showcase your construction and renovation projects.",
  },
  {
    icon: SprayCan,
    title: "Cleaning Services",
    description:
      "Clean, professional websites that build trust and book appointments.",
  },
  {
    icon: TreeDeciduous,
    title: "Landscaping Businesses",
    description:
      "Beautiful sites that display your outdoor transformation projects.",
  },
];

export function IndustriesSection() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      id="industries"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Industries We Serve</Tagline>
          <h2 className="heading-lg text-foreground">
            Websites for Local Service Businesses
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            We specialize in creating websites for home service professionals
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="bg-secondary border-none shadow-none hover:shadow-md transition-shadow duration-300 group"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-sm group-hover:shadow-md transition-shadow">
                  <industry.icon className="text-foreground h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-lg font-semibold">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
