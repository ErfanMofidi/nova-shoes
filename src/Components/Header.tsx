export const Header = () => {
  return (
    <nav className="flex flex-row justify-between px-2 py-6 bg-linear-0 to-black from-transparent">

      <div className="flex flex-row gap-2 text-white font-medium">
        <span>N</span>
        <span>O</span>
        <span>V</span>
        <span>A</span>
      </div>

      <div className="flex flex-row gap-10 font-light text-white text-sm">
        <button className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-green-400 after:scale-x-0 after:origin-left after:transition-transform duration-200 hover:after:scale-100">
          SHOP
        </button>
        <button>TECHNOLOGY</button>
        <button>ABOUT</button>
        <button>JOURNAL</button>
      </div>

      <div className="text-white text-sm font-light">
        <button>CART (0)</button>
      </div>

    </nav>
  )
}