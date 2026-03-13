"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Link from "next/link";

const plans = [
  {
    name: "Basic Website",
    price: "$299",
    features: [
      "1–3 page website",
      "Mobile-friendly design",
      "Contact form",
      "Basic SEO setup",
      "Fast loading performance",
    ],
  },
  {
    name: "Professional Website",
    price: "$499",
    popular: true,
    features: [
      "Up to 5 pages",
      "Professional website design",
      "Mobile optimized layout",
      "SEO optimized structure",
      "Contact forms",
      "Google Maps integration",
      "Fast performance",
    ],
  },
  {
    name: "Premium Website",
    price: "$899",
    features: [
      "Up to 10 pages",
      "Custom website design",
      "Advanced SEO optimization",
      "Lead capture forms",
      "Google Maps integration",
      "Image gallery / portfolio",
      "Performance optimization",
      "Priority support",
    ],
  },
];

export function PricingSection3() {
  return (
    <section className="bg-background section-padding-y border-b" id="pricing">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">

          {/* Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline>Pricing</Tagline>
            <h2 className="heading-lg text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              Choose the website package that fits your business.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid w-full max-w-6xl gap-8 md:grid-cols-3">

            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`relative border shadow-lg transition hover:shadow-xl ${
                  plan.popular
                    ? "border-blue-600 bg-blue-50 scale-105"
                    : "border-border"
                }`}
              >
                <CardContent className="flex flex-col gap-6 p-8">

                  {/* Popular badge */}
                  {plan.popular && (
                    <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}

                  {/* Plan name */}
                  <h3 className="text-center text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center">
                    <span
                      className={`text-5xl font-bold ${
                        plan.popular
                          ? "text-blue-600"
                          : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            plan.popular
                              ? "bg-blue-600"
                              : "bg-slate-900"
                          }`}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Link href="#contact" className="w-full mt-4">
                    <Button
                      size="lg"
                      className={`w-full ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-slate-950 hover:bg-slate-800 text-white"
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}