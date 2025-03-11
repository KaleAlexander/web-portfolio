"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AppScreen() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white text-foreground">
      {/* App header */}
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <Smartphone className="h-5 w-5 text-primary" />
          <span className="font-semibold">React Native Dev</span>
        </div>
        <Badge variant="outline" className="text-xs">
          v1.0.0
        </Badge>
      </div>

      {/* App content */}
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          <div className="rounded-lg bg-muted p-3">
            <div className="mb-2 flex items-center gap-2">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Project Stats</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-md bg-background p-2">
                <div className="font-medium">Apps Built</div>
                <div className="text-lg font-bold text-primary">24</div>
              </div>
              <div className="rounded-md bg-background p-2">
                <div className="font-medium">Clients</div>
                <div className="text-lg font-bold text-primary">18</div>
              </div>
              <div className="rounded-md bg-background p-2">
                <div className="font-medium">Code Reviews</div>
                <div className="text-lg font-bold text-primary">156</div>
              </div>
              <div className="rounded-md bg-background p-2">
                <div className="font-medium">GitHub Stars</div>
                <div className="text-lg font-bold text-primary">1.2k</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium">Recent Projects</div>
            {[
              { name: "Fitness Tracker", platform: "iOS & Android", progress: 100 },
              { name: "E-commerce App", platform: "iOS & Android", progress: 85 },
              { name: "Social Media", platform: "iOS & Android", progress: 70 },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <div className="font-medium">{project.name}</div>
                  <div className="text-xs text-muted-foreground">{project.platform}</div>
                </div>
                <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-primary" style={{ width: `${project.progress}%` }} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-lg bg-primary/10 p-3">
            <div className="mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Performance Tips</span>
            </div>
            <ul className="space-y-2 text-xs">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex items-start gap-1"
              >
                <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                <span>Use memo and useCallback for optimized renders</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-start gap-1"
              >
                <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                <span>Implement virtualized lists for large data sets</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex items-start gap-1"
              >
                <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                <span>Optimize images and assets for mobile devices</span>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

