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
import { Tracks } from "@/components/sections/Tracks";
import { Prizes } from "@/components/sections/Prizes";
import { TrackSummary } from "@/components/sections/TrackSummary";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-['Manrope']">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="event-details">
        <EventDetails />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="tracks">
        <Tracks />
      </div>
      <div id="track-summary">
        <TrackSummary />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
      <div id="registration">
        <Registration />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}

