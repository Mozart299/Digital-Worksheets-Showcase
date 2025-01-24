import { useEffect, useState } from "react"
import type { Variants } from "framer-motion"

export function useAnimationVariants() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  }

  // New fade-in variant
  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // New scale-in variant
  const scaleInVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  }

  // New slide-in variants (from different directions)
  const slideInVariants = (direction: "left" | "right" | "up" | "down"): Variants => {
    const directions = {
      left: { x: "-100%" },
      right: { x: "100%" },
      up: { y: "100%" },
      down: { y: "-100%" },
    }
    return {
      hidden: { ...directions[direction], opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 12,
        },
      },
    }
  }

  return {
    containerVariants,
    itemVariants,
    fadeInVariants,
    scaleInVariants,
    slideInVariants,
    isMounted,
  }
}

