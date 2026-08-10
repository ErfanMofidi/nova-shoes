import heroShoe from '../assets/hero-section/hero-shoe.webp'
import heroShoe2 from '../assets/hero-section/hero-shoe-2.webp'
import heroShoe3 from '../assets/hero-section/hero-shoe-3.webp'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const Hero = () => {
  const [carouselSlide, setCarouselSlide] = useState<number>(0)
  const slide1 = carouselSlide === 0 ? 15 : carouselSlide === 1 ? 99 : -99;
  const slide2 = carouselSlide === 1 ? 15 : carouselSlide === 2 ? 99 : -99;
  const slide3 = carouselSlide === 2 ? 15 : carouselSlide === 0 ? 99 : -99;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselSlide(prev => (prev + 1) % 3);
    }, 4000);

    return () => clearTimeout(timer);
  }, [carouselSlide]);


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


  return (
    <div id="hero" className="pt-48 flex flex-row px-16 h-[clamp(750px,93vh,100vh)]">
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
    </div >
  )
}