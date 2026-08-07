import { Play } from "lucide-react"

export const Explore = () =>{
  return (
    <div id="explore" className="explore flex flex-col gap-4 h-[50vh] w-full py-20 px-14">

      <div className="flex flex-col text-[#ededed] text-6xl font-medium uppercase">
        <h1>run.</h1>
        <h1>explore</h1>
        <h1>be more</h1>
      </div>

      <div className="text-[#ededed] flex flex-row gap-2 items-center text-xl w-fit cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out duration-300 group">
        <Play size={35} className="border border-[#a6dd03] group-hover:bg-[#a6dd03] rounded-full p-2 fill-[#ededed] group-hover:fill-[#111214] group-hover:text-[#111214] transition-all ease-in-out duration-300"/>
        watch film
      </div>

    </div>
  )
}