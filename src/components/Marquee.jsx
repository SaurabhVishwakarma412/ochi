import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div id="right" data-scroll data-scroll-section data-scroll-speed="0.1"
 className="w-full py-24 rounded-3xl bg-[#004D43] overflow-hidden"
    >
      <div className="text flex whitespace-nowrap font-bold">
        {/* First marquee text */}
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10, // Adjust speed here
          }}
          className="text-[48vh] leading-none border-y border-zinc-300 px-4"
        >
          WE ARE OCHI
        </motion.h1>

        {/* Second marquee text */}
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
          className="text-[48vh] leading-none border-y border-zinc-300 px-4"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
