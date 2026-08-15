import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

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
  return (
    <section
      className="
        border
        border-[#71717a]
        border-l-0
        border-r-0
        bg-[#111214]
        overflow-hidden
      "
    >

      {/* =========================================
          MOBILE
      ========================================= */}

      <div className="
        md:hidden
        flex
        flex-col
      ">

        {/* TEXT */}

        <div className="
          bg-[#0b0b0c]
          px-5
          pt-14
          pb-10
        ">

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3
            }}
            className="
              flex
              flex-col
              gap-6
            "
          >

            {/* small label */}

            <motion.span
              variants={textItem}
              className="
                text-[#A6DD03]
                text-[9px]
                tracking-[0.2em]
                uppercase
                font-medium
              "
            >
              Performance / 01
            </motion.span>


            {/* heading */}

            <motion.h2
              variants={textItem}
              className="
                text-[#ededed]
                text-[clamp(2.7rem,13vw,4rem)]
                leading-[0.9]
                tracking-[-0.05em]
                font-medium
                max-w-[330px]
              "
            >
              BUILT FOR
              <br />
              EVERY RUN.
            </motion.h2>


            {/* description */}

            <motion.p
              variants={textItem}
              className="
                text-[#71717a]
                text-sm
                leading-6
                max-w-[320px]
              "
            >
              NOVA combines cutting-edge technology
              with minimalist design to deliver
              unmatched comfort, energy return,
              and style.
            </motion.p>


            {/* button */}

            <motion.button
              variants={textItem}
              className="
                text-[#ededed]
                flex
                flex-row
                gap-2
                items-center
                w-fit
                cursor-pointer
                group
                text-sm
                mt-1
                active:scale-95
                transition-transform
              "
            >
              <span>LEARN MORE</span>

              <ArrowRight
                size={15}
                className="
                  group-hover:translate-x-1
                  transition-all
                  ease-in-out
                  duration-300
                "
              />
            </motion.button>

          </motion.div>

        </div>


        {/* SHOE */}

        <motion.div
          id="section2-shoe-container"
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            w-full
            h-[320px]
            border-t
            border-[#71717a]
            overflow-hidden
          "
        >

          {/* subtle glow behind product */}

          <div
            className="
              absolute
              w-[280px]
              h-[120px]
              rounded-full
              bg-[#A6DD03]/[0.06]
              blur-[80px]
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          />

          {/* 
            Your existing Section2 shoe/background
            should remain here through your CSS.
          */}

        </motion.div>

      </div>


      {/* =========================================
          DESKTOP
      ========================================= */}

      <div className="
        hidden
        md:flex
        flex-row
        max-h-[50vh]
        min-h-fit
        overflow-hidden
      ">

        <div className="
          w-[33%]
          bg-[#0b0b0c]
          pl-8
          py-16"
        >

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3
            }}
            className="
              w-full
              flex
              flex-col
              gap-8
            "
          >

            <motion.h2
              variants={textItem}
              className="
                text-[#ededed]
                text-5xl
                font-medium
                w-[61%]
              "
            >
              BUILT FOR EVERY RUN.
            </motion.h2>

            <motion.p
              variants={textItem}
              className="
                text-[#71717a]
                text-sm
                w-[61%]
              "
            >
              NOVA combines cutting-edge technology
              with minimalist design to deliver
              unmatched comfort, energy return,
              and style.
            </motion.p>

            <motion.button
              variants={textItem}
              className="
                text-[#ededed]
                flex
                flex-row
                gap-2
                items-center
                w-fit
                cursor-pointer
                hover:text-[#A6DD03]
                transition-colors
                ease-in
                duration-300
                group
              "
            >
              <p>LEARN MORE</p>

              <ArrowRight
                size={15}
                className="
                  relative
                  top-0
                  group-hover:translate-x-1
                  transition-all
                  ease-in-out
                  duration-300
                "
              />
            </motion.button>

          </motion.div>

        </div>


        <div
          id="section2-shoe-container"
          className="
            w-[67%]
            border-l
            border-[#71717a]
            z-20
          "
        />

      </div>

    </section>
  )
}