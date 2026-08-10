import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'



const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const textItem = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}


export const Section2 = () => {

  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const shoeY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  )


  return (
    <div className="border border-[#71717a] border-l-0 border-r-0 bg-[#111214] flex flex-row max-h-[50vh] min-h-fit overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} className="w-[33%] bg-[#0b0b0c] pl-8 py-16 flex flex-col gap-8">

        <motion.h2 variants={textItem} className="text-[#ededed] text-5xl font-medium w-[61%]">
          BUILT FOR EVERY RUN.
        </motion.h2>

        <motion.p variants={textItem} className="text-[#71717a] text-sm w-[61%]">
          NOVA combines cutting-edge technology with minimalist design to deliver unmatched comfort, energy return, and style.
        </motion.p>

        <motion.button variants={textItem} className='text-[#ededed] flex flex-row gap-2 items-center w-fit cursor-pointer hover:text-[#A6DD03] transition-all ease-in duration-300 group'>
          <p>LEARN MORE</p>
          <ArrowRight size={15} className='relative top-0 group-hover:translate-x-1 transition-all ease-in-out duration-300' />
        </motion.button>
      </motion.div>

      <div id='section2-shoe-container' className="w-[67%] border-l border-[#71717a] z-20">
      </div>
    </div >
  )
}