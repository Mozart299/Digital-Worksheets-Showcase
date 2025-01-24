import { useEffect, useState } from "react"
import type { Variants } from "framer-motion"

/**
 * A custom hook that provides reusable animation variants for Framer Motion.
 */
export function useAnimationVariants() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Container animation (e.g., for staggered children animations)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeInOut",
      },
    },
  }

  // Child item animation for staggered lists
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        type: "spring",
        stiffness: 60,
        damping: 18,
      },
    }),
  }

  // Simple fade-in animation
  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  // Scale-in animation (e.g., for modals or buttons)
  const scaleInVariants: Variants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  }

  // Slide-in animation from any direction
  const slideInVariants = (direction: "left" | "right" | "up" | "down"): Variants => {
    const directions = {
      left: { x: "-150%" },
      right: { x: "150%" },
      up: { y: "150%" },
      down: { y: "-150%" },
    }
    return {
      hidden: { ...directions[direction], opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 16,
          duration: 0.8,
        },
      },
    }
  }

  // Rotation animation (e.g., for icons or loaders)
  const rotateVariants: Variants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  }

  // Hover animation (e.g., for interactive buttons or links)
  const hoverVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
  }

  // Bounce animation (e.g., for call-to-action elements)
  const bounceVariants: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -15, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }

  // Sliding overlay effect (e.g., for modals or page transitions)
  const overlayVariants: Variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.4 } },
  }

  return {
    containerVariants,
    itemVariants,
    fadeInVariants,
    scaleInVariants,
    slideInVariants,
    rotateVariants,
    hoverVariants,
    bounceVariants,
    overlayVariants,
    isMounted,
  }
}
