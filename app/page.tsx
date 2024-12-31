import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
// import { EventDetails } from "@/components/sections/EventDetails";
import { Benefits } from "@/components/sections/Benefits";
import { Partners } from "@/components/sections/Partners";
// import { FAQ } from "@/components/sections/FAQ";
// import { Footer } from "@/components/Footer";
import { Tracks } from "@/components/sections/Tracks";
// import { TrackSummary } from "@/components/sections/TrackSummary";
import { Navbar } from "@/components/Navbar";
import { RegisterCTA } from "@/components/sections/RegisterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-['Manrope']">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      {/* <div id="about">
        <About />
      </div> */}
      {/* <div id="event-details">
        <EventDetails />
      </div> */}
 
      <div id="benefits">
        <Benefits />
      </div>
      <div id="tracks">
        <Tracks />
      </div>
      {/* <RegisterCTA /> */}
      {/* <div id="track-summary">
        <TrackSummary />
      </div> */}
      {/* <div id="registration">
        <Registration />
      </div> */}
      <div id="partners">
        <Partners />
      </div>
      {/* <div id="faq">
        <FAQ />
      </div>
      <Footer /> */}
      
    </main>
  );
}

