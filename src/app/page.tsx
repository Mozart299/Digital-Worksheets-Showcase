"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAnimationVariants } from "@/hooks/use-animation-variants"

export default function Home() {
  const { containerVariants, itemVariants } = useAnimationVariants()

  return (
    <motion.div
      className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" variants={itemVariants}>
        Welcome to Digital Worksheets Showcase
      </motion.h1>
      <motion.p className="text-lg sm:text-xl mb-8 max-w-2xl" variants={itemVariants}>
        Discover high-quality digital worksheets designed to enhance learning experiences. Perfect for educators looking
        for engaging and effective teaching materials.
      </motion.p>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md" variants={itemVariants}>
        <Link href="https://www.classful.com" target="_blank" rel="noopener noreferrer">
          <Button className="w-full">Shop on Classful</Button>
        </Link>
        <Link href="https://www.teacherspayteachers.com" target="_blank" rel="noopener noreferrer">
          <Button className="w-full">Shop on Teachers Pay Teachers</Button>
        </Link>
      </motion.div>
      <motion.div className="mt-16 w-full" variants={containerVariants}>
        <motion.h2 className="text-2xl sm:text-3xl font-semibold mb-8" variants={itemVariants}>
          Featured Worksheets
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={`Featured worksheet ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Worksheet Title {i}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Brief description of the worksheet, highlighting its key features and benefits for students and
                teachers.
              </p>
              <Link href="/products" className="inline-block">
                <Button variant="outline">Learn More</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

