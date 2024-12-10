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
      icon: <Trophy className="h-6 w-6" />,
      title: "Grand Prize",
      description: "Win 60,000 ETB for teams of 4-6 members",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Mentorship",
      description: "Receive mentorship and participate in workshops",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Skill Development",
      description: "Develop cutting-edge skills and explore Web3",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Support",
      description: "Access tools and tutorials with gas fee support",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 global-font bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E]">Why Should You Join?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
              <div
                key={index}
                className={`mb-4 p-3 rounded-full ${index % 3 === 0 ? 'bg-primary/10 text-primary' : 'bg-primary/10 text-[#CE3B1E]'
                  }`}
              >
                {benefit.icon}
              </div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}