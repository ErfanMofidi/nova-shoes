import whiteShoe from '../assets/display/white.webp'
import blackShoe from '../assets/display/black.webp'
import oliveShoe from '../assets/display/olive.webp'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Display = () => {

  const [isAnimating, setIsAnimating] = useState(false);

  const animate = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  const [displayShoe, setDisplayShoe] = useState("white")
  const whiteSlide = displayShoe === "white" ? 15 : isAnimating ? 99 : -99;
  const blackSlide = displayShoe === "black" ? 15 : isAnimating ? 99 : -99;
  const oliveSlide = displayShoe === "olive" ? 15 : isAnimating ? 99 : -99;

  const [previousShoe, setPreviousShoe] = useState("white");



  const shoes = {
    white: whiteShoe,
    black: blackShoe,
    olive: oliveShoe,
  }

  const changeShoe = (shoe: string) => {
    setDisplayShoe(shoe)
    setPreviousShoe(displayShoe);
  }

  return (
    <motion.section
      id="display"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      className="
        relative
        overflow-hidden
        bg-[#0b0b0c]
        border-b
        border-[#71717a]
        scroll-mt-20
      "
    >

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="
        md:hidden
        px-5
        pt-14
        pb-10
      ">

        {/* PRODUCT TITLE */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 25
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
        >

          <p className="
            text-[#71717a]
            text-xs
            tracking-[0.2em]
            uppercase
            mb-4
          ">
            NOVA ONE
          </p>


          <h2 className="
            text-[#ededed]
            text-[clamp(2.8rem,13vw,4rem)]
            leading-[0.86]
            tracking-[-0.055em]
            font-medium
          ">
            LIGHTER.
            <br />
            FASTER.
            <br />
            STRONGER.
          </h2>


          <div className="
            flex
            items-center
            justify-between
            mt-5
          ">

            <p className="
              text-[#ededed]
              text-sm
            ">
              ${displayShoe === "white" ? "139" : displayShoe === "black" ? "149" : "129"}
            </p>

            <span className="
              text-[#71717a]
              text-[10px]
              tracking-[0.15em]
              uppercase
            ">
              Performance / 02
            </span>

          </div>

        </motion.div>


        {/* =================================================
            SHOE
        ================================================= */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              scale: 0.9
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="
            relative
            h-80
            -mt-1.25
            overflow-hidden
          "
        >

          {/* subtle product glow */}

          <div className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-65
            h-25
            rounded-full
            bg-[#A6DD03]/5.5
            blur-[70px]
          " />


          <AnimatePresence mode="popLayout">

            <motion.img
              key={displayShoe}
              src={shoes[displayShoe as keyof typeof shoes]}
              alt={`${displayShoe} NOVA ONE shoe`}
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.88,
                rotate: -10
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: -6
              }}
              exit={{
                opacity: 0,
                x: -80,
                scale: 0.88,
                rotate: 4
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="
                absolute
                w-[125%]
                max-w-none
                h-auto
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                object-contain
              "
            />

          </AnimatePresence>

        </motion.div>


        {/* =================================================
            COLOR SELECTOR
        ================================================= */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="
            border-t
            border-white/8
            pt-5
          "
        >

          <div className="
            flex
            items-center
            justify-between
          ">

            <p className="
              text-[#71717a]
              text-[10px]
              tracking-[0.15em]
              uppercase
            ">
              Select color
            </p>


            <p className="
              text-[#ededed]
              text-xs
              uppercase
            ">
              {displayShoe}
            </p>

          </div>


          <div className="
            flex
            items-center
            gap-7
            mt-5
          ">

            {/* WHITE */}

            <button
              onClick={() => changeShoe("white")}
              className="flex items-center gap-2 group"
            >

              <div className={`
                h-7
                w-7
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-300
                ${displayShoe === "white"
                  ? "border-2 border-[#A6DD03]"
                  : "border border-white/10"
                }
              `}>

                <div className={`
                  h-4
                  w-4
                  rounded-full
                  ${displayShoe === "white" ? "bg-[#ededed]" : "bg-[#202226]"}`}
                 />

              </div>

              <span className="
                text-[#ededed]
                text-xs
              ">
                WHITE
              </span>

            </button>


            {/* BLACK */}

            <button
              onClick={() => changeShoe("black")}
              className="flex items-center gap-2 group"
            >

              <div className={`
                h-7
                w-7
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-300
                ${displayShoe === "black"
                  ? "border-2 border-[#A6DD03]"
                  : "border border-white/10"
                }
              `}>

                <div className={`
                  h-4
                  w-4
                  rounded-full
                  ${displayShoe === "black" ? "bg-[#ededed]" : "bg-[#202226]"}`}
                 />

              </div>

              <span className="
                text-[#ededed]
                text-xs
              ">
                BLACK
              </span>

            </button>


            {/* OLIVE */}

            <button
              onClick={() => changeShoe("olive")}
              className="flex items-center gap-2 group"
            >

              <div className={`
                h-7
                w-7
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-300
                ${displayShoe === "olive"
                  ? "border-2 border-[#A6DD03]"
                  : "border border-white/10"
                }
              `}>

                <div className={`
                  h-4
                  w-4
                  rounded-full
                  ${displayShoe === "olive" ? "bg-[#ededed]" : "bg-[#202226]"}`}
                 />

              </div>

              <span className="
                text-[#ededed]
                text-xs
              ">
                OLIVE
              </span>

            </button>

          </div>

        </motion.div>


        {/* =================================================
            CTA
        ================================================= */}

        <motion.button
          variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="
            mt-7
            w-full
            py-3.5
            px-5
            rounded-xl
            border
            border-[#71717a]
            text-[#ededed]
            text-sm
            flex
            items-center
            justify-center
            gap-2
            hover:bg-[#A6DD03]
            hover:text-[#0b0b0c]
            hover:border-[#A6DD03]
            active:scale-[0.98]
            transition-all
            duration-300
            group
          "
        >

          <span>VIEW DETAILS</span>

          <ArrowRight
            size={16}
            className="
              group-hover:translate-x-1
              transition-transform
            "
          />

        </motion.button>

      </div>


      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <motion.div
        id="display"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="hidden h-[clamp(500px,70vh,90vh)] md:flex flex-row justify-between overflow-hidden"
      >

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -40
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="w-[20%] flex flex-col gap-4 py-28 pl-7 h-fit">
          <h1 className="text-[#71717a]">NOVA ONE</h1>
          <div className="flex flex-col gap-0 text-6xl text-[#ededed] font-medium">
            <h2>LIGHTER.</h2>
            <h2>FATSER.</h2>
            <h2>STRONGER.</h2>
          </div>
          <p className="text-[#ededed]">
            ${displayShoe === "white" ? "139" : displayShoe === "black" ? "149" : "129"}
          </p>
          <button className="py-2 px-4 text-[#ededed] border border-[#71717a] w-fit rounded-lg hover:bg-[#A6DD03] hover:text-[#0b0b0c] transition-all ease-in-out duration-300 cursor-pointer">
            VIEW DETAILS
          </button>
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -40
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className='h-screen w-fit overflow-x-clip relative top-[-30%] left-[0%] flex-1 flex flex-col overflow-y-hidden scroll-smooth'>
          <img style={{ top: `${whiteSlide}%` }} src={whiteShoe} alt="shoe" className={`absolute left-[4%] h-[82vh] transition-[top] ease-in-out duration-700 -rotate-6 ${displayShoe === "white" ? "z-10" : displayShoe !== "white" && previousShoe === "white" && isAnimating ? "" : "-z-10"}`} />
          <img style={{ top: `${blackSlide}%` }} src={blackShoe} alt="shoe" className={`absolute left-[4%] h-[82vh] transition-[top] ease-in-out duration-700 -rotate-6 ${displayShoe === "black" ? "z-10" : displayShoe !== "black" && previousShoe === "black" && isAnimating ? "" : "-z-10"}`} />
          <img style={{ top: `${oliveSlide}%` }} src={oliveShoe} alt="shoe" className={`absolute left-[4%] h-[82vh] transition-[top] ease-in-out duration-700 -rotate-6 ${displayShoe === "olive" ? "z-10" : displayShoe !== "olive" && previousShoe === "olive" && isAnimating ? "" : "-z-10"}`} />
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -40
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="w-[10%] text-[#ededed] flex flex-col justify-center gap-8">

          <label
            onClick={() => { changeShoe("white"); animate() }}
            htmlFor='display-white' className='flex flex-row gap-2 cursor-pointer'>
            <div className={`h-6 w-6 rounded-full ${displayShoe === "white" ? "border-2 border-[#A6DD03]" : "border-none"} flex justify-center items-center`}>
              <div className={`${displayShoe === "white" ? "bg-[#ededed]" : "bg-[#202226]"} h-4 w-4 rounded-full`} />
            </div>
            <p className="">
              WHITE
            </p>
          </label>

          <label
            onClick={() => { changeShoe("black"); animate() }}
            htmlFor='display-black' className='flex flex-row gap-2 cursor-pointer'>
            <div className={`h-6 w-6 rounded-full ${displayShoe === "black" ? "border-2 border-[#A6DD03]" : "border-none"} flex justify-center items-center`}>
              <div className={`${displayShoe === "black" ? "bg-[#ededed]" : "bg-[#202226]"} h-4 w-4 rounded-full`} />
            </div>
            <p className="">
              BLACK
            </p>
          </label>

          <label
            onClick={() => { changeShoe("olive"); animate() }}
            htmlFor='display-olive' className='flex flex-row gap-2 cursor-pointer'>
            <div className={`h-6 w-6 rounded-full ${displayShoe === "olive" ? "border-2 border-[#A6DD03]" : "border-none"} flex justify-center items-center`}>
              <div className={`${displayShoe === "olive" ? "bg-[#ededed]" : "bg-[#202226]"} h-4 w-4 rounded-full`} />
            </div>
            <p className="">
              OLIVE
            </p>
          </label>

        </motion.div>
      </motion.div>

    </motion.section>
  )
}