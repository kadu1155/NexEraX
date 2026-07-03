import Image from "next/image";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Stethoscope, Heart, Clock, ShieldCheck } from "lucide-react";

export default function HappyPawsVeterinary({ item }: { item: any }) {
  return (
    <>
      <Header />
      <main className="bg-sky-50">
        {/* Emergency Banner */}
        <div className="bg-red-500 py-3 text-center text-sm font-bold text-white">
          🚨 24/7 Pet Emergency Services Available - Call Now: 1800-PET-CARE
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-32">
          <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-700">
                {item.category}
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-sky-900 md:text-7xl">{item.name}</h1>
              <p className="mt-6 text-xl leading-8 text-sky-700">{item.description}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-sky-500 px-8 py-4 font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-600">
                  Book Appointment
                </a>
                <a href="#services" className="rounded-2xl bg-white px-8 py-4 font-bold text-sky-900 shadow-lg shadow-sky-100 transition hover:-translate-y-1">
                  Our Services
                </a>
              </div>
            </div>
            <div className="order-1 relative lg:order-2">
              {/* Cute shape background */}
              <div className="absolute inset-0 scale-95 rounded-[3rem] bg-green-200 rotate-3"></div>
              <div className="relative aspect-square overflow-hidden rounded-[3rem] border-8 border-white shadow-xl">
                <Image src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=80" alt="Happy Dog" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features/Services */}
        <section id="services" className="py-20">
          <div className="container grid gap-6 md:grid-cols-4">
            {[
              { icon: Stethoscope, title: "Expert Vets", desc: "Highly qualified professionals" },
              { icon: Heart, title: "Compassionate Care", desc: "We treat them like family" },
              { icon: Clock, title: "24/7 Support", desc: "Always here when you need us" },
              { icon: ShieldCheck, title: "Modern Facility", desc: "State of the art equipment" }
            ].map((srv, idx) => (
              <div key={idx} className="rounded-3xl bg-white p-8 text-center shadow-soft">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <srv.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-sky-900">{srv.title}</h3>
                <p className="mt-2 text-sky-600">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Doctors & Gallery */}
        <section className="bg-white py-32 rounded-t-[4rem]">
          <div className="container text-center">
            <h2 className="text-4xl font-extrabold text-sky-900">Meet Our Doctors</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sky-600">Experienced veterinarians dedicated to the health and happiness of your pets.</p>
            
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((doc) => (
                <div key={doc} className="group overflow-hidden rounded-3xl bg-sky-50 shadow-sm transition hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Vet Doctor" fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-sky-900">Dr. Sarah Jenkins</h3>
                    <p className="text-sm font-bold uppercase text-green-600">Head Veterinarian</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="contact" className="bg-sky-50 pb-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
