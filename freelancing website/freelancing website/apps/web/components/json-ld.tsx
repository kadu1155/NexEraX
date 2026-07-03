import { faqs } from "@/lib/site-data";

export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexera.com";
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "NexEra",
        url: baseUrl,
        email: "kk25technicalteam@gmail.com",
        telephone: "+91 9923772005"
      },
      {
        "@type": "LocalBusiness",
        name: "NexEra",
        image: `${baseUrl}/opengraph-image`,
        url: baseUrl,
        telephone: "+91 9923772005",
        priceRange: "₹₹",
        areaServed: "India"
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: baseUrl }]
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
