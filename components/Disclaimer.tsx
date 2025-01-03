"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RegistrationModal } from "@/components/sections/Registration";

export function Disclaimer() {
  const [isVisible, setIsVisible] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center"
          >
            <div className="w-full bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E] shadow-lg">
              <div className="px-6 py-3 bg-black/95 flex items-center justify-between gap-6 backdrop-blur-sm">
                {/* Left side with icon and content */}
                <div className="flex-1 flex items-center justify-center gap-4">
                  <div className="hidden sm:flex h-10 w-10 rounded-full bg-orange-500/10 items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-white/90 text-sm sm:text-base font-medium">
                      <span className="text-orange-500">Registration Deadline:</span> February 3, 2025
                    </p>
                    <p className="text-white/60 text-xs sm:text-sm mt-0.5">
                      Don't miss out on this opportunity!
                    </p>
                  </div>
                </div>

                {/* Right side with button and close */}
                <div className="">
                  <Button 
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm whitespace-nowrap"
                    onClick={() => setShowRegistrationModal(true)}
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-white/40 hover:text-white/80 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <RegistrationModal 
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
      />
    </>
  );
} 