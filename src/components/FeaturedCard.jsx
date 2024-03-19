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
          case 'Clients':
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

      const dynamicClass = (type)=>{
            if( type==='Inside'){
                return ` w-[128px] flex items-center justify-center text-center py-1 px-2`
            }
            else{
                return ` w-[128px] h-[40px]  flex items-center justify-center  text-center py-1 px-2`
            }
      }
  return (
    <div className="myWrapper w-full max-w-[280px]">
      <div className="image-container relative w-[270px] overflow-hidden">
    <div className="marquee-text w-full h-full opacity-0 bg-[#FFF84B] flex items-center justify-center transition-opacity duration-300 absolute inset-0">
        <marquee direction="left"><p className="text-[40px] text-black">READ MORE</p></marquee>
    </div>
    <img src={image} alt="featured-images"/>
     </div>
       <div className="py-2 flex flex-col gap-2">
         <span style={backgroundStyle} className={dynamicClass(type)}>{type}</span>
         <p className="text-[17px] max-w-[25ch] font-regular text-black">{text}</p>
         <span className="text-[17px] text-[#616161] truncate border w-[260px]">{subText}</span>
       </div>
    </div>
  )
}

export default FeaturedCard;
