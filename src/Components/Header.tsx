export const Header = () => {
  return (
    <nav className="flex flex-row justify-between px-6 py-6 bg-linear-0 to-black from-transparent z-50 sticky right-0 left-0 top-0">

      <div className="flex flex-row gap-2 text-[#ededed] font-medium items-center">
        <span>N</span>
        <span>O</span>
        <span>V</span>
        <span>A</span>
      </div>

      <div className="flex flex-row gap-10 font-light text-[#ededed] text-sm z-50">
        <button className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[#a6dd03] after:scale-x-0 after:origin-left after:transition-transform duration-200 hover:after:scale-100">
          SHOP
        </button>
        <button className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[#a6dd03] after:scale-x-0 after:origin-left after:transition-transform duration-200 hover:after:scale-100"
        >TECHNOLOGY</button>
        <button className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[#a6dd03] after:scale-x-0 after:origin-left after:transition-transform duration-200 hover:after:scale-100"
        >ABOUT</button>
        <button className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[#a6dd03] after:scale-x-0 after:origin-left after:transition-transform duration-200 hover:after:scale-100"
        >JOURNAL</button>
      </div>

      <div className="text-[#ededed] text-sm font-light hover:scale-95 px-2 py-2">
        <button>CART (0)</button>
      </div>

    </nav>
  )
}