"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const faqs = [
  {
    question: "Do I really get a free demo website?",
    answer:
      "Yes! I build a complete demo website for your business at no cost. You get to see exactly how your website will look and function before paying anything. There's no risk and no commitment until you're 100% happy with the design.",
  },
  {
    question: "How long does it take to build my demo website?",
    answer:
      "Most demo websites are completed within 3-5 business days. For more complex projects, it may take up to 7 days. I'll keep you updated throughout the process and let you know the expected timeline when you submit your request.",
  },
  {
    question: "What if I don't like the demo?",
    answer:
      "No problem at all! If you're not satisfied with the demo, you simply walk away with no charge. I want you to love your website, so I offer unlimited revisions until you're completely happy with the design.",
  },
  {
    question: "Do you build mobile-friendly websites?",
    answer:
      "Absolutely! Every website I build is fully responsive and looks great on all devices - phones, tablets, and desktop computers. In fact, I design mobile-first since most of your customers will find you on their phones.",
  },
  {
    question: "Can my website show on Google?",
    answer:
      "Yes! All websites include basic SEO optimization to help you rank on Google. This includes proper meta tags, fast loading speeds, mobile optimization, and structured content that search engines love.",
  },
  {
    question: "Do you work with small local businesses?",
    answer:
      "Local service businesses are my specialty! I understand the unique needs of plumbers, HVAC companies, electricians, contractors, cleaning services, and landscaping businesses. I build websites specifically designed to attract local customers.",
  },
];

export function FaqSection2() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            <Tagline>FAQ</Tagline>
            <h2 id="faq-heading" className="heading-lg text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Have questions about getting your free demo website? Find answers
              to the most common questions below. If you need more help, feel
              free to contact me directly.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col">
            <Accordion type="single" collapsible aria-label="FAQ items">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
