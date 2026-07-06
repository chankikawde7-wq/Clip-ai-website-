import { motion } from "motion/react";

export default function AuthBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Blob */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-500/10 blur-3xl"
      />
      
      {/* Top Right Blob */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[0%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-bl from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 blur-3xl"
      />

      {/* Bottom Blob */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[20%] right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-pink-500/20 to-orange-500/20 dark:from-pink-500/10 dark:to-orange-500/10 blur-3xl"
      />
      
      {/* Bottom Left Blob */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 blur-3xl"
      />
    </div>
  );
}
