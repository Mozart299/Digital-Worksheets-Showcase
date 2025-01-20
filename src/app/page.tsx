"use client"

import Link from "next/link"
import { motion, LazyMotion, domAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAnimationVariants } from "@/hooks/use-animation-variants"
import { Music, BookOpen, Calculator, Sparkles, Brain, Rocket } from "lucide-react"

export default function Home() {
  const { containerVariants, itemVariants } = useAnimationVariants()

  const subjects = [
    {
      id: 1,
      title: "Music Mastery",
      icon: <Music className="w-8 h-8 mb-4" />,
      description: "Transform piano score reading into an adventure. Our unique worksheets spark creativity and foster a love for music that goes beyond the keys.",
      href: "/music"
    },
    {
      id: 2,
      title: "Reading & Writing Wonders",
      icon: <BookOpen className="w-8 h-8 mb-4" />,
      description: "From phonics to creative storytelling, dive into a world where each worksheet empowers critical thinking about language.",
      href: "/reading-writing"
    },
    {
      id: 3,
      title: "Math Magic",
      icon: <Calculator className="w-8 h-8 mb-4" />,
      description: "Watch numbers come alive with problem-solving exercises that promote logical thinking and innovative approaches to mathematics.",
      href: "/math"
    }
  ]

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Critical Thinking",
      description: "Activities designed to encourage thinking beyond the obvious"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Building Initiative",
      description: "Resources that inspire independent exploration and learning"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Cultivating Creativity",
      description: "Integration of creativity into core subjects for engaging learning"
    }
  ]

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" variants={itemVariants}>
          Welcome to Borderless Craft
        </motion.h1>
        <motion.p className="text-lg sm:text-xl mb-8 max-w-2xl" variants={itemVariants}>
          Transform the way your child learns with our worksheets, designed to turn education into an adventure for children aged 4-10. Where education meets imagination.
        </motion.p>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md" variants={itemVariants}>
          <Link href="/worksheets">
            <Button className="w-full">Explore Worksheets</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" className="w-full">Learn More</Button>
          </Link>
        </motion.div>

        <motion.div className="mt-16 w-full" variants={containerVariants}>
          <motion.h2 className="text-2xl sm:text-3xl font-semibold mb-8" variants={itemVariants}>
            Our Learning Areas
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <motion.div
                key={subject.id}
                className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex justify-center">{subject.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {subject.description}
                </p>
                <Link href={subject.href}>
                  <Button variant="outline" className="w-full">Explore</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-16 w-full" variants={containerVariants}>
          <motion.h2 className="text-2xl sm:text-3xl font-semibold mb-8" variants={itemVariants}>
            Why Choose Borderless Craft?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 border rounded-lg shadow-sm"
                variants={itemVariants}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </LazyMotion>
  )
}