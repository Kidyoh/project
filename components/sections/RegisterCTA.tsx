"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RegistrationModal } from "@/components/sections/Registration";
import { useState } from "react";

export function RegisterCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  return (
    <section ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E] py-12 sm:py-16 flex flex-col items-center justify-center text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <p className="text-white/90 text-sm sm:text-base">
              🎉 Demo Day - February 19, 2024
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Showcase Your Innovation!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl px-4">
            Join us for an exciting Demo Day where teams will present groundbreaking Web3 solutions. Don't miss this opportunity to witness the future of technology!
          </p>
          <Button
            size="lg"
            className="text-base bg-white text-[#CE3B1E] hover:bg-white/90 transition-colors px-8 py-6"
            onClick={() => setShowRegistrationModal(true)}
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>

      <RegistrationModal 
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
      />
    </section>
  );
} 