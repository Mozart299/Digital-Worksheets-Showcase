"use client"

import { motion } from "framer-motion"
import { useAnimationVariants } from "@/hooks/use-animation-variants"

export default function About() {
  const { containerVariants, itemVariants } = useAnimationVariants()

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center" variants={itemVariants}>
        About Us
      </motion.h1>
      <motion.div className="space-y-6 text-lg" variants={containerVariants}>
        <motion.p variants={itemVariants}>
          Welcome to Digital Worksheets Showcase! We are passionate educators dedicated to creating high-quality,
          engaging digital worksheets for teachers and students around the world.
        </motion.p>
        <motion.p variants={itemVariants}>
          Our mission is to provide innovative and effective teaching materials that make learning fun and accessible.
          With years of classroom experience, we understand the challenges teachers face and strive to create resources
          that save time and enhance the learning experience.
        </motion.p>
        <motion.p variants={itemVariants}>
          All our worksheets are carefully designed to align with curriculum standards and incorporate best practices in
          education. We believe in the power of technology to transform learning, which is why we focus on digital
          resources that can be easily integrated into both traditional and virtual classrooms.
        </motion.p>
        <motion.p variants={itemVariants}>
          Thank you for visiting our showcase. We hope our worksheets will inspire and support you in your teaching
          journey!
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

