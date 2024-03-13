import FeaturedCard from "./FeaturedCard"

const FeaturedNews = () => {
  return (
    <div className="w-full max-w-[1225px] mx-auto flex flex-col gap-8" >
        <span className="text-[32.81px] text-black border-t-[1px] border-[#000] flex">Featured News</span>
         <div className="flex flex-wrap gap-4">
           <FeaturedCard/>
         </div>
    </div>
  )
}

export default FeaturedNews
