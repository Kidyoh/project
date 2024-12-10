"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

export function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    { name: "AASTU SET", role: "Support Partner" },
    { name: "GDG Addis", role: "Support Partner" },
    { name: "Superteam", role: "Support Partner" },
    { name: "DeanslistDAO", role: "Support Partner" },
    { name: "Iceaddis", role: "Host" },
    { name: "Mastercard", role: "Host" },
    { name: "MiNT", role: "Host" },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 global-font bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E]">Our Organizers and Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 text-center">
              <h3 className="font-semibold mb-2">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.role}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}