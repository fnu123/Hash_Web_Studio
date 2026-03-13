"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Loader2, CheckCircle2 } from "lucide-react";

const businessTypes = [
  "Plumber",
  "HVAC Company",
  "Electrician",
  "Contractor",
  "Cleaning Service",
  "Landscaping Business",
  "Restaurant",
  "Other",
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [businessType, setBusinessType] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const data = {
      businessName: formData.get("businessName"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      businessType: businessType,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSubmitted(true);
      e.currentTarget.reset();
      setBusinessType("");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-background section-padding-y border-b" id="contact">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">

          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline>Get Started</Tagline>
            <h2 className="heading-lg text-foreground">
              Request Your Free Demo Website
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              Fill out the form below and I’ll create a custom demo website for your business
            </p>
          </div>

          <Card className="w-full max-w-2xl border-2 shadow-lg">
            <CardContent className="p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-600" />
                  <h3 className="text-foreground text-2xl font-bold">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Your request has been submitted successfully. I'll review your
                    information and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        placeholder="Your Business Name"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>

                  </div>

                  <div className="flex flex-col gap-2">
                    <Label>Business Type *</Label>
                    <Select value={businessType} onValueChange={setBusinessType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">
                      Tell me about your business (optional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your services, target customers, or features you'd like..."
                      rows={4}
                    />
                  </div>

                  {error && (
                    <p className="text-destructive text-sm text-center">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Get Free Demo Website"
                    )}
                  </Button>

                  <p className="text-muted-foreground text-center text-sm">
                    No payment required. I'll contact you within 24 hours.
                  </p>

                </form>
              )}
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}