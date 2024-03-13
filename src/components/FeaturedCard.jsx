
const FeaturedCard = ({ image,text,subText })=>{
  return (
    <div>
      <div className="image-container relative">
    <div className="w-full h-full bg-[#FFF84B] opacity-0 flex items-center justify-center transition-opacity duration-300 hover:opacity-100 absolute inset-0">
        <p className="text-black font-bold">READ MORE</p>
    </div>
    <img src={image} alt="featured-images"/>
     </div>
       <div className="flex flex-col gap-2">
         <div className={''}>{}</div>
         <p>{text}</p>
         <p>{subText}</p>
       </div>
    </div>
  )
}

export default FeaturedCard;
