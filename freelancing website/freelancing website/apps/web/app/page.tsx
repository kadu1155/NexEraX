import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <PortfolioGrid />
        <Testimonials />
        <Pricing />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
