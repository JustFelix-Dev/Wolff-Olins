import insideBg from "../assets/inside.svg";
import thinkingBg from "../assets/thinking.svg";
import clientBg from "../assets/client.svg";

const FeaturedCard = ({ image,type,text,subText })=>{

    const getImage = (type) => {
        switch (type) {
          case 'Inside':
            return insideBg;
          case 'Thinking':
            return thinkingBg;
          case 'Client':
            return clientBg;
          default:
            return null;
        }
      };

      const backgroundStyle = {
        backgroundImage: `url(${getImage(type)})`,
        backgroundCover: 'cover',
        backgroundRepeat: 'no-repeat',
       
      }
  return (
    <div className="w-full max-w-[280px]">
      <div className="image-container relative overflow-hidden">
    <div className="marquee-text w-full h-full opacity-0 bg-[#FFF84B] flex items-center justify-center transition-opacity duration-300 absolute inset-0">
        <marquee direction="left"><p className="text-[40px] text-black">READ MORE</p></marquee>
    </div>
    <img src={image} alt="featured-images"/>
     </div>
       <div className="flex flex-col gap-2">
         <span style={backgroundStyle} className=" w-[126px] text-center py-1 px-2">{type}</span>
         <p className="text-[17px] font-regular text-black">{text}</p>
         <span className="text-[17px] text-[#616161] overflow-hidden text-ellipsis border w-[260px]">{subText}</span>
       </div>
    </div>
  )
}

export default FeaturedCard;
