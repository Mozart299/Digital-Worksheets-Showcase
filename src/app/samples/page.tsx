"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAnimationVariants } from "@/hooks/use-animation-variants"

export default function Samples() {
  const { containerVariants, itemVariants } = useAnimationVariants()

  const samples = [
    {
      id: 1,
      title: "Math Worksheet Sample",
      description: "Preview of our popular math worksheet bundle.",
      image: "/images/math.jpg"
    },
    {
      id: 2,
      title: "Science Experiment Sample",
      description: "A sample page from our science experiment guide.",
      image: "/images/science.jpg"
    },
    {
      id: 3,
      title: "Language Arts Sample",
      description: "Example exercises from our language arts workbook.",
      image: "/images/language.jpg"
    },
    {
      id: 4,
      title: "History Sample",
      description: "An overview of our history worksheets.",
      image: "/images/history.jpg"
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
        Sample Worksheets
      </motion.h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {samples.map((sample) => (
          <motion.div
            key={sample.id}
            className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={sample.image}
                alt={sample.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{sample.title}</h2>
            <p className="text-gray-600 mb-4">{sample.description}</p>
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <Link
                href="https://www.classful.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="sm" className="w-full">
                  View on Classful
                </Button>
              </Link>
              <Link
                href="https://www.teacherspayteachers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="sm" className="w-full">
                  View on TPT
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
