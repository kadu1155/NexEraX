import Image from "next/image";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Dumbbell, Activity, Users, ArrowRight } from "lucide-react";

export default function FitnessHubGym({ item }: { item: any }) {
  return (
    <>
      <Header />
      <main className="bg-black text-gray-300">
        {/* High Energy Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
          {/* Angled background */}
          <div className="absolute right-0 top-0 h-full w-2/3 -skew-x-12 bg-zinc-900 opacity-50"></div>
          
          <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 font-black uppercase tracking-widest text-orange-500">{item.category}</p>
              <h1 className="text-6xl font-black uppercase italic leading-none tracking-tighter text-white md:text-8xl lg:text-9xl">
                {item.name}
              </h1>
              <p className="mt-6 max-w-lg text-xl font-bold text-gray-400">{item.description}</p>
              <div className="mt-10 flex gap-4">
                <a href="#join" className="flex items-center gap-2 bg-orange-600 px-8 py-4 font-black uppercase text-white transition hover:bg-orange-500">
                  JOIN NOW <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden lg:aspect-auto lg:h-[800px]">
              <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80" alt="Gym workout" fill priority className="object-cover grayscale" />
              <div className="absolute inset-0 bg-orange-600/20 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* BMI Calculator Section */}
        <section className="bg-orange-600 py-20 text-white">
          <div className="container grid gap-10 md:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-5xl font-black uppercase italic">Calculate Your BMI</h2>
              <p className="mt-4 font-bold">Track your fitness journey starting today.</p>
            </div>
            <div className="bg-black p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Height (cm)" className="bg-zinc-900 p-4 text-white outline-none focus:border-orange-500" />
                <input type="text" placeholder="Weight (kg)" className="bg-zinc-900 p-4 text-white outline-none focus:border-orange-500" />
              </div>
              <button className="mt-4 w-full bg-orange-600 p-4 font-black uppercase transition hover:bg-orange-500">
                Calculate
              </button>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-32">
          <div className="container">
            <h2 className="mb-16 text-center text-5xl font-black uppercase italic text-white">Membership Plans</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "BASIC", price: "$29", features: ["Access to Gym Equipment", "Locker Room", "Free Wi-Fi"] },
                { name: "PRO", price: "$59", features: ["Everything in Basic", "Group Classes", "Monthly Body Assessment", "Nutrition Plan"], highlight: true },
                { name: "ELITE", price: "$99", features: ["Everything in Pro", "Personal Trainer", "Sauna Access", "Unlimited Guests"] }
              ].map((plan, i) => (
                <div key={i} className={`border-4 p-8 transition hover:-translate-y-2 ${plan.highlight ? 'border-orange-600 bg-orange-600/5' : 'border-zinc-800 bg-zinc-900'}`}>
                  <h3 className="text-3xl font-black uppercase italic text-white">{plan.name}</h3>
                  <p className="mt-4 text-5xl font-black text-orange-500">{plan.price}<span className="text-xl text-gray-500">/mo</span></p>
                  <ul className="mt-8 grid gap-4">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-3 font-bold">
                        <Dumbbell className="h-5 w-5 text-orange-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="join" className="bg-zinc-900 py-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
