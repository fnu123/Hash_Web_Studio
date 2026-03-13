"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  Palette,
  Smartphone,
  Search,
  Calendar,
  CreditCard,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Custom, modern website designs tailored to your brand and business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly Websites",
    description:
      "Responsive designs that look perfect on phones, tablets, and desktops.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Built-in SEO best practices to help your business rank higher on Google.",
  },
  {
    icon: Calendar,
    title: "Online Booking Forms",
    description:
      "Let customers book appointments directly from your website 24/7.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Accept payments online with secure payment gateway integration.",
  },
  {
    icon: MapPin,
    title: "Google Maps Integration",
    description:
      "Show your location and service areas with embedded Google Maps.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-background section-padding-y border-b" id="services">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Services</Tagline>
          <h2 className="heading-lg text-foreground">
            Everything Your Business Website Needs
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Professional features to help your local business attract more
            customers online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-secondary border-none shadow-none hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                  <service.icon className="text-foreground h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
