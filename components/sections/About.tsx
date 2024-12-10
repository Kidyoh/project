"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 global-font bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E]">
          What is the AASTU Hackathon?
        </h2>
        <Card className="p-8 card-gradient border border-[#FCB05F]/10">
          <p className="text-lg text-muted-foreground mb-6">
            This in-person hackathon at the AASTU Old Graduation Hall on December 25, 2024, is tailored for tech-savvy university students. It's a hands-on event focused on AI and Web3, aimed at helping participants build skills, explore new technologies, and grow their professional networks.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-primary">Hosted by:</h3>
              <p className="text-muted-foreground">Iceaddis, Mastercard, MiNT</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Supported by:</h3>
              <p className="text-muted-foreground">AASTU SET, GDG, Superteam, and DeanslistDAO</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}