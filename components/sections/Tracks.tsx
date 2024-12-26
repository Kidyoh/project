"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AiOutlineRobot } from "react-icons/ai";
import {BiBot} from "react-icons/bi";
import {SiSolana} from "react-icons/si";
const tracks = [
  {
    id: "solana",
    title: "Build on Solana",
    icon: <SiSolana className="text-3xl" />,
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    description: [
      "Create decentralized applications on the Solana blockchain",
      "Receive support from Superteam and Solana experts",
      "Build scalable solutions leveraging Solana's features"
    ],
    criteria: [
      {
        category: "Innovation and Uniqueness",
        weight: "25%",
        details: [
          "How creative and original is the solution?",
          "Does it bring something new to the Solana ecosystem?",
          "Is the application solving a unique problem or improving an existing process?"
        ]
      },
      {
        category: "Technical Execution",
        weight: "30%",
        details: [
          "How well is the dApp built on Solana blockchain?",
          "Is the code efficient, scalable, and well-structured?",
          "Does it leverage Solana's speed and scalability?"
        ]
      },
      {
        category: "User Experience and Design",
        weight: "20%",
        details: [
          "How user-friendly and intuitive is the interface?",
          "Does it provide a smooth and engaging experience?"
        ]
      },
      {
        category: "Impact and Use Case",
        weight: "15%",
        details: [
          "How effectively does it address real-world problems?",
          "What is the potential impact on users and community?"
        ]
      },
      {
        category: "Presentation and Documentation",
        weight: "10%",
        details: [
          "How clearly is the project presented during the demo?",
          "Is there comprehensive documentation for code, setup, and usage?"
        ]
      }
    ]
  },
  {
    id: "ai",
    title: "AI Solutions with Agents.ai",
    icon: <AiOutlineRobot className="text-3xl" />, 
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    description: [
      "Integrate AI with Blockchain using Agents.ai to solve real-world problems",
      "Participate in workshops guided by Agents.ai experts",
      "Build innovative AI-powered blockchain solutions"
    ],
    criteria: [
      {
        category: "AI Integration and Innovation",
        weight: "30%",
        details: [
          "How effectively is AI integrated with blockchain technology?",
          "Does the solution demonstrate innovative use of AI?",
          "Quality of AI implementation for real-world problems"
        ]
      },
      {
        category: "Problem Solving and Practicality",
        weight: "25%",
        details: [
          "How well does it address meaningful challenges?",
          "Is the AI application practical and feasible?",
          "Viability of the solution in real-world scenarios"
        ]
      },
      {
        category: "Technical Execution and Scalability",
        weight: "20%",
        details: [
          "How well is the AI model implemented and integrated?",
          "Is the solution scalable and adaptable?",
          "Can it handle growing data and use cases?"
        ]
      },
      {
        category: "User Impact",
        weight: "15%",
        details: [
          "How will it benefit end-users or businesses?",
          "What's the long-term potential in blockchain environments?"
        ]
      },
      {
        category: "Presentation and Documentation",
        weight: "10%",
        details: [
          "How clearly is the project presented?",
          "Quality of documentation for AI models and processes"
        ]
      }
    ]
  },
  {
    id: "bot",
    title: "Venture Meda Bot Challenge",
    icon: <BiBot className="text-3xl" />,
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    description: [
      "Enhance the Venture Meda Telegram Bot with innovative features",
      "Create learning modules for AI, Web3, and future of work",
      "Build engaging, interactive bot experiences",
      "Points awarded for bot interactions and development"
    ],
    criteria: [
      {
        category: "Innovation and Creativity",
        weight: "25%",
        details: [
          "How unique and innovative are the bot features?",
          "Does it enhance learning, communication, or automation?",
          "Creative use of bot capabilities"
        ]
      },
      {
        category: "User Engagement and Interaction",
        weight: "25%",
        details: [
          "How well does the bot engage users?",
          "Quality of user experience and information delivery",
          "Effectiveness of interactive features"
        ]
      },
      {
        category: "Technical Implementation",
        weight: "20%",
        details: [
          "How well is the bot integrated with Telegram?",
          "Efficiency and smoothness of operation",
          "Scalability of the implementation"
        ]
      },
      {
        category: "Practicality and Impact",
        weight: "20%",
        details: [
          "Practical value for hackathon and beyond",
          "Enhancement of learning experience",
          "Long-term impact on user communication"
        ]
      },
      {
        category: "Presentation and Documentation",
        weight: "10%",
        details: [
          "Quality of demo presentation",
          "Comprehensiveness of setup and usage documentation",
          "Technical documentation quality"
        ]
      }
    ]
  }
];

export function Tracks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTrack, setActiveTrack] = useState("solana");

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold global-font">TRACKS</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-right text-gray-400"
          >
            Build the coolest AI & Web3<br />
            Solutions across 3 Tracks
          </motion.p>
        </div>

        <div className="flex overflow-x-auto space-x-4 mb-12 pb-4 scrollbar-hide">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setActiveTrack(track.id)}
              className={cn(
                "px-6 py-3 whitespace-nowrap transition-all duration-300 rounded-full flex items-center space-x-2",
                activeTrack === track.id
                  ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white border border-orange-500/50"
                  : "text-gray-400 hover:text-gray-300 hover:bg-white/5"
              )}
            >
              <span className="text-2xl">{track.icon}</span>
              <span>{track.title}</span>
            </button>
          ))}
        </div>

        {tracks.map((track) => (
          track.id === activeTrack && (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Card className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-75 backdrop-blur-3xl`} />

                <div className="relative p-8 bg-black/80">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-4xl font-bold text-white flex items-center">
                        <span className="text-5xl mr-4">{track.icon}</span>
                        <span>{track.title}</span>
                      </h3>
                      <div className="space-y-2 pl-4 border-l-2 border-orange-500/30">
                        {track.description.map((desc, i) => (
                          <p key={i} className="text-gray-300 flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
                        <span className="text-orange-500 mr-2">⚖️</span> Judging Criteria
                      </h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        {track.criteria.map((criterion, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group"
                          >
                            <div className="space-y-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/50 transition-colors duration-300">
                              <div className="flex justify-between items-center">
                                <span className="text-white font-medium">{criterion.category}</span>
                                <span className="text-orange-500 font-semibold">{criterion.weight}</span>
                              </div>
                              <ul className="space-y-2">
                                {criterion.details.map((detail, j) => (
                                  <li key={j} className="text-sm text-gray-400 flex items-start">
                                    <span className="text-orange-500/50 mr-2">•</span>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <Card className="p-8 bg-black/20 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <span className="text-orange-500 mr-3 font-global">📚</span> Workshops & Learning Sessions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Solana Blockchain Fundamentals",
                  description: "Understand how Solana works and how to build scalable decentralized applications.",
                  icon: "⛓️"
                },
                {
                  title: "AI-Powered Solutions with Agents.ai",
                  description: "Learn to use AI in your blockchain applications with Agents.ai",
                  icon: "🤖"
                }
              ].map((workshop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="p-6 bg-white/5 rounded-lg border lg:h-32 border-white/10 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <span className="text-3xl">{workshop.icon}</span>
                      <div>
                        <h4 className="text-white font-medium mb-2">{workshop.title}</h4>
                        <p className="text-gray-400">{workshop.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 