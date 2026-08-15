import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useState } from "react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    "SHOP",
    "TECHNOLOGY",
    "ABOUT",
    "JOURNAL"
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          px-5
          pt-5
          md:px-6
          md:pt-6
          bg-linear-to-b
          from-black
          to-transparent
          backdrop-blur-[2px]
        "
      >

        {/* =========================
            MOBILE HEADER
        ========================= */}

        <div className="
          flex
          md:hidden
          items-center
          justify-between
          h-10
        ">

          {/* LOGO */}

          <div className="
            flex
            items-center
            gap-0.75
            text-[#ededed]
            text-[17px]
            font-medium
            tracking-[0.15em]
          ">
            <span>N</span>
            <span>O</span>
            <span>V</span>
            <span>A</span>
          </div>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-5">

            {/* CART */}

            <button
              className="
                text-[#ededed]
                relative
                flex
                items-center
                justify-center
                active:scale-90
                transition-transform
              "
            >
              <ShoppingBag size={19} strokeWidth={1.5} />

              <span className="
                absolute
                -top-2
                -right-2
                flex
                items-center
                justify-center
                w-3.5
                h-3.5
                rounded-full
                bg-[#A6DD03]
                text-[#121213]
                text-[8px]
                font-semibold
              ">
                0
              </span>
            </button>


            {/* MENU */}

            <button
              onClick={() => setIsMenuOpen(true)}
              className="
                text-[#ededed]
                flex
                items-center
                justify-center
                active:scale-90
                transition-transform
              "
              aria-label="Open menu"
            >
              <Menu
                size={23}
                strokeWidth={1.5}
              />
            </button>

          </div>

        </div>


        {/* =========================
            DESKTOP HEADER
        ========================= */}

        <div className="
          hidden
          md:flex
          flex-row
          justify-between
        ">

          {/* LOGO */}

          <div className="
            flex
            flex-row
            gap-4
            text-[#ededed]
            text-lg
            font-medium
            items-center
          ">
            <span>N</span>
            <span>O</span>
            <span>V</span>
            <span>A</span>
          </div>


          {/* NAVIGATION */}

          <div className="
            flex
            flex-row
            gap-10
            font-light
            text-[#ededed]
            text-sm
            z-50
          ">

            {navItems.map((item) => (

              <button
                key={item}
                className="
                  relative
                  cursor-pointer
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-px
                  after:w-full
                  after:bg-[#a6dd03]
                  after:scale-x-0
                  after:origin-left
                  after:transition-transform
                  after:duration-300
                  hover:text-[#a6dd03]
                  hover:after:scale-x-100
                "
              >
                {item}
              </button>

            ))}

          </div>


          {/* CART */}

          <button
            className="
              text-[#ededed]
              text-sm
              font-light
              hover:scale-95
              px-2
              py-2
              transition-all
              ease-in-out
              duration-300
            "
          >
            CART (0)
          </button>

        </div>

      </motion.nav>


      {/* =================================================
          MOBILE FULL SCREEN MENU
      ================================================= */}

      <AnimatePresence>

        {isMenuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="
              fixed
              inset-0
              z-100
              bg-[#080809]
              md:hidden
            "
          >

            {/* =========================
                MENU HEADER
            ========================= */}

            <div className="
              flex
              items-center
              justify-between
              px-5
              pt-5
            ">

              {/* LOGO */}

              <div className="
                flex
                items-center
                gap-0.75
                text-[#ededed]
                text-[17px]
                font-medium
                tracking-[0.15em]
              ">
                <span>N</span>
                <span>O</span>
                <span>V</span>
                <span>A</span>
              </div>


              {/* CLOSE */}

              <button
                onClick={() => setIsMenuOpen(false)}
                className="
                  text-[#ededed]
                  active:scale-90
                  transition-transform
                "
                aria-label="Close menu"
              >
                <X
                  size={24}
                  strokeWidth={1.5}
                />
              </button>

            </div>


            {/* =========================
                MENU ITEMS
            ========================= */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.15
                  }
                }
              }}
              className="
                flex
                flex-col
                px-7
                pt-28
              "
            >

              {navItems.map((item, index) => (

                <motion.button
                  key={item}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -25
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    py-5
                    text-left
                    border-b
                    border-white/6
                  "
                >

                  <span className="
                    text-[#ededed]
                    text-[2rem]
                    font-medium
                    tracking-[-0.04em]
                    transition-colors
                    duration-300
                    group-hover:text-[#A6DD03]
                  ">
                    {item}
                  </span>


                  <span className="
                    text-[#71717a]
                    text-xs
                    font-light
                  ">
                    0{index + 1}
                  </span>

                </motion.button>

              ))}

            </motion.div>


            {/* =========================
                SOCIAL LINKS
            ========================= */}

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
                duration: 0.5
              }}
              className="
                absolute
                bottom-8
                left-7
                right-7
              "
            >

              <div className="
                flex
                gap-6
                text-[#71717a]
                text-xs
              ">

                <button className="hover:text-[#A6DD03] transition-colors">
                  INSTAGRAM
                </button>

                <button className="hover:text-[#A6DD03] transition-colors">
                  TWITTER
                </button>

                <button className="hover:text-[#A6DD03] transition-colors">
                  YOUTUBE
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}