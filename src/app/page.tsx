import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { CapabilityStrip } from "@/components/sections/home/CapabilityStrip";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { IndustriesShowcase } from "@/components/sections/home/IndustriesShowcase";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { LeadershipSection } from "@/components/sections/home/LeadershipSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { SelectedWork } from "@/components/sections/home/SelectedWork";
import { FocusServices } from "@/components/sections/home/FocusServices";
import { JsonLd } from "@/components/seo/JsonLd";
import { allServiceAreaNames } from "@/data/locations";
import { localBusinessJsonLd } from "@/lib/seo";
import { TechnologySection } from "@/components/sections/home/TechnologySection";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { siteConfig } from "@/config/site";
import { generalFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";


export const metadata: Metadata = buildMetadata({
  title: siteConfig.seo.defaultTitle,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CapabilityStrip />
      <IntroSection />
      <FocusServices />
      <SelectedWork />
      <WhyChooseUs />
      <IndustriesShowcase />
      <ProcessSection />
      <TechnologySection />
      <LeadershipSection />
      <FaqSection faqs={generalFaqs} />
      <CtaBanner />
      <JsonLd data={localBusinessJsonLd(allServiceAreaNames)} />
    </>
  );
}
