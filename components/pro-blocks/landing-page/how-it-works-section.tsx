"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { MessageSquare, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Request Free Demo Website",
    description:
      "Fill out a simple form with your business details. Tell us about your services, branding, and what you want your website to accomplish.",
  },
  {
    icon: Wrench,
    step: "2",
    title: "I Build a Website Preview for Your Business",
    description:
      "Within a few days, I'll create a complete website demo customized for your business. You'll see exactly what your website will look like.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "You Approve and Launch",
    description:
      "If you love your demo website, we finalize any changes and launch it live. Only pay when you're 100% satisfied with your new website.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="how-it-works"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>How It Works</Tagline>
          <h2 className="heading-lg text-foreground">
            Getting Your Website Is Simple
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Three easy steps to get a professional website for your business
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 text-center"
            >
              <div className="relative">
                <div className="bg-background flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border shadow-lg">
                  <step.icon className="text-foreground h-7 w-7" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-foreground text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
