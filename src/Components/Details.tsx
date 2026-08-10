import lightIcon from "../assets/details/light.webp"
import cushionIcon from "../assets/details/cushion.webp"
import carbonIcon from "../assets/details/carbon.webp"
import breathableIcon from "../assets/details/breathable.webp"
import { motion } from "framer-motion"


export const Details = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }


  return (
    <div className="w-full bg-[#060609] flex flex-col gap-4 justify-center py-14 border-b border-[#71717a]">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} className="text-[#ededed] text-3xl font-medium uppercase text-center w-full flex flex-col justify-center">
        <motion.h1 variants={titleVariants}>
          engineered
        </motion.h1>
        <motion.h1
          variants={titleVariants}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          for excellence
        </motion.h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="flex flex-row"
      >

        <div className="w-full flex flex-row justify-center">

          <motion.div
            variants={itemVariants}
            className="flex flex-col w-[24%] items-center gap-2 border-r border-[#111214] mx-auto"
          >
            <motion.img
              src={lightIcon}
              alt="ultra light"
              className="w-15 h-15 opacity-60"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 0.6,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            <h3 className="text-[#ededed] text-xl uppercase">
              ultra light
            </h3>

            <p className="text-[#71717a] w-[60%] text-center text-sm">
              Reduced fatigue and helps you go the extra mile.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col w-[24%] items-center gap-2 border-r border-[#111214] mx-auto"
          >
            <motion.img
              src={cushionIcon}
              alt="ultra light"
              className="w-15 h-15 opacity-60"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 0.6,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            <h3 className="text-[#ededed] text-xl uppercase">
              responsive cushion
            </h3>

            <p className="text-[#71717a] w-[60%] text-center text-sm">
              Maximum energy return with every step.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col w-[24%] items-center gap-2 border-r border-[#111214] mx-auto"
          >
            <motion.img
              src={carbonIcon}
              alt="ultra light"
              className="w-15 h-15 opacity-60"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 0.6,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            <h3 className="text-[#ededed] text-xl uppercase">
              carbon plate
            </h3>

            <p className="text-[#71717a] w-[60%] text-center text-sm">
              Propels you forward with explosive power.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col w-[24%] items-center gap-2 border-r border-[#111214] mx-auto"
          >
            <motion.img
              src={breathableIcon}
              alt="ultra light"
              className="w-15 h-15 opacity-60"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 0.6,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            <h3 className="text-[#ededed] text-xl uppercase">
              breathable upper
            </h3>

            <p className="text-[#71717a] w-[60%] text-center text-sm">
              Keeps your feet cool and comfortable.
            </p>
          </motion.div>


        </div>
      </motion.div>
    </div >
  )
}