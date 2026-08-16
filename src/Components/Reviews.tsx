import { User, ArrowRight } from "lucide-react"
import { comments } from "../data/comments"
import { motion, type Variants } from "framer-motion"
import { useRef, useState } from "react"

const reviewsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const reviewCard: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const Reviews = () => {


  const reviewsContainerRef = useRef<HTMLDivElement>(null)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const swipeToNext = () => {
    const container = reviewsContainerRef.current

    if (!container) return

    const card = container.querySelector<HTMLElement>("[data-review-card]")

    if (!card) return

    const cardStyle = window.getComputedStyle(card)
    const cardMarginRight = parseFloat(cardStyle.marginRight) || 0

    const cardWidth = card.offsetWidth
    const gap = 16 // gap-4

    const scrollAmount = cardWidth + gap + cardMarginRight

    const maxScroll =
      container.scrollWidth - container.clientWidth

    const nextPosition = Math.min(
      container.scrollLeft + scrollAmount,
      maxScroll
    )

    container.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    })

    setIsAtEnd(nextPosition >= maxScroll - 2)
  }



  const renderReviews = comments.map((comment, index) => {

    const reviewStars = "★".repeat(comment.rate)

    const [name, lastname] = comment.name.split(" ")
    const reviewerName = `${name} ${lastname?.[0] || ""}`

    return (
      <motion.div
        key={`${comment.name}-${index}`}
        variants={reviewCard}
        data-review-card
        className="
          shrink-0
          w-[82vw]
          max-w-85
          min-h-67.5
          text-[#ededed]
          bg-[#111214]
          p-5
          flex
          flex-col
          justify-between
          rounded-xl
          border
          border-white/6
          snap-start
        "
      >

        {/* TOP */}

        <div className="
          flex
          items-center
          justify-between
        ">

          <span className="
            text-[#A6DD03]
            text-sm
            tracking-[0.15em]
          ">
            {reviewStars}
          </span>

          <span className="
            text-[#71717a]
            text-[10px]
          ">
            0{index + 1}
          </span>

        </div>


        {/* REVIEW */}

        <p className="
          text-[18px]
          leading-7
          tracking-[-0.01em]
          text-[#ededed]
        ">
          "{comment.comment}."
        </p>


        {/* REVIEWER */}

        <div className="
          flex
          items-center
          gap-3
          pt-5
          border-t
          border-white/8
          "
        >

          <div className="
            w-9
            h-9
            rounded-full
            bg-[#ededed]
            flex
            items-center
            justify-center
          ">

            <User
              size={19}
              className="text-[#060609]"
            />

          </div>

          <div className="flex flex-col">

            <span className="
              text-sm
              text-[#ededed]
            ">
              {reviewerName}.
            </span>

            <span className="
              text-[10px]
              text-[#71717a]
              uppercase
              tracking-[0.12em]
            ">
              Verified runner
            </span>

          </div>

        </div>

      </motion.div>
    )
  })


  return (
    <section
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
        py-14
      ">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            px-5
          "
        >

          <div className="
            flex
            items-start
            justify-between
            gap-6
            "
          >

            <div className="flex flex-col gap-4">

              <span className="
                flex
                items-center
                gap-2
                text-[#71717a]
                text-[9px]
                tracking-[0.2em]
                uppercase
                "
              >

                <span className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#A6DD03]
                  "
                />

                Community
              </span>


              <h2 className="
                text-[#ededed]
                text-[clamp(2.3rem,11vw,3.5rem)]
                leading-[0.9]
                tracking-tighter
                font-medium
                uppercase
                "
              >
                Trusted by
                <br />
                thousands
              </h2>

            </div>


            {/* RATING */}

            <div className="
              flex
              flex-col
              items-end
              pt-1
              shrink-0
              "
            >

              <span className="
                text-[#A6DD03]
                text-lg
                font-medium
              ">
                4.9/5
              </span>

              <span className="
                text-[#71717a]
                text-[9px]
                uppercase
                tracking-[0.12em]
                whitespace-nowrap
              ">
                2.4K reviews
              </span>

            </div>

          </div>


          <p className="
            text-[#71717a]
            text-sm
            leading-6
            mt-5
            max-w-75
          ">
            Join a community that's always moving forward.
          </p>


          {/* USERS */}

          <div className="
            flex
            items-center
            mt-6
            "
          >

            {[0, 1, 2, 3, 4].map((_, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="
                  w-9
                  h-9
                  bg-[#ededed]
                  border-2
                  border-[#060609]
                  rounded-full
                  p-1
                  flex
                  items-center
                  justify-center
                  -ml-2
                  first:ml-0
                "
              >

                <User
                  size={18}
                  className="text-[#060609]"
                />

              </motion.div>

            ))}

            <span className="
              ml-3
              text-[#71717a]
              text-xs
              "
            >
              +2.4K
            </span>

          </div>

        </motion.div>


        {/* REVIEW RAIL */}

        <motion.div
          ref={reviewsContainerRef}
          variants={reviewsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            flex
            flex-row
            gap-4
            overflow-x-auto
            overflow-y-hidden
            mt-10
            px-5
            pb-4
            snap-x
            snap-mandatory
            scrollbar-hide
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {renderReviews}

        </motion.div>


        {/* SWIPE INDICATOR */}

        <button
          onClick={swipeToNext}
          disabled={isAtEnd}
          className="
            px-5
            mt-2
            w-full
            flex
            items-center
            justify-between
            cursor-pointer
            disabled:cursor-default
            group
          "
        >

          <div className="
            flex
            items-center
            gap-2
          ">

            <span className="
              block
              w-10
              h-px
              bg-[#A6DD03]
              group-disabled:bg-[#71717a]/40
              transition-colors
              duration-300
              "
            />

            <span className="
            text-[#71717a]
              text-[9px]
              uppercase
              tracking-[0.15em]
              group-hover:text-[#ededed]
              transition-colors
              duration-300
              "
            >
              {isAtEnd ? "End of reviews" : "Swipe to explore"}
            </span>

          </div>

          <ArrowRight
            size={14}
            className={`
            text-[#71717a]
              transition-all
              duration-300
              ${isAtEnd
                ? "opacity-30"
                : "group-hover:text-[#A6DD03] group-hover:translate-x-1"
              }
  `}
          />

        </button>

      </div>


      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div className="
        hidden
        md:flex
        flex-row
        gap-8
        bg-[#060609]
        px-14
        py-12
        "
      >

        <div className="
          flex
          flex-col
          gap-5
          lg:w-[20%]
          "
        >

          <h3 className="
            text-[#ededed]
            text-4xl
            font-medium
            uppercase
            "
          >
            trusted by thousands
          </h3>

          <p className="
            text-lg
            text-[#71717a]
            "
          >
            Join a community that's always moving forward.
          </p>

          <div className="
            flex
            flex-row
            items-center
            "
          >

            {[0, 1, 2, 3, 4].map((_, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="
                  bg-[#ededed]
                  border-3
                  border-[#060609]
                  rounded-full
                  p-1
                  -ml-3
                  first:ml-0
                "
              >

                <User
                  size={30}
                  className="text-[#060609]"
                />

              </motion.div>

            ))}

          </div>

          <div className="
            flex
            flex-row
            gap-2
            text-lg
            "
          >

            <span className="text-[#A6DD03]">
              4.9/5
            </span>

            <span className="
              text-[#71717a]
              uppercase
              "
            >
              (2.4k reviews)
            </span>

          </div>

        </div>


        <motion.div
          variants={reviewsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="
            flex
            flex-row
            gap-6
            py-2
            items-center
            h-full
          "
        >

          {renderReviews}

        </motion.div>

      </div>

    </section >
  )
}