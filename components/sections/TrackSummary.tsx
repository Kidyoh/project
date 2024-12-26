"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Target, Award, Rocket, Lightbulb } from "lucide-react";

const summaryCards = [
  {
    title: "Objective",
    icon: <Target className="w-8 h-8 text-orange-500" />,
    description: "Create engaging, beginner-friendly learning modules for the Venture Meda Bot that teach:",
    items: [
      "AI concepts and applications",
      "Web3 fundamentals and development",
      "Future of work integration"
    ]
  },
  {
    title: "Recognition & Benefits",
    icon: <Award className="w-8 h-8 text-orange-500" />,
    description: "Top performers receive exclusive opportunities:",
    items: [
      "Potential spot in Venture Meda Incubator Program",
      "Access to professional AI/Web3 development tools",
      "Exposure through Venture Meda Bot ecosystem"
    ]
  }
];

const processCards = [
  {
    title: "How to Enter",
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    description: "Simple steps to participate:",
    items: [
      { number: "1", text: "Form a team or participate individually" },
      { number: "2", text: "Submit modules via Venture Meda Bot" },
      { number: "3", text: "Get evaluated through the platform" }
    ]
  },
  {
    title: "Bot Promotion",
    icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
    description: "Contribute to ecosystem growth:",
    items: [
      "Help promote AI & Web3 learning",
      "Enhance bot functionality",
      "Build the future of education"
    ]
  }
];

export function TrackSummary() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Track Summary</h2>
          <p className="text-2xl text-orange-500 font-semibold font-['Manrope']">
            "Innovate & Educate: AI & Web3 Learning Modules for the Venture Meda Bot"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Summary Cards */}
          {summaryCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="section-card h-full hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="subsection-title">{card.title}</h3>
                    <p className="section-subtitle">{card.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="section-text flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}

          {/* Process Cards */}
          {processCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              className=""
            >
              <Card className="section-card hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="subsection-title">{card.title}</h3>
                    <p className="section-subtitle">{card.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="section-text flex items-start">
                      <span className="text-orange-500 mr-2">
                        {typeof item === 'string' ? '•' : item.number + '.'}
                      </span>
                      {typeof item === 'string' ? item : item.text}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 