"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { HubspotForm } from "@/components/HubspotForm";

export function Registration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Register Now</h2>
        <Card className="p-8 bg-white">
          <HubspotForm />
        </Card>
      </motion.div>
    </section>
  );
}