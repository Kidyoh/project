"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RegistrationModal } from "@/components/sections/Registration";

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowRegistrationModal(false);
    }
  }, []);

  useEffect(() => {
    if (showRegistrationModal) {
      document.addEventListener('keydown', handleKeyPress);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [showRegistrationModal, handleKeyPress]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center pt-40 px-4 sm:px-6 lg:px-8 hero-gradient">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Date and Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <p className="text-base sm:text-lg text-gray-300">
              February 19, 2024 • Demo Day • AASTU Old Graduation Hall
            </p>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Manrope'] font-bold tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E]">
              AASTU Web3
            </span>
            <span className="block text-white mt-2">
              Hackathon 2024
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-['Manrope']">
            Join us for an exciting journey into the future of technology with AI and Web3
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12"
          >
            <Button
              size="lg"
              className="text-base sm:text-lg px-8 py-6 bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E] hover:opacity-90 transition-opacity"
              onClick={() => setShowRegistrationModal(true)}
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 py-6 border-white/20 hover:bg-white/5 transition-colors"
              onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Tracks
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 sm:mt-16"
          >
            {[
              { label: "Prize Pool", value: "100K ETB" },
              { label: "Tracks", value: "3" },
              { label: "Days", value: "10" },
              { label: "Workshops", value: "4+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <RegistrationModal 
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
      />
    </section>
  );
}
