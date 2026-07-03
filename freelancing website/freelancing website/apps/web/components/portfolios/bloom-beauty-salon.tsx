import Image from "next/image";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Scissors, Sparkles, Heart } from "lucide-react";

export default function BloomBeautySalon({ item }: { item: any }) {
  return (
    <>
      <Header />
      <main className="bg-pink-50">
        {/* Soft Premium Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-pink-200/50 blur-3xl"></div>
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-pink-300/50 blur-3xl"></div>
          
          <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 font-serif text-lg italic text-pink-600">{item.category}</p>
              <h1 className="text-5xl font-light tracking-wide text-gray-900 md:text-7xl lg:text-8xl">{item.name}</h1>
              <p className="mt-8 text-xl font-light leading-relaxed text-gray-600">{item.description}</p>
              <div className="mt-10">
                <a href="#appointment" className="rounded-full bg-pink-500 px-8 py-4 text-sm font-semibold tracking-widest text-white shadow-xl shadow-pink-200 transition hover:bg-pink-600">
                  BOOK APPOINTMENT
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full bg-pink-200"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-4 border-white shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" alt="Salon Model" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Menu */}
        <section className="bg-white py-32">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="font-serif text-4xl text-gray-900 md:text-5xl">Our Services</h2>
              <div className="mx-auto mt-6 flex justify-center gap-2 text-pink-400">
                <Sparkles className="h-5 w-5" />
                <Sparkles className="h-5 w-5" />
                <Sparkles className="h-5 w-5" />
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
              {[
                { title: "Hair Styling", icon: Scissors, items: [{n: "Women's Haircut", p: "$50"}, {n: "Balayage", p: "$120"}, {n: "Blowout", p: "$45"}] },
                { title: "Makeup & Beauty", icon: Heart, items: [{n: "Bridal Makeup", p: "$150"}, {n: "Event Glam", p: "$80"}, {n: "Lash Extensions", p: "$90"}] }
              ].map((category, i) => (
                <div key={i} className="rounded-3xl bg-pink-50/50 p-8">
                  <div className="mb-8 flex items-center gap-4 border-b border-pink-200 pb-4">
                    <category.icon className="h-8 w-8 text-pink-500" />
                    <h3 className="font-serif text-2xl text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="grid gap-4">
                    {category.items.map(item => (
                      <li key={item.n} className="flex justify-between text-gray-700">
                        <span>{item.n}</span>
                        <span className="font-bold text-pink-600">{item.p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offers Gallery */}
        <section className="py-32">
          <div className="container">
            <h2 className="mb-12 font-serif text-4xl text-center text-gray-900">Current Offers</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-pink-200">
                  <Image src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80" alt={`Offer ${i}`} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                    <span className="rounded-full bg-white px-6 py-2 font-bold text-pink-600">Claim Offer</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="appointment">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
