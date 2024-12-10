"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "Do I need prior experience in AI or Web3?",
      answer: "No, as long as you have a tech background, you're welcome to join.",
    },
    {
      question: "Is this hackathon free?",
      answer: "Yes, there is no participation fee.",
    },
    {
      question: "What resources will I get?",
      answer: "Tutorials, mentorship, and gas fee support to develop your hackathon projects.",
    },
    {
      question: "How do I contact the organizers?",
      answer: "You can reach us via Telegram through our support account or dedicated bot.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 global-font bg-clip-text text-transparent bg-gradient-to-r from-[#FCB05F] to-[#CE3B1E]">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}