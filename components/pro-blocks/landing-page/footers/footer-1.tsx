"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Globe } from "lucide-react";

export function Footer1() {
  return (
    <footer
      className="bg-foreground section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          {/* Logo and Contact */}
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-background"
              >
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path d="M8 12H14V20H8V12Z" fill="#1a1a1a" />
                <path d="M18 8H24V24H18V8Z" fill="#1a1a1a" />
                <path d="M8 8H14V10H8V8Z" fill="#1a1a1a" />
                <path d="M8 22H14V24H8V22Z" fill="#1a1a1a" />
              </svg>
              <span className="text-background text-xl font-bold tracking-tight">
                Hash Web Design
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hdhashmat@gmail.com"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>hdhashmat@gmail.com</span>
              </a>
              <a
                href="tel:803-446-5797"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>803-446-5797</span>
              </a>
              <a
                href="https://hashwebdesign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>hashwebdesign.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8"
            aria-label="Footer navigation"
          >
            <Link
              href="#services"
              className="text-background/80 hover:text-background transition-colors"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-background/80 hover:text-background transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#industries"
              className="text-background/80 hover:text-background transition-colors"
            >
              Industries
            </Link>
            <Link
              href="#pricing"
              className="text-background/80 hover:text-background transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-background/80 hover:text-background transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-background/80 hover:text-background transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator className="bg-background/20" role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col items-center gap-4 text-sm lg:flex-row lg:justify-between">
          {/* Copyright Text */}
          <p className="text-background/60 text-center lg:text-left">
            &copy; {new Date().getFullYear()} Hash Web Design. All rights
            reserved.
          </p>

          {/* Legal Links */}
          <nav
            className="flex items-center gap-6"
            aria-label="Legal links"
          >
            <Link
              href="#"
              className="text-background/60 hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-background/60 hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
