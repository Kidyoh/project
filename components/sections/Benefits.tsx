"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Users, Lightbulb, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Grand Prize",
      gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Mentorship",
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Skill Development",
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tools & Support",
      gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20"
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FCB05F]/30 to-[#CE3B1E]/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 global-font bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E]">
          Why Should You Join?
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`p-8 h-full bg-gradient-to-br ${benefit.gradient} hover:shadow-xl transition-all duration-300 border-0`}>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}