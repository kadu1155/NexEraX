import Image from "next/image";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Utensils, Clock, Star, Flame } from "lucide-react";

export default function UrbanBitesRestaurant({ item }: { item: any }) {
  return (
    <>
      <Header />
      <main className="bg-neutral-950 text-neutral-100">
        {/* Dark Urban Hero */}
        <section className="relative flex min-h-[90vh] items-center pt-28">
          <div className="absolute inset-0 z-0">
            <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" alt="Restaurant interior" fill priority className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-orange-500">
                <Flame className="h-4 w-4" /> <span>Now Open for Dinner</span>
              </div>
              <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-8xl lg:text-9xl">
                {item.name}
              </h1>
              <p className="mt-8 max-w-xl text-xl text-neutral-400">
                {item.description}
              </p>
              <div className="mt-12 flex gap-4">
                <a href="#reservations" className="bg-orange-500 px-8 py-4 font-bold text-neutral-950 transition hover:bg-orange-400">
                  Book a Table
                </a>
                <a href="#menu" className="border border-neutral-700 px-8 py-4 font-bold transition hover:bg-neutral-800">
                  See Menu
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Menu */}
        <section id="menu" className="py-32">
          <div className="container">
            <div className="mb-16 flex items-end justify-between border-b border-neutral-800 pb-8">
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">Signature Dishes</h2>
              <Utensils className="h-10 w-10 text-orange-500" />
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Smoked Ribeye", desc: "Aged for 45 days, cherry wood smoked.", price: "$65" },
                { name: "Truffle Pasta", desc: "Handmade tagliatelle, black truffle shavings.", price: "$32" },
                { name: "Charred Octopus", desc: "Lemon herb dressing, smoked paprika.", price: "$28" }
              ].map((dish, i) => (
                <div key={i} className="group relative border border-neutral-800 bg-neutral-900 p-8 transition hover:border-orange-500">
                  <h3 className="text-2xl font-bold text-white">{dish.name}</h3>
                  <p className="mt-4 text-neutral-400">{dish.desc}</p>
                  <p className="mt-8 text-3xl font-black text-orange-500">{dish.price}</p>
                  <div className="absolute top-0 right-0 h-0 w-0 border-l-[30px] border-t-[30px] border-l-transparent border-t-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chef Section */}
        <section className="bg-neutral-900 py-32">
          <div className="container grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-neutral-800 grayscale transition duration-500 hover:grayscale-0">
              <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" alt="Chef" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-5xl font-black uppercase text-white">Meet The Chef</h2>
              <p className="mt-6 text-xl leading-relaxed text-neutral-400">
                "We don't just cook food. We craft experiences. Every plate is a reflection of our passion for urban culinary arts."
              </p>
              <div className="mt-8 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-6 w-6 text-orange-500" />)}
              </div>
              <p className="mt-4 font-bold uppercase tracking-widest text-neutral-500">Michelin Star Awarded</p>
            </div>
          </div>
        </section>

        <div id="reservations" className="bg-neutral-950 py-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
