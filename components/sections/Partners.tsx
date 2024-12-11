"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import aastu from "@/public/aastu.png";
import iceaddis from "@/public/ice-addis.png";
import mint from "@/public/mint.png";
import mastercard from "@/public/mastercard.png";
import gdg from "@/public/gdg.png";
import Deanslist from "@/public/deanslist.png"

export function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    { name: "Iceaddis", role: "Host", logo: iceaddis },
    { name: "Mastercard", role: "Host", logo: mastercard },
    { name: "MiNT", role: "Host", logo: mint },
    { name: "AASTU SET", role: "Support Partner", logo: aastu },
    { name: "GDG Addis", role: "Support Partner", logo: gdg },
    { name: "Superteam", role: "Support Partner", logo: "/logos/superteam.png" },
    { name: "DeanslistDAO", role: "Support Partner", logo: "/logos/deanslistdao.png" },
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
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center">
                {typeof partner.logo === 'string' ? (
                  <img src={partner.logo} alt={`${partner.name} logo`} className="mx-auto mb-4 h-32 w-32 object-contain logo-shadow" />
                ) : (
                  <Image src={partner.logo} alt={`${partner.name} logo`} className="mx-auto mb-4 h-32 w-32 object-contain logo-shadow" />
                )}
                <h3 className="font-semibold mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
