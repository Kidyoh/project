"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

const prizes = [
  {
    title: "Grand Prize Pool",
    amount: "60K ETB",
    details: "For winners from Venture Meda",
    icon: "🏆",
    gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20"
  },
  {
    title: "Professional Development",
    amount: "Nvidia Courses",
    details: "With Certifications",
    icon: "🎓",
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Infrastructure",
    amount: "AWS Credits",
    details: "Free hosting for your project",
    icon: "☁️",
    gradient: "from-cyan-500/20 via-teal-500/20 to-emerald-500/20"
  },
  {
    title: "Team Collaboration",
    amount: "Clickup Pro",
    details: "Free workspace for winning teams",
    icon: "👥",
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20"
  }
];

export function Prizes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">PRIZES</h2>
            <p className="text-gray-400">Win amazing prizes and opportunities</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative group h-full overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative p-8 bg-black/40 backdrop-blur-sm h-full">
                  <div className="space-y-4">
                    <span className="text-4xl">{prize.icon}</span>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{prize.title}</p>
                      <h3 className="text-3xl font-bold text-white mb-2">{prize.amount}</h3>
                      <p className="text-sm text-gray-400">{prize.details}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 