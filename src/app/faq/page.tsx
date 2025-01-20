"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useAnimationVariants } from "@/hooks/use-animation-variants"

export default function FAQ() {
  const { containerVariants, itemVariants } = useAnimationVariants()

  const faqs = [
    {
      question: "How do I purchase your digital worksheets?",
      answer:
        "Our digital worksheets are available for purchase on Classful and Teachers Pay Teachers. Simply click on the respective platform links provided on our website to browse and buy our products.",
    },
    {
      question: "Can I use these worksheets for my entire class?",
      answer:
        "Yes, our worksheets are designed for classroom use. Please refer to the specific licensing terms for each product, which you can find on the product page of the platform where you make your purchase.",
    },
    {
      question: "Are your worksheets editable?",
      answer:
        "Most of our worksheets come in editable formats. Check the product description for details on editability and file formats included in each purchase.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Refund policies are determined by the platform where you make your purchase (Classful or Teachers Pay Teachers). Please refer to their respective refund policies for more information.",
    },
    {
      question: "Can I preview the worksheets before purchasing?",
      answer:
        "Yes, we provide sample images and brief descriptions of our products on our website. Additionally, most products on Classful and Teachers Pay Teachers include preview pages to give you a better idea of the content.",
    },
  ]

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center" variants={itemVariants}>
        Frequently Asked Questions
      </motion.h1>
      <motion.div className="max-w-3xl mx-auto" variants={containerVariants}>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AccordionItem value={`item-${index}`} className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                  <h2 className="text-left text-lg font-semibold">{faq.question}</h2>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  )
}

