import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function MangalMotiDagine({ item }: { item: any }) {
  return (
    <>
      <Header />
      <main className="bg-[#FFFDF8]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden bg-[#2D1B0B] text-[#FFFDF8]">
          <Image src="https://images.unsplash.com/photo-1599643478524-fb524458f273?auto=format&fit=crop&w=1600&q=80" alt={item.name} fill priority className="object-cover opacity-40 mix-blend-overlay" />
          <div className="container relative grid min-h-[90vh] content-center py-20 text-center">
            <p className="mb-4 font-serif text-sm font-bold uppercase tracking-[0.3em] text-[#D6A84F]">{item.category}</p>
            <h1 className="mx-auto max-w-5xl font-serif text-5xl font-normal leading-tight md:text-7xl lg:text-8xl">{item.name}</h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#D6A84F]/80">{item.description}</p>
            <div className="mt-12 flex justify-center">
              <a href="#contact" className="rounded-full bg-[#D6A84F] px-8 py-4 font-serif text-sm font-bold tracking-widest text-[#2D1B0B] transition hover:bg-white">EXPLORE COLLECTION</a>
            </div>
          </div>
        </section>

        {/* Temple Background & About */}
        <section className="relative overflow-hidden py-32">
          <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-[10rem] border-8 border-[#D6A84F]/20 shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80" alt="Jewellery Craftsmanship" fill className="object-cover" />
            </div>
            <div>
              <p className="font-serif text-sm font-bold uppercase tracking-[0.28em] text-[#D6A84F]">Heritage & Craft</p>
              <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[#2D1B0B] md:text-5xl">{item.theme} Elegance</h2>
              <p className="mt-8 text-lg leading-relaxed text-[#2D1B0B]/70">
                Experience the divine beauty of temple jewellery. Each piece is crafted with generations of skill, echoing the grandeur of our traditions and the warmth of Marathi hospitality.
              </p>
              <div className="mt-10 grid gap-4">
                {item.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-4 border-b border-[#D6A84F]/30 pb-4">
                    <div className="rounded-full bg-[#D6A84F]/10 p-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D6A84F]" />
                    </div>
                    <span className="font-serif text-lg font-medium text-[#2D1B0B]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bridal Collection Banner */}
        <section className="bg-[#D6A84F] py-20 text-[#2D1B0B]">
          <div className="container text-center">
            <h2 className="font-serif text-4xl font-normal md:text-6xl">The Bridal Collection</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#2D1B0B]/80">Exquisite gold patterns crafted for your special day.</p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-32">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
              ].map((img, idx) => (
                <div key={idx} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#2D1B0B]">
                  <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews & WhatsApp */}
        <section className="bg-[#2D1B0B] py-32 text-center text-[#FFFDF8]">
          <div className="container max-w-4xl">
            <MessageCircle className="mx-auto mb-8 h-12 w-12 text-[#D6A84F]" />
            <h3 className="font-serif text-3xl italic leading-relaxed md:text-4xl">"The traditional designs are simply breathtaking. Ordering via WhatsApp was so convenient!"</h3>
            <p className="mt-8 font-serif uppercase tracking-widest text-[#D6A84F]">- Happy Customer</p>
          </div>
        </section>

        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
