import heroShoe from '../assets/hero-section/hero-shoe.png'
import heroShoe2 from '../assets/hero-section/hero-shoe-2.png'
import heroShoe3 from '../assets/hero-section/hero-shoe-3.png'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Hero = () => {
  const [carouselSlide, setCarouselSlide] = useState<number>(0)
  const slide1 = carouselSlide === 0 ? 9.5 : carouselSlide === 1 ? 99 : -99;
  const slide2 = carouselSlide === 1 ? 9.5 : carouselSlide === 2 ? 99 : -99;
  const slide3 = carouselSlide === 2 ? 9.5 : carouselSlide === 0 ? 99 : -99;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselSlide(prev => (prev + 1) % 3);
    }, 4000);

    return () => clearTimeout(timer);
  }, [carouselSlide]);


  return (
    <div id="hero" className="mt-24 flex flex-row px-16 h-[77vh]">
      <div className="flex flex-col flex-wrap gap-8">

        <h1 className="text-[#ededed] text-7xl font-medium max-w-96">
          MOVE WITHOUT LIMITS.
        </h1>

        <div className='text-sm text-[#71717a]'>
          <p>
            Engineered for performance.
          </p>

          <p>
            Designed for everyday
          </p>
        </div>

        <button id='explore-btn' className='text-[#121213] px-4 py-3 font-medium bg-[#A6DD03] w-fit rounded-xl flex flex-row gap-2 flex-nowrap items-center cursor-pointer'>
          <p className='explore-btn-p'>EXPLORE COLLECTION</p>
          <ArrowRight size={20} className='-rotate-45 relative top-0' />
        </button>
      </div>
      <div className='h-screen w-fit overflow-x-clip relative top-[-30%] left-[0%] flex-1 flex flex-col overflow-y-hidden scroll-smooth'>
        <img style={{ top: `${slide1}%` }} src={heroShoe} alt="shoe" className={`absolute left-[13.5%]  h-[85vh] transition-[top] ease-in-out duration-700 ${carouselSlide === 2 && "-z-10"}`} />
        <img style={{ top: `${slide2}%` }} src={heroShoe2} alt="shoe" className={`absolute left-[13.5%] h-[85vh] transition-[top] ease-in-out duration-700 ${carouselSlide === 0 && "-z-10"}`} />
        <img style={{ top: `${slide3}%` }} src={heroShoe3} alt="shoe" className={`absolute left-[13.5%] h-[85vh] transition-[top] ease-in-out duration-700 ${carouselSlide === 1 && "-z-10"}`} />
      </div>

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
  )
}