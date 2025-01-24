'use client'
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

    return (
      <motion.footer 
        ref={ref}
        className="bg-gray-800 text-white py-8"
        style={{ opacity, y }}
      >
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Borderless Craft. All rights reserved.</p>
          <div className="mt-4">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white mr-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </motion.footer>
    )
}