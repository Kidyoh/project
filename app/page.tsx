import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { EventDetails } from "@/components/sections/EventDetails";
import { Benefits } from "@/components/sections/Benefits";
import { Registration } from "@/components/sections/Registration";
import { Partners } from "@/components/sections/Partners";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";
import Image from 'next/image'
import Logo from '../public/venture_new_logo-aa8ce9b0.svg'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto pt-4 flex justify-center">
        <Image
          src={Logo}
          alt="AASTU Web3 Hackathon Logo"
          width={300}
          height={100}
          className="mb-4 filter-white"
        />
      </div>
      <Hero />
      <About />
      <EventDetails />
      <Benefits />
      <Registration />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
}

