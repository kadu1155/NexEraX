import Image from "next/image";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ArrowRight, Sparkles } from "lucide-react";

export default function RudraImitation({ item }: { item: any }) {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Modern Minimal Hero */}
        <section className="relative min-h-screen pt-28">
          <div className="container relative z-10 grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-black">
                <Sparkles className="h-4 w-4" /> {item.category}
              </div>
              <h1 className="text-6xl font-light tracking-tight text-black md:text-8xl">{item.name}</h1>
              <p className="mt-8 max-w-lg text-xl leading-relaxed text-gray-500">{item.description}</p>
              <div className="mt-10 flex gap-4">
                <a href="#contact" className="group flex items-center gap-4 bg-black px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-rose-900">
                  DISCOVER MORE <ArrowRight className="h-4 w-4 transition group-hover:translate-x-2" />
                </a>
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80" alt={item.name} fill priority className="object-cover" />
            </div>
          </div>
        </section>

        {/* Modern Cards Section */}
        <section className="bg-zinc-50 py-32">
          <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {item.features.map((feature: string, idx: number) => (
              <div key={idx} className="group cursor-pointer bg-white p-10 transition hover:shadow-xl">
                <p className="text-4xl font-light text-zinc-300">0{idx + 1}</p>
                <h3 className="mt-8 text-2xl font-medium tracking-tight text-black">{feature}</h3>
                <div className="mt-8 h-[2px] w-12 bg-black transition-all group-hover:w-full group-hover:bg-rose-400"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Large Product Showcase */}
        <section className="py-32">
          <div className="container text-center">
            <h2 className="mb-16 text-5xl font-light tracking-tight text-black">Luxury Fashion Showcase</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <Image src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80" alt="Showcase 1" fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <Image src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80" alt="Showcase 2" fill className="object-cover mix-blend-multiply" />
              </div>
            </div>
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
