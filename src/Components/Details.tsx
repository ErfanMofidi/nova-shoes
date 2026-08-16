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

  const features = [
    {
      icon: lightIcon,
      title: "ULTRA LIGHT",
      description:
        "Reduced fatigue and helps you go the extra mile.",
    },
    {
      icon: cushionIcon,
      title: "RESPONSIVE CUSHION",
      description:
        "Maximum energy return with every step.",
    },
    {
      icon: carbonIcon,
      title: "CARBON PLATE",
      description:
        "Propels you forward with explosive power.",
    },
    {
      icon: breathableIcon,
      title: "BREATHABLE UPPER",
      description:
        "Keeps your feet cool and comfortable.",
    },
  ]

  return (
    <section
      className="
        w-full
        bg-[#060609]
        border-b
        border-[#71717a]
      "
    >

      {/* =================================================
          MOBILE
      ================================================= */}

      <div className="
        md:hidden
        px-5
        py-16
      ">

        {/* TITLE */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="
            text-[#ededed]
            text-[clamp(2rem,10vw,3rem)]
            leading-[0.92]
            tracking-[-0.045em]
            font-medium
            uppercase
            flex
            flex-col
            mb-12
          "
        >

          <motion.h2 variants={titleVariants}>
            ENGINEERED
          </motion.h2>

          <motion.h2
            variants={titleVariants}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            FOR EXCELLENCE
          </motion.h2>

        </motion.div>


        {/* SMALL LABEL */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
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
            mb-5
          "
        >

          <span className="
            w-1.5
            h-1.5
            rounded-full
            bg-[#A6DD03]
            "
          />

          <span className="
            text-[#71717a]
            text-[9px]
            tracking-[0.2em]
            uppercase
          ">
            NOVA ONE / TECHNOLOGY
          </span>

        </motion.div>


        {/* FEATURES */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="
            border-t
            border-white/8
          "
        >

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="
                group
                relative
                flex
                items-center
                gap-5
                py-7
                border-b
                border-white/8
              "
            >

              {/* NUMBER */}

              <span className="
                absolute
                right-0
                top-7
                text-[#71717a]/40
                text-[9px]
                tracking-wider
              ">
                0{index + 1}
              </span>


              {/* ICON */}

              <div className="
                shrink-0
                w-14
                h-14
                rounded-full
                border
                border-white/8
                flex
                items-center
                justify-center
                group-active:border-[#A6DD03]/40
                transition-colors
                duration-300
                "
              >

                <motion.img
                  src={feature.icon}
                  alt={feature.title}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 0.6,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    w-8
                    h-8
                    object-contain
                  "
                />

              </div>


              {/* TEXT */}

              <div className="
                flex
                flex-col
                gap-1.5
                pr-8
                "
              >

                <h3 className="
                  text-[#ededed]
                  text-[15px]
                  font-medium
                  uppercase
                  tracking-[-0.01em]
                ">
                  {feature.title}
                </h3>

                <p className="
                  text-[#71717a]
                  text-xs
                  leading-5
                  max-w-60
                ">
                  {feature.description}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>


      {/* =================================================
          DESKTOP
      ================================================= */}

      <div className="
        hidden
        md:flex
        w-full
        flex-col
        gap-4
        justify-center
        py-14
        "
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="
            text-[#ededed]
            text-3xl
            font-medium
            uppercase
            text-center
            w-full
            flex
            flex-col
            justify-center
          "
        >

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
          className="
            flex
            flex-row
          "
        >

          <div className="
            w-full
            flex
            flex-row
            justify-center
            "
          >

            {features.map((feature) => (

              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="
                  flex
                  flex-col
                  w-[24%]
                  items-center
                  gap-2
                  border-r
                  border-[#111214]
                  mx-auto
                "
              >

                <motion.img
                  src={feature.icon}
                  alt={feature.title}
                  className="
                    w-15
                    h-15
                    opacity-60
                  "
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 0.6,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />

                <h3 className="
                  text-[#ededed]
                  text-xl
                  uppercase
                  text-center
                ">
                  {feature.title}
                </h3>

                <p className="
                  text-[#71717a]
                  w-[60%]
                  text-center
                  text-sm
                ">
                  {feature.description}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}