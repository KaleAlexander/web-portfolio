"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Badge variant="outline" className="px-3 py-1 text-sm font-medium hover:bg-primary/10 transition-colors">
        {name}
      </Badge>
    </motion.div>
  )
}

