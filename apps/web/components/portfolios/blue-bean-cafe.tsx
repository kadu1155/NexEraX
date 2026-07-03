import Image from "next/image";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Coffee, MapPin, Star } from "lucide-react";

export default function BlueBeanCafe({ item }: { item: any }) {
  return (
    <>
      <Header />
      <main className="bg-[#FAF7F2] font-sans text-[#4A3B32]">
        {/* Coffee Beans Hero */}
        <section className="relative min-h-screen pt-28">
          <div className="absolute inset-0 bg-[#4A3B32]">
            <Image src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1600&q=80" alt="Coffee beans background" fill className="object-cover opacity-20" />
          </div>
          <div className="container relative z-10 flex min-h-[80vh] flex-col items-center justify-center text-center text-[#FAF7F2]">
            <Coffee className="mb-6 h-16 w-16 text-[#D4A373]" />
            <h1 className="text-6xl font-black uppercase tracking-tighter md:text-9xl">{item.name}</h1>
            <p className="mt-6 max-w-2xl text-xl font-medium tracking-wide text-[#E3D5CA]">{item.description}</p>
            <a href="#menu" className="mt-12 rounded-none border-2 border-[#D4A373] bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#D4A373] transition hover:bg-[#D4A373] hover:text-[#4A3B32]">
              View Menu
            </a>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-32">
          <div className="container">
            <div className="text-center">
              <h2 className="text-4xl font-black uppercase tracking-tight text-[#4A3B32] md:text-6xl">Our Menu</h2>
              <div className="mx-auto mt-6 h-1 w-24 bg-[#D4A373]"></div>
            </div>
            
            <div className="mt-20 grid gap-16 md:grid-cols-2">
              <div>
                <h3 className="mb-8 text-2xl font-bold uppercase tracking-wider text-[#D4A373]">Espresso Bar</h3>
                <ul className="grid gap-6">
                  {[
                    { name: "Espresso", price: "$3.50", desc: "A concentrated shot of our signature roast." },
                    { name: "Americano", price: "$4.00", desc: "Espresso with hot water." },
                    { name: "Cappuccino", price: "$4.50", desc: "Equal parts espresso, steamed milk, and foam." },
                    { name: "Latte", price: "$5.00", desc: "Espresso with steamed milk and a light layer of foam." }
                  ].map(drink => (
                    <li key={drink.name} className="border-b border-[#E3D5CA] pb-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>{drink.name}</span>
                        <span>{drink.price}</span>
                      </div>
                      <p className="mt-2 text-[#4A3B32]/70">{drink.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-tl-[6rem] rounded-br-[6rem]">
                <Image src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80" alt="Latte Art" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Style Gallery */}
        <section className="bg-[#E3D5CA] py-24">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wider text-[#4A3B32]">Follow us @BlueBeanCafe</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1495474472201-4efa183b5faa?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
              ].map((img, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden bg-black">
                  <Image src={img} alt={`IG post ${i}`} fill className="object-cover opacity-80 transition hover:scale-110 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation/Contact */}
        <div id="contact" className="py-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
