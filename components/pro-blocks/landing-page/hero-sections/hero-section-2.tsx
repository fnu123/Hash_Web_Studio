"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export function HeroSection2() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl text-balance">
              See Your Website Before You Pay
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Get a professional website for your business and see exactly how it looks before paying anything.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border"
              style={{ borderColor: "var(--color-yellow-500)" }}>
              <span style={{ color: "var(--color-yellow-500)" }}>U.S.</span>
              <span>
                Texas-based Senior Software Engineer • 12+ years experience
              </span>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-foreground h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                12+ years of professional experience
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-foreground h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Mobile-friendly & SEO optimized
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-foreground h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                No upfront payment required
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto">Get a Free Demo Website</Button>
            </Link>
            <Link href="#services">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                View Example Websites
                <ArrowRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <Image
            src="/mainHero.png"
            alt="Professional website design mockup on laptop"
            width={1024}
            height={1024}
            priority
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
