import { motion } from "framer-motion"

const navLinks = [
  "shop",
  "technology",
  "about",
  "journal",
]

const socialLinks = [
  "instagram",
  "twitter",
  "youtube",
]

const linkClass = `
  text-[#ededed]
  uppercase
  relative
  text-sm
  tracking-wider
  transition-colors
  duration-300
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-px
  after:w-0
  after:bg-[#A6DD03]
  after:transition-all
  after:duration-300
  hover:text-[#A6DD03]
  hover:after:w-full

  active:text-[#a6dd03]
  active:after:w-full
`

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        bg-[#060609]
        border-t
        border-[#71717a]
      "
    >

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="
        md:hidden
        px-5
        py-12
        flex
        flex-col
        "
      >

        {/* BRAND */}

        <div className="
          flex
          flex-col
          gap-3
          "
        >

          <div className="
            flex
            flex-row
            gap-1
            text-[#ededed]
            text-3xl
            font-medium
            tracking-[0.08em]
            "
          >
            <span>N</span>
            <span>O</span>
            <span>V</span>
            <span>A</span>
          </div>

          <p className="
            text-[#71717a]
            text-[10px]
            uppercase
            tracking-[0.15em]
            "
          >
            Engineered for movement.
          </p>

        </div>


        {/* MAIN NAV */}

        <div className="
          mt-12
          grid
          grid-cols-2
          gap-y-7
          gap-x-8
          w-full
          "
        >

          {navLinks.map((link) => (
            <button
              key={link}
              className={`
                ${linkClass}
                w-fit
                px-0
                py-1
              `}
            >
              {link}
            </button>
          ))}

        </div>


        {/* DIVIDER */}

        <div className="
          w-full
          h-px
          bg-[#71717a]/30
          mt-12
          mb-8
        " />


        {/* SOCIAL */}

        <div className="
          flex
          flex-col
          gap-5
          "
        >

          <span className="
            text-[#71717a]
            text-[9px]
            uppercase
            tracking-[0.2em]
            "
          >
            Follow NOVA
          </span>

          <div className="
            grid
            grid-cols-2
            gap-y-6
            "
          >

            {socialLinks.map((link) => (
              <button
                key={link}
                className={`
                  ${linkClass}
                  w-fit
                  px-0
                  py-1
                `}
              >
                {link}
              </button>
            ))}

          </div>

        </div>


        {/* BOTTOM */}

        <div className="
          mt-14
          flex
          flex-row
          justify-between
          items-end
          gap-6
          "
        >

          <p className="
            text-[#71717a]
            text-[10px]
            uppercase
            tracking-[0.12em]
            leading-5
            "
          >
            © 2026 NOVA
            <br />
            All rights reserved.
          </p>


          <span className="
            text-[#A6DD03]
            text-[9px]
            uppercase
            tracking-[0.2em]
            "
          >
            Move.
          </span>

        </div>

      </div>


      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div className="
        hidden
        md:flex
        py-12
        px-14
        flex-row
        justify-between
        items-center
        "
      >

        {/* BRAND */}

        <div className="
          flex
          flex-col
          gap-2
          "
        >

          <div className="
            flex
            flex-row
            gap-2
            text-[#ededed]
            text-lg
            font-medium
            items-center
            "
          >
            <span>N</span>
            <span>O</span>
            <span>V</span>
            <span>A</span>
          </div>

          <p className="
            text-[#71717a]
            text-sm
            "
          >
            © 2026 NOVA, All rights reserved.
          </p>

        </div>


        {/* NAV */}

        <div className="
          flex
          flex-row
          gap-8
          "
        >

          {navLinks.map((link) => (
            <button
              key={link}
              className={`${linkClass} px-4 py-2`}
            >
              {link}
            </button>
          ))}

        </div>


        {/* SOCIAL */}

        <div className="
          flex
          flex-row
          gap-8
          "
        >

          {socialLinks.map((link) => (
            <button
              key={link}
              className={`${linkClass} px-4 py-2`}
            >
              {link}
            </button>
          ))}

        </div>

      </div>

    </motion.footer>
  )
}