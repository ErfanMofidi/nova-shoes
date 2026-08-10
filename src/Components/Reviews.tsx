import { User } from "lucide-react"
import { comments } from "../data/comments"
import { motion, type Variants } from "framer-motion"

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


  const renderReviews = comments.map(comment => {
    let reviewStars = "";
    for (let i = 1; i <= comment.rate; i++) {
      reviewStars += "⭐";
    }
    const [name, lastname] = comment.name.split(" ");
    const reviewerName = `${name} ${lastname[0]}`

    return (
      <motion.div
        key={comment.name}
        variants={reviewCard}
        className="text-[#ededed] bg-[#111214] py-6 px-4 flex flex-col gap-10 rounded-lg border border-[#060609]"
      >

        <div>
          {reviewStars}
        </div>

        <p className="text-xl">
          "{comment.comment}."
        </p>

        <p className="pt-4">
          - {reviewerName}.
        </p>
      </motion.div>
    )
  })


  return (
    <div className="flex flex-row gap-8 bg-[#060609] px-14 py-12 border-t border-[#71717a]">

      <div className="flex flex-col gap-5 lg:w-[20%]">

        <h3 className="text-[#ededed] text-4xl font-medium uppercase">
          trusted by thousands
        </h3>

        <p className="text-lg text-[#71717a]">
          Join a community that's always moving forward.
        </p>

        <div className="flex flex-row items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }} className="bg-[#ededed] border-3 border-[#060609] rounded-full p-1">
            <User size={30} className="text-[#060609]" />
          </motion.div>
          {
            [0, 1, 2, 3].map(() => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }} className="bg-[#ededed] border-3 border-[#060609] rounded-full p-1 -ml-3">
                <User size={30} className="text-[#060609]" />
              </motion.div>
            ))
          }

        </div>

        <div className="flex flex-row gap-2 text-lg">
          <span className="text-[#A6DD03]">
            4.9/5
          </span>
          <span className="text-[#71717a] uppercase">
            (2.4k reviews)
          </span>
        </div>

      </div>

      <motion.div
        variants={reviewsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }} className="flex flex-row gap-6 py-2 items-center h-full">
        {renderReviews}
      </motion.div>

    </div >
  )
}