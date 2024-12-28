"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  className
}: ModalProps) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className={cn(
        "max-w-3xl w-[90%] p-0 gap-0 bg-black/95 border border-orange-500/20",
        "data-[state=open]:duration-300",
        "sm:w-[85%] md:w-[80%]",
        "max-h-[85vh] overflow-hidden",
        className
      )}>
        {children}
      </DialogContent>
    </Dialog>
  );
}; 