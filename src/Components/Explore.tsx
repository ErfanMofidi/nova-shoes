import { Play } from "lucide-react"
import { motion } from "framer-motion"

export const Explore = () => {

  const lines = ["run.", "explore.", "be more."]

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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

  return (
    <section
      id="explore"
      className="
        relative
        explore flex flex-col gap-4 w-full
      "
    >

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div
        className="
          md:hidden
          min-h-125
          px-5
          py-20
          flex
          flex-col
          justify-between
        "
      >

        {/* TOP LABEL */}

        <motion.div
          initial={{
            opacity: 0,
            x: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            items-center
            gap-3
            mb-14
          "
        >

          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-[#A6DD03]
            "
          />

          <span
            className="
              text-[#71717a]
              text-[9px]
              tracking-[0.2em]
              uppercase
            "
          >
            Move / Without limits
          </span>

        </motion.div>


        {/* MAIN TYPOGRAPHY */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="
            flex
            flex-col
            text-[#ededed]
            text-[clamp(3.5rem,17vw,6rem)]
            leading-[0.82]
            tracking-[-0.06em]
            font-medium
            uppercase
          "
        >

          {lines.map((line) => (
            <motion.h1
              key={line}
              variants={lineVariants}
            >
              {line}
            </motion.h1>
          ))}

        </motion.div>


        {/* CTA */}

        <motion.button
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-16
            w-full
            flex
            items-center
            justify-between
            border-white/10
            pt-5
            text-[#ededed]
            cursor-pointer
          "
        >

          <div className="
            flex
            items-center
            gap-3
            group
            hover:scale-105
            active:scale-95
            transition-all
            duration-300
          ">

            <span
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#A6DD03]
                flex
                items-center
                justify-center
                group-hover:bg-[#A6DD03]
                transition-all
                duration-300
              "
            >

              <Play
                size={15}
                className="
                  fill-[#ededed]
                  group-hover:fill-[#111214]
                  group-hover:text-[#111214]
                  transition-colors
                  duration-300
                "
              />

            </span>


            <span className="
              text-sm
              uppercase
              tracking-wider
            ">
              Watch film
            </span>

          </div>

        </motion.button>

      </div>


      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div
        className="
          hidden
          md:flex
          flex-col
          gap-4
          h-[clamp(400px,40vh,50vh)]
          w-full
          py-20
          px-14
        "
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="
            flex
            flex-col
            text-[#ededed]
            text-6xl
            font-medium
            uppercase
          "
        >

          {lines.map((line) => (
            <motion.h1
              key={line}
              variants={lineVariants}
            >
              {line}
            </motion.h1>
          ))}

        </motion.div>


        <div
          className="
            text-[#ededed]
            flex
            flex-row
            gap-2
            items-center
            text-xl
            w-fit
            cursor-pointer
            hover:scale-105
            active:scale-95
            transition-all
            ease-in-out
            duration-300
            group
          "
        >

          <Play
            size={35}
            className="
              border
              border-[#a6dd03]
              group-hover:bg-[#a6dd03]
              rounded-full
              p-2
              fill-[#ededed]
              group-hover:fill-[#111214]
              group-hover:text-[#111214]
              transition-all
              ease-in-out
              duration-300
            "
          />

          watch film

        </div>

      </div>

    </section>
  )
}