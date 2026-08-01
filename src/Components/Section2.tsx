import { ArrowRight } from 'lucide-react'



export const Section2 = () => {
  return (
    <div className="border border-[#71717a] border-l-0 bg-[#111214] flex flex-row max-h-[50vh] min-h-fit overflow-hidden">
      <div className="w-[33%] bg-[#0b0b0c] pl-8 py-16 flex flex-col gap-8">

        <h2 className="text-[#ededed] text-5xl font-medium w-[61%]">
          BUILT FOR EVERY RUN.
        </h2>

        <p className="text-[#71717a] text-sm w-[61%]">
          NOVA combines cutting-edge technology with minimalist design to deliver unmatched comfort, energy return, and style.
        </p>

        <button className='text-[#ededed] flex flex-row gap-2 items-center w-fit cursor-pointer hover:text-[#A6DD03] transition-all ease-in duration-200 group'>
          <p>LEARN MORE</p>
          <ArrowRight size={15} className='relative top-0 group-hover:ml-2 transition-all ease-in-out duration-200' />
        </button>
      </div>

      <div id='section2-shoe-container' className="w-[67%] border-l border-[#71717a] z-20">
      </div>
    </div>
  )
}