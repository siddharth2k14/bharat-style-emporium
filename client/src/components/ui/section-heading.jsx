"use client"

import React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const SectionHeading = ({ title, subtitle, children, className, ...props }) => {
  return (
    <motion.section
      className={cn("space-y-4", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...props}
    >
      <div>
        <motion.h2
          className="text-3xl font-bold tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {children}
    </motion.section>
  )
}

export { SectionHeading }
