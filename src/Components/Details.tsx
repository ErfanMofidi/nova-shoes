import lightIcon from "../assets/details/light.png"
import cushionIcon from "../assets/details/cushion.png"
import carbonIcon from "../assets/details/carbon.png"
import breathableIcon from "../assets/details/breathable.png"


export const Details = () => {
  return (
    <div className="w-full bg-[#060609] flex flex-col gap-4 justify-center py-8 border-b border-[#71717a]">
      <div className="text-[#ededed] text-3xl font-medium uppercase text-center w-full flex flex-col justify-center">
      <h2>
        engineered
      </h2>
      <h2>
        for excellence
      </h2>
      </div>
      <div className="w-full flex flex-row justify-center">

        <div className="flex flex-col w-[24%] items-center gap-2 border-r border-[#111214] mx-auto">
          <img src={lightIcon} alt="ultra light" className="w-15 h-15 opacity-60" />
          <h3 className="text-[#ededed] text-xl uppercase">
            ultra light
          </h3>
          <p className="text-[#71717a] w-[60%] text-center text-sm">
            Reduced fatigue and helps you go the extra mile.
          </p>
        </div>

        <div className="flex flex-col w-[24%] items-center gap-2 border-r border-[#111214] mx-auto">
          <img src={cushionIcon} alt="responsive cushion" className="w-15 h-15 opacity-60" />
          <h3 className="text-[#ededed] text-xl uppercase">
            responsive cushion
          </h3>
          <p className="text-[#71717a] w-[60%] text-center text-sm">
            Maximum energy return with every step.
          </p>
        </div>

        <div className="flex flex-col w-[24%] items-center gap-2 border-r border-[#111214] mx-auto">
          <img src={carbonIcon} alt="carbon plate" className="w-15 h-15 opacity-60" />
          <h3 className="text-[#ededed] text-xl uppercase">
            carbon plate
          </h3>
          <p className="text-[#71717a] w-[60%] text-center text-sm">
            Propels you forward with explosive power.
          </p>
        </div>

        <div className="flex flex-col w-[24%] items-center gap-2 mx-auto">
          <img src={breathableIcon} alt="breathable upper" className="w-15 h-15 opacity-60" />
          <h3 className="text-[#ededed] text-xl uppercase">
            breathable upper
          </h3>
          <p className="text-[#71717a] w-[60%] text-center text-sm">
            Keeps your feet cool and comfortable.
          </p>
        </div>


      </div>
    </div>
  )
}