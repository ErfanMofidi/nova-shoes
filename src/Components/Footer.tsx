export const Footer = () => {
  return (
    <div className="bg-[#060609] border-t border-[#71717a] py-12 px-14 flex flex-row justify-between items-center">

      <div className="flex flex-col gap-2">

        <div className="flex flex-row gap-2 text-[#ededed] text-lg font-medium items-center">
          <span>N</span>
          <span>O</span>
          <span>V</span>
          <span>A</span>
        </div>

        <p className="text-[#71717a] text-sm">
          © 2026 NOVA, All rights reserved.
        </p>

      </div>

      <div className="flex flex-row gap-8">

        <button className="text-[#ededed] uppercase px-4 py-2">
          shop
        </button>
        
        <button className="text-[#ededed] uppercase px-4 py-2">
          technology
        </button>
        
        <button className="text-[#ededed] uppercase px-4 py-2">
          about
        </button>
        
        <button className="text-[#ededed] uppercase px-4 py-2">
          journal
        </button>

      </div>
      
      <div className="flex flex-row gap-8">

        <button className="text-[#ededed] uppercase px-4 py-2">
          instagram
        </button>
        
        <button className="text-[#ededed] uppercase px-4 py-2">
          twitter
        </button>
        
        <button className="text-[#ededed] uppercase px-4 py-2">
          youtube
        </button>

      </div>

    </div>
  )
}