import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { EventDetails } from "@/components/sections/EventDetails";
import { Benefits } from "@/components/sections/Benefits";
import { Registration } from "@/components/sections/Registration";
import { Partners } from "@/components/sections/Partners";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <EventDetails />
      <Benefits />
      {/* <Registration />
      <Partners />
      <FAQ />
      <Footer /> */}
    </main>
  );
}