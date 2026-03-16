import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="border-t border-border py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

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

        {/* Content */}
        <div className="space-y-6">

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Meet the Developer
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I'm <span className="font-semibold text-foreground">Hash</span>, a
            senior software engineer based in Texas with
            <span className="font-semibold text-foreground"> 12+ years of experience </span>
            building modern web applications and professional business websites.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Through <span className="font-semibold text-foreground">Hash Web Studio</span>,
            I help small businesses create professional websites that attract
            more customers and grow their business online.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">

            <Link
              href="https://www.linkedin.com/in/matt-hash-a82073197/"
              target="_blank"
              className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold px-5 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>

            <Link
              href="https://www.facebook.com/share/1AcuV2rHCd/?mibextid=wwXIfr"
              target="_blank"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-lg hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Facebook size={18} />
              Facebook Page
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}