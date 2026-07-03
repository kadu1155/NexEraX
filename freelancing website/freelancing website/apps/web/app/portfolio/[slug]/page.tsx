import { notFound } from "next/navigation";
import { portfolio } from "@/lib/site-data";
import MangalMotiDagine from "@/components/portfolios/mangal-moti-dagine";
import RudraImitation from "@/components/portfolios/rudra-imitation";
import HappyPawsVeterinary from "@/components/portfolios/happy-paws-veterinary";
import BlueBeanCafe from "@/components/portfolios/blue-bean-cafe";
import GreenValleyResort from "@/components/portfolios/green-valley-resort";
import UrbanBitesRestaurant from "@/components/portfolios/urban-bites-restaurant";
import BloomBeautySalon from "@/components/portfolios/bloom-beauty-salon";
import FitnessHubGym from "@/components/portfolios/fitness-hub-gym";

export function generateStaticParams() {
  return portfolio.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolio.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: item.name,
    description: item.description
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolio.find((entry) => entry.slug === slug);
  
  if (!item) notFound();

  switch (slug) {
    case "mangal-moti-dagine":
      return <MangalMotiDagine item={item} />;
    case "rudra-imitation":
      return <RudraImitation item={item} />;
    case "happy-paws-veterinary":
      return <HappyPawsVeterinary item={item} />;
    case "blue-bean-cafe":
      return <BlueBeanCafe item={item} />;
    case "green-valley-resort":
      return <GreenValleyResort item={item} />;
    case "urban-bites-restaurant":
      return <UrbanBitesRestaurant item={item} />;
    case "bloom-beauty-salon":
      return <BloomBeautySalon item={item} />;
    case "fitness-hub-gym":
      return <FitnessHubGym item={item} />;
    default:
      notFound();
  }
}
