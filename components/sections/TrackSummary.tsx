"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

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
          <h2 className="text-4xl font-bold mb-4">Track Summary</h2>
          <p className="text-2xl text-orange-500 font-semibold">
            "Innovate & Educate: AI & Web3 Learning Modules for the Venture Meda Bot"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Objective Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-black/20 border border-gray-800 h-full">
              <div className="flex items-start space-x-4 mb-6">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Objective</h3>
                  <p className="text-gray-400">
                    Create engaging, beginner-friendly learning modules for the Venture Meda Bot that teach:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  AI concepts and applications
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Web3 fundamentals and development
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Future of work integration
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Recognition & Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 bg-black/20 border border-gray-800 h-full">
              <div className="flex items-start space-x-4 mb-6">
                <span className="text-4xl">🏅</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Recognition & Benefits</h3>
                  <p className="text-gray-400">Top performers receive exclusive opportunities:</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-orange-500 mr-2">•</span>
                  Potential spot in Venture Meda Incubator Program
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-orange-500 mr-2">•</span>
                  Access to professional AI/Web3 development tools
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-orange-500 mr-2">•</span>
                  Exposure through Venture Meda Bot ecosystem
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* How to Enter Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-black/20 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <span className="text-4xl">🚀</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">How to Enter</h3>
                      <p className="text-gray-400">Simple steps to participate:</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">1.</span>
                      Form a team or participate individually
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">2.</span>
                      Submit modules via Venture Meda Bot
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">3.</span>
                      Get evaluated through the platform
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <span className="text-4xl">💡</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Bot Promotion</h3>
                      <p className="text-gray-400">Contribute to ecosystem growth:</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Help promote AI & Web3 learning
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Enhance bot functionality
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Build the future of education
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 