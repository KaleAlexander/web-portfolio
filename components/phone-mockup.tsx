"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
}

export default function PhoneMockup({ children, className }: PhoneMockupProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn("relative mx-auto", className)}
    >
      <div className="relative mx-auto h-[600px] w-[300px] rounded-[40px] border-[14px] border-foreground bg-background shadow-xl dark:border-foreground/90">
        <div className="absolute left-1/2 top-0 z-10 h-[18px] w-[148px] -translate-x-1/2 rounded-b-[14px] bg-foreground dark:bg-foreground/90"></div>
        <div className="absolute -left-[2px] top-[72px] h-[32px] w-[4px] rounded-r-lg bg-foreground dark:bg-foreground/90"></div>
        <div className="absolute -left-[2px] top-[120px] h-[46px] w-[4px] rounded-r-lg bg-foreground dark:bg-foreground/90"></div>
        <div className="absolute -left-[2px] top-[178px] h-[46px] w-[4px] rounded-r-lg bg-foreground dark:bg-foreground/90"></div>
        <div className="absolute -right-[2px] top-[142px] h-[64px] w-[4px] rounded-l-lg bg-foreground dark:bg-foreground/90"></div>
        <div className="h-full w-full overflow-hidden rounded-[28px] bg-background p-2">{children}</div>
      </div>
    </motion.div>
  )
}

