"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,249,145,0.1),transparent_50%)]" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#25F991] to-[#147A4B] mb-6">
          Empowering the Future of Work with AI and Web3
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
          Join AASTU's exclusive Web3 Hackathon and unlock your potential in emerging technologies!
        </p>
        <Button size="lg" className="bg-gradient-to-r from-[#25F991] to-[#147A4B] hover:opacity-90 transition-opacity glow">
          Register Now to Participate <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  );
}