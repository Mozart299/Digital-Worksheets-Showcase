import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
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
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

