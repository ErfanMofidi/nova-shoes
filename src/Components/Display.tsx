import whiteShoe from '../assets/display/white.png'
import blackShoe from '../assets/display/black.png'
import oliveShoe from '../assets/display/olive.png'
import { useState } from 'react'


export const Display = () => {
  const [displayShoe, setDisplayShoe] = useState("white");
  const [previousShoe, setPreviousShoe] = useState("white");

  const changeShoe = (shoe: string) => {
    setPreviousShoe(displayShoe);
    setDisplayShoe(shoe);
  };

  const [isAnimating, setIsAnimating] = useState(false);

  const animate = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  const whiteSlide = displayShoe === "white" ? 15 : isAnimating ? 99 : -99;
  const blackSlide = displayShoe === "black" ? 15 : isAnimating ? 99 : -99;
  const oliveSlide = displayShoe === "olive" ? 15 : isAnimating ? 99 : -99;

  return (
    <div id="display" className="h-[70vh] flex flex-row justify-between overflow-hidden">

      <div className="w-[20%] flex flex-col gap-4 py-28 pl-7 h-fit">
        <h1 className="text-[#71717a]">NOVA ONE</h1>
        <div className="flex flex-col gap-0 text-6xl text-[#ededed] font-medium">
          <h2>LIGHTER.</h2>
          <h2>FATSER.</h2>
          <h2>STRONGER.</h2>
        </div>
        <p className="text-[#ededed]">
          $149.00
        </p>
        <button className="py-2 px-4 text-[#ededed] border border-[#71717a] w-fit rounded-lg hover:bg-[#A6DD03] hover:text-[#0b0b0c] transition-all ease-in-out duration-200 cursor-pointer">
          VIEW DETAILS
        </button>
      </div>

      <div className='h-screen w-fit overflow-x-clip relative top-[-30%] left-[0%] flex-1 flex flex-col overflow-y-hidden scroll-smooth'>
        <img style={{ top: `${whiteSlide}%` }} src={whiteShoe} alt="shoe" className={`absolute left-[4%] h-[82vh] transition-[top] ease-in-out duration-700 -rotate-6 ${displayShoe === "white" ? "z-10" : displayShoe !== "white" && previousShoe === "white" && isAnimating ? "" : "-z-10"}`} />
        <img style={{ top: `${blackSlide}%` }} src={blackShoe} alt="shoe" className={`absolute left-[4%] h-[82vh] transition-[top] ease-in-out duration-700 -rotate-6 ${displayShoe === "black" ? "z-10" : displayShoe !== "black" && previousShoe === "black" && isAnimating ? "" : "-z-10"}`} />
        <img style={{ top: `${oliveSlide}%` }} src={oliveShoe} alt="shoe" className={`absolute left-[4%] h-[82vh] transition-[top] ease-in-out duration-700 -rotate-6 ${displayShoe === "olive" ? "z-10" : displayShoe !== "olive" && previousShoe === "olive" && isAnimating ? "" : "-z-10"}`} />
      </div>

      <div className="w-[10%] text-[#ededed] flex flex-col justify-center gap-8">

        <label
          onClick={() => {changeShoe("white");animate()}}
          htmlFor='display-white' className='flex flex-row gap-2 cursor-pointer'>
          <div className={`h-6 w-6 rounded-full ${displayShoe === "white" ? "border-2 border-[#A6DD03]" : "border-none"} flex justify-center items-center`}>
            <div className={`${displayShoe === "white" ? "bg-[#ededed]" : "bg-[#202226]"} h-4 w-4 rounded-full`} />
          </div>
          <p className="">
            WHITE
          </p>
        </label>

        <label
          onClick={() => {changeShoe("black");animate()}}
          htmlFor='display-black' className='flex flex-row gap-2 cursor-pointer'>
          <div className={`h-6 w-6 rounded-full ${displayShoe === "black" ? "border-2 border-[#A6DD03]" : "border-none"} flex justify-center items-center`}>
            <div className={`${displayShoe === "black" ? "bg-[#ededed]" : "bg-[#202226]"} h-4 w-4 rounded-full`} />
          </div>
          <p className="">
            BLACK
          </p>
        </label>

        <label
          onClick={() => {changeShoe("olive");animate()}}
          htmlFor='display-olive' className='flex flex-row gap-2 cursor-pointer'>
          <div className={`h-6 w-6 rounded-full ${displayShoe === "olive" ? "border-2 border-[#A6DD03]" : "border-none"} flex justify-center items-center`}>
            <div className={`${displayShoe === "olive" ? "bg-[#ededed]" : "bg-[#202226]"} h-4 w-4 rounded-full`} />
          </div>
          <p className="">
            OLIVE
          </p>
        </label>

      </div>
    </div>
  )
}