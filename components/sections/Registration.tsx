"use client";

import { Modal } from "@/components/ui/Modal";
import { HubspotForm } from "@/components/HubspotForm";
import { useState } from "react";
import { X } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal = ({
  isOpen,
  onClose
}: RegistrationModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

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
          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
            </div>
          )}

          {/* Form */}
          <div className="relative">
            <HubspotForm 
              onFormReady={() => setIsLoading(false)}
              className="bg-transparent"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

