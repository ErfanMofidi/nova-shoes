import { User } from "lucide-react"
import { comments } from "../data/comments"

export const Reviews = () => {


  const renderReviews = comments.map(comment => {
    let reviewStars = "";
    for (let i = 1; i <= comment.rate; i++) {
      reviewStars += "⭐";
    }
    const [name, lastname] = comment.name.split(" ");
    const reviewerName = `${name} ${lastname[0]}`

    return (
      <div className="text-[#ededed] bg-[#111214] py-6 px-4 flex flex-col gap-10 rounded-lg border border-[#060609]">
        
        <div>
          {reviewStars}
        </div>

        <p className="text-xl">
          "{comment.comment}."
        </p>
        
        <p className="pt-4">
          - {reviewerName}.
        </p>
      </div>
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

          <div className="bg-[#ededed] border-3 border-[#060609] rounded-full p-1">
            <User size={30} className="text-[#060609]" />
          </div>

          <div className="bg-[#ededed] border-3 border-[#060609] rounded-full p-1 -ml-3">
            <User size={30} className="text-[#060609]" />
          </div>

          <div className="bg-[#ededed] border-3 border-[#060609] rounded-full p-1 -ml-3">
            <User size={30} className="text-[#060609]" />
          </div>

          <div className="bg-[#ededed] border-3 border-[#060609] rounded-full p-1 -ml-3">
            <User size={30} className="text-[#060609]" />
          </div>

          <div className="bg-[#ededed] border-3 border-[#060609] rounded-full p-1 -ml-3">
            <User size={30} className="text-[#060609]" />
          </div>

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

      <div className="flex flex-row gap-6 py-2 items-center h-full">
        {renderReviews}
      </div>

    </div>
  )
}