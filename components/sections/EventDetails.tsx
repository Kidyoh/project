"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export function EventDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const details = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Date",
      content: "December 25, 2024",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "5kilo, AASTU Old Graduation Hall",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Registration Deadline",
      content: "December 18, 2024",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Eligibility",
      content: "Open to AASTU students with a tech background",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 global-font bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E]">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg"
            >
              <div
                className={`mb-4 p-3 rounded-full ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-primary/10 text-[#CE3B1E]'
                  }`}
              >
                {detail.icon}
              </div>
              <h3 className="font-semibold mb-2">{detail.title}</h3>
              <p className="text-muted-foreground">{detail.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}