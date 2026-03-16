import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="border-t border-border py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <Image
                src="/hash.jpg"
                alt="Hash - Senior Software Engineer and Founder of Hash Web Studio"
                width={420}
                height={420}
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">

            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Meet the Developer
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm <span className="font-semibold text-foreground">Hash</span>, a
              senior software engineer based in Texas with over
              <span className="font-semibold text-foreground"> 12+ years of experience</span>
              building modern web applications and high-performance websites.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Through <span className="font-semibold text-foreground">Hash Web Studio</span>,
              I help local businesses launch professional websites that attract
              customers, generate leads, and grow their business online.
            </p>

            {/* LinkedIn Button */}
            <div className="flex gap-4 pt-4">

              <Link
                href="https://www.linkedin.com/in/matt-hash-a82073197/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold px-5 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}