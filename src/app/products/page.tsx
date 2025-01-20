"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAnimationVariants } from "@/hooks/use-animation-variants"

export default function Products() {
  const { containerVariants, itemVariants } = useAnimationVariants()

  const products = [
    {
      id: 1,
      title: "Math Worksheet Bundle",
      description: "A comprehensive set of math worksheets covering various topics.",
    },
    {
      id: 2,
      title: "Science Experiment Guide",
      description: "Step-by-step instructions for engaging science experiments.",
    },
    {
      id: 3,
      title: "Language Arts Workbook",
      description: "Exercises to improve reading comprehension and writing skills.",
    },
    {
      id: 4,
      title: "History Timeline Activities",
      description: "Interactive worksheets to learn about historical events.",
    },
    { id: 5, title: "Art Project Ideas", description: "Creative worksheets for art classes and projects." },
  ]

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center" variants={itemVariants}>
        Our Products
      </motion.h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={`/placeholder.svg?height=200&width=200`}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <Link
                href="https://www.classful.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="sm" className="w-full">
                  Buy on Classful
                </Button>
              </Link>
              <Link
                href="https://www.teacherspayteachers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="sm" className="w-full">
                  Buy on TPT
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

