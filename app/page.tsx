import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { CarouselSection } from "@/components/pro-blocks/landing-page/carousel-section";
import { ServicesSection } from "@/components/pro-blocks/landing-page/services-section";
import { HowItWorksSection } from "@/components/pro-blocks/landing-page/how-it-works-section";
import { IndustriesSection } from "@/components/pro-blocks/landing-page/industries-section";
import { TestimonialsSection } from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { StarRatingSection } from "@/components/pro-blocks/landing-page/star-rating-section";
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { ContactSection } from "@/components/pro-blocks/landing-page/contact-section";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import About from "@/components/pro-blocks/landing-page/About/about";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <About/>
      <CarouselSection />
      <ServicesSection />
      <HowItWorksSection />
      <IndustriesSection />
      <TestimonialsSection />
      <StarRatingSection />
      <PricingSection3 />
      <FaqSection2 />
      <ContactSection />
      <Footer1 />
    </main>
  );
}
