import heroShoe from '../assets/hero-section/hero-shoe.webp'
import heroShoe2 from '../assets/hero-section/hero-shoe-2.webp'
import heroShoe3 from '../assets/hero-section/hero-shoe-3.webp'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Hero = () => {
  const [carouselSlide, setCarouselSlide] = useState<number>(0)

  const shoes = [heroShoe, heroShoe2, heroShoe3]

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselSlide(prev => (prev + 1) % 3)
    }, 4000)

    return () => clearTimeout(timer)
  }, [carouselSlide])

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const textItem = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  }

  const slide1 = carouselSlide === 0 ? 15 : carouselSlide === 1 ? 99 : -99;
  const slide2 = carouselSlide === 1 ? 15 : carouselSlide === 2 ? 99 : -99;
  const slide3 = carouselSlide === 2 ? 15 : carouselSlide === 0 ? 99 : -99;

  return (
    <section id="hero">

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="md:hidden relative min-h-[92svh] overflow-hidden px-5 pt-28 pb-8 flex flex-col">

        {/* subtle background glow */}
        <div className="absolute pointer-events-none inset-0 overflow-hidden">
          <div className="
            absolute
            w-125
            h-125
            rounded-full
            bg-[#A6DD03]/5
            blur-[120px]
            -top-40
            -right-52
          " />

          <div className="
            absolute
            w-75
            h-75
            rounded-full
            bg-white/3
            blur-[100px]
            top-[35%]
            -left-40
          " />
        </div>


        {/* ===============================
            HERO TEXT
        =============================== */}

        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col"
        >

          <motion.span
            variants={textItem}
            className="
              text-[#A6DD03]
              text-[10px]
              tracking-[0.22em]
              uppercase
              font-medium
              mb-4
            "
          >
            Engineered for movement
          </motion.span>


          <motion.h1
            variants={textItem}
            className="
              text-[#ededed]
              text-[clamp(3.2rem,15vw,5rem)]
              leading-[0.88]
              tracking-[-0.055em]
              font-medium
              max-w-90
            "
          >
            MOVE
            <br />
            WITHOUT
            <br />
            LIMITS.
          </motion.h1>


          <motion.div
            variants={textItem}
            className="
              mt-5
              text-[#71717a]
              text-sm
              leading-6
            "
          >
            <p>Engineered for performance.</p>
            <p>Designed for everyday.</p>
          </motion.div>


          <motion.button
            variants={textItem}
            className="
              mt-6
              text-[#121213]
              px-4
              py-3.5
              font-medium
              bg-[#A6DD03]
              w-fit
              rounded-xl
              flex
              items-center
              gap-2
              text-sm
              cursor-pointer
              active:scale-95
              transition-transform
            "
          >
            <span>EXPLORE COLLECTION</span>

            <ArrowRight
              size={18}
              className="-rotate-45"
            />
          </motion.button>

        </motion.div>


        {/* ===============================
            SHOE
        =============================== */}

        <div className="
          relative
          flex-1
          min-h-85
          -mt-2.5
        ">

          {/* shadow / glow underneath shoe */}
          <motion.div
            key={`glow-${carouselSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              absolute
              w-[75%]
              h-25
              rounded-full
              bg-black
              blur-3xl
              bottom-[15%]
              left-1/2
              -translate-x-1/2
            "
          />

          <AnimatePresence mode="popLayout">

            <motion.img
              key={carouselSlide}
              src={shoes[carouselSlide]}
              alt="NOVA sneaker"
              initial={{
                opacity: 0,
                x: 80,
                rotate: -12,
                scale: 0.85
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: -4,
                scale: 1
              }}
              exit={{
                opacity: 0,
                x: -80,
                rotate: 8,
                scale: 0.9
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="
                absolute
                w-full
                max-w-none
                h-auto
                left-1/2
                top-[50%]
                -translate-x-1/2
                -translate-y-1/2
                object-contain
              "
            />

          </AnimatePresence>

        </div>


        {/* ===============================
            FEATURED INFO
        =============================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.6,
            duration: 0.6
          }}
          className="
            relative
            z-10
            flex
            items-end
            justify-between
            -mt-2.5
          "
        >

          <div>

            <p className="
              text-[#A6DD03]
              text-[9px]
              tracking-[0.2em]
              uppercase
              mb-2
            ">
              Featured
            </p>

            <h2 className="
              text-[#ededed]
              text-xl
              font-medium
              tracking-tight
            ">
              NOVA ONE
            </h2>

            <p className="
              text-[#71717a]
              text-xs
              mt-1
            ">
              The future of everyday performance.
            </p>

          </div>


          <button
            className="
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/3
              flex
              items-center
              justify-center
              active:scale-90
              transition-transform
            "
            onClick={() => setCarouselSlide(prev => (prev + 1) % 3)}
          >
            <ArrowRight
              size={19}
              className="-rotate-45 text-[#ededed]"
            />
          </button>

        </motion.div>


        {/* ===============================
            CAROUSEL INDICATOR
        =============================== */}

        <div className="
          flex
          items-center
          justify-center
          gap-2
          mt-6
        ">

          {[0, 1, 2].map((index) => (

            <button
              key={index}
              onClick={() => setCarouselSlide(index)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500
                ${carouselSlide === index
                  ? 'w-7 bg-[#A6DD03]'
                  : 'w-1.5 bg-white/20'
                }
              `}
            />

          ))}

        </div>

      </div>


      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div className="
        hidden
        md:flex
        pt-48
        flex-row
        px-16
        h-[clamp(750px,93vh,100vh)]
      ">
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col flex-nowrap gap-8"
          >

            <motion.h1 variants={textItem} className="text-[#ededed] text-8xl font-medium max-w-96">
              MOVE WITHOUT LIMITS.
            </motion.h1>

            <motion.div variants={textItem} className='text-md text-[#71717a]'>
              <p>
                Engineered for performance.
              </p>

              <p>
                Designed for everyday
              </p>
            </motion.div>

            <motion.button
              variants={textItem} id='explore-btn' className='text-[#121213] px-4 py-3 font-medium bg-[#A6DD03] w-fit rounded-xl flex flex-row gap-2 flex-nowrap items-center cursor-pointer'>
              <p>EXPLORE COLLECTION</p>
              <ArrowRight size={20} className='-rotate-45 relative top-0' />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }} className='h-screen w-fit overflow-x-clip relative top-[-30%] left-[0%] flex-1 flex flex-col overflow-y-hidden scroll-smooth'>
            <motion.img
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.9,
                rotate: -8
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }} style={{ top: `${slide1}%` }} src={heroShoe} alt="shoe" className={`absolute left-[13.5%]  h-[clamp(420px,70vh,700px)] transition-[top] ease-in-out duration-700 ${carouselSlide === 2 && "-z-10"}`} />
            <motion.img
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.9,
                rotate: -8
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }} style={{ top: `${slide2}%` }} src={heroShoe2} alt="shoe" className={`absolute left-[13.5%] h-[clamp(420px,70vh,700px)] transition-[top] ease-in-out duration-700 ${carouselSlide === 0 && "-z-10"}`} />
            <motion.img
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.9,
                rotate: -8
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }} style={{ top: `${slide3}%` }} src={heroShoe3} alt="shoe" className={`absolute left-[13.5%] h-[clamp(420px,70vh,700px)] transition-[top] ease-in-out duration-700 ${carouselSlide === 1 && "-z-10"}`} />
          </motion.div>

          <div className={`flex ${carouselSlide === 0 ? "flex-col" : "flex-col-reverse justify-end"} ml-auto mt-32 text-[#ededed] text-xs font-extralight text-center`}>
            <span className='mx-auto my-2 transition-all ease-in-out duration-700'>
              0{carouselSlide === 0 ? carouselSlide + 1 : carouselSlide === 2 ? 1 : carouselSlide + 2}
            </span>

            <div className={`${carouselSlide === 0 ? "h-28" : "h-0"} w-0.5 bg-gray-300 rounded-xl transition-all ease-in-out duration-700 mx-auto`}></div>
            <div className={`${carouselSlide === 1 ? "h-28" : "h-0"} w-0.5 bg-gray-500 rounded-xl transition-all ease-in-out duration-700 mx-auto`}></div>
            <div className={`${carouselSlide === 2 ? "h-28" : "h-0"} w-0.5 bg-gray-700 rounded-xl transition-all ease-in-out duration-700 mx-auto`}></div>
            <span className='mx-auto my-2 transition-all ease-in-out duration-700'>
              0{carouselSlide === 0 ? carouselSlide + 2 : carouselSlide + 1}
            </span>
          </div>


      </div>

    </section>
  )
}