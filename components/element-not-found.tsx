"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function ElementNotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-900 to-gray-600 text-white">
      <motion.div
        className="relative w-64 h-64 mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Astronot */}
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <circle cx="50" cy="50" r="20" fill="white" />
          <circle cx="50" cy="50" r="15" fill="#2563EB" />
          <rect x="46" y="38" width="8" height="12" rx="4" fill="white" />
          <circle cx="50" cy="35" r="10" fill="white" />
        </motion.svg>

        {/* Gezegenler */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${6 - i * 2} h-${
              6 - i * 2
            } rounded-full bg-accent`}
            style={{
              top: `${20 + i * 30}%`,
              left: `${80 - i * 30}%`,
            }}
            animate={{
              y: [0, 10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        404 - Sayfa Bulunamadı
      </motion.h1>

      <motion.p
        className="text-xl mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Üzgünüz, aradığınız sayfa uzayın derinliklerinde kaybolmuş gibi
        görünüyor.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button asChild>
          <Link href="/" className="flex items-center space-x-2">
            <Home className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
