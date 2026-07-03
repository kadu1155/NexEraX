import Image from "next/image";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MapPin, Wifi, Coffee, Sun } from "lucide-react";

export default function GreenValleyResort({ item }: { item: any }) {
  return (
    <>
      <Header />
      <main className="bg-emerald-50">
        {/* Full-width Nature Hero */}
        <section className="relative h-screen min-h-[600px] w-full">
          <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80" alt="Resort View" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-emerald-900/80"></div>
          
          <div className="absolute inset-x-0 bottom-0 pb-20 pt-32 text-center text-white">
            <h1 className="text-6xl font-serif md:text-8xl lg:text-9xl tracking-wide drop-shadow-lg">{item.name}</h1>
            <p className="mt-4 text-xl font-light tracking-widest">{item.category} • EST. 2012</p>
            <div className="mt-12">
              <a href="#booking" className="inline-block rounded-none bg-emerald-600 px-12 py-5 text-sm font-semibold tracking-[0.2em] uppercase transition hover:bg-white hover:text-emerald-900">
                Book Your Stay
              </a>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-white py-24">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { icon: Wifi, title: "High-Speed WiFi" },
                { icon: Sun, title: "Infinity Pool" },
                { icon: Coffee, title: "Free Breakfast" },
                { icon: MapPin, title: "Nature Trails" }
              ].map((am, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 text-emerald-900">
                  <am.icon className="mb-4 h-12 w-12 text-emerald-500 stroke-1" />
                  <h3 className="text-lg font-medium">{am.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms Showcase */}
        <section className="py-32">
          <div className="container">
            <div className="mb-16 flex flex-col items-center text-center">
              <h2 className="text-4xl font-serif text-emerald-950 md:text-6xl">Accommodations</h2>
              <p className="mt-4 max-w-2xl text-emerald-800">Experience unparalleled luxury surrounded by nature.</p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80" alt="Deluxe Room" fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-8 backdrop-blur">
                  <h3 className="text-2xl font-serif text-emerald-950">Deluxe Forest Suite</h3>
                  <p className="mt-2 text-emerald-800 font-semibold">$299 / night</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80" alt="Villa" fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-8 backdrop-blur">
                  <h3 className="text-2xl font-serif text-emerald-950">Private Pool Villa</h3>
                  <p className="mt-2 text-emerald-800 font-semibold">$599 / night</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="booking">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
