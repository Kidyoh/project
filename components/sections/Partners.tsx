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
import deanslist from "@/public/deanslist.png"
import superteam from "@/public/superteam.svg"

export function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const organizers = [
    { name: "Iceaddis", role: "Organizer", logo: iceaddis },
    { name: "Mastercard Foundation", role: "Organizer", logo: mastercard },
    { name: "MiNT", role: "Organizer", logo: mint },
  ];

  const partners = [
    { name: "AASTU SET", role: "Support Partner", logo: aastu },
    { name: "GDG Addis", role: "Support Partner", logo: gdg },
    { name: "Superteam", role: "Support Partner", logo: superteam },
    { name: "DeanslistDAO", role: "Support Partner", logo: deanslist },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 global-font bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E]">
          Our Organizers and Partners
        </h2>

        {/* Organizers Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Organizers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizers.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-black/50 backdrop-blur-sm">
                  {typeof org.logo === 'string' ? (
                    <img src={org.logo} alt={`${org.name} logo`} className="mx-auto mb-4 h-32 w-32 object-contain logo-shadow" />
                  ) : (
                    <Image src={org.logo} alt={`${org.name} logo`} className="mx-auto mb-4 h-32 w-32 object-contain logo-shadow" />
                  )}
                  <h3 className="font-semibold mb-2 text-white">{org.name}</h3>
                  <p className="text-sm text-orange-500">{org.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-black/30">
                  {typeof partner.logo === 'string' ? (
                    <img src={partner.logo} alt={`${partner.name} logo`} className="mx-auto mb-4 h-24 w-24 object-contain logo-shadow" />
                  ) : (
                    <Image src={partner.logo} alt={`${partner.name} logo`} className="mx-auto mb-4 h-24 w-24 object-contain logo-shadow" />
                  )}
                  <h3 className="font-semibold mb-2 text-white">{partner.name}</h3>
                  <p className="text-sm text-gray-400">{partner.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
