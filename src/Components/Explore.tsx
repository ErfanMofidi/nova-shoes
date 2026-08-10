import { Play } from "lucide-react"
import { motion } from "framer-motion"

export const Explore = () => {

  const lines = ["run.", "explore.", "be more."]

  return (
    <div id="explore" className="explore flex flex-col gap-4 h-[clamp(400px,40vh,50vh)] w-full py-20 px-14">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          staggerChildren: 0.1
        }}
        className="flex flex-col text-[#ededed] text-6xl font-medium uppercase"
      >
        {lines.map((line) => (
          <motion.h1
            key={line}
            variants={{
              hidden: {
                opacity: 0,
                y: 50
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }
              }
            }}
          >
            {line}
          </motion.h1>
        ))}
      </motion.div>

      <div className="text-[#ededed] flex flex-row gap-2 items-center text-xl w-fit cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out duration-300 group">
        <Play size={35} className="border border-[#a6dd03] group-hover:bg-[#a6dd03] rounded-full p-2 fill-[#ededed] group-hover:fill-[#111214] group-hover:text-[#111214] transition-all ease-in-out duration-300" />
        watch film
      </div>

    </div>
  )
}