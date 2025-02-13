"use client";

import { Modal } from "@/components/ui/Modal";
import { HubspotForm } from "@/components/HubspotForm";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal = ({
  isOpen,
  onClose
}: RegistrationModalProps) => {
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);

  useEffect(() => {
    // Check if registration is closed based on current time
    const now = new Date();
    const registrationDeadline = new Date("2025-02-03T00:00:00");
    if (now > registrationDeadline) {
      setIsRegistrationClosed(true);
    }
  }, []);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
    >
      <div className="relative flex flex-col h-full max-h-[85vh]">
        {/* Fixed Header */}
        <div className="sticky top-0 z-20 bg-black/95 px-6 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10 pb-4 border-b border-orange-500/20">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
          
          <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E] pr-10">
            Register for AASTU Web3 Hackathon
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 md:px-10">
          {/* Registration Closed Message */}
          {isRegistrationClosed ? (
            <div className="flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-3xl font-bold mb-4">Registration is Now Closed</h2>
              <p className="text-lg text-gray-300">
                Thank you for your interest in the AASTU Web3 Hackathon.
                Registration is now closed. Stay tuned for future events!
              </p>
            </div>
          ) : (
            /* Form */
            <div className="relative">
              <HubspotForm 
                onFormReady={() => console.log("form ready")}
                className="bg-transparent"
              />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};