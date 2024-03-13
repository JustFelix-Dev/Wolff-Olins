
const WorkCard = ({ image1,image2,text1,subText1,text2,subText2,cardtext1,cardtext2,cardtext3,cardtext4,cardtext5,cardtext6,cardtext7,cardtext8 })=>{
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3 workcard1">
        <div><img src={ image1 } className="long-image"  alt="image"/></div>
        <div className="flex flex-col gap-2" >
            <p className="text-[18.59px] text-black" >{text1}</p>
            <p className="text-[18.59px] text-[#959595] font-medium" >{subText1}</p>
            <div className="flex gap-2">
                <span className="py-1 px-2 border border-[#959595] text-[13.02px] text-[#959595]">{cardtext1}</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">{cardtext2}</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">{cardtext3}</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">{cardtext4}</span>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 workcard2">
        <div><img src={ image2 } className="short-image"  alt="image"/></div>
        <div className="flex flex-col gap-2">
            <p className="text-[18.59px] text-black">{text2}</p>
            <p className="text-[18.59px] text-[#959595] font-medium" >{subText2}</p>
            <div className="flex gap-2">
                <span className="py-1 px-2 border border-[#959595] text-[13.02px] text-[#959595]">{cardtext5}</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">{cardtext6}</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">{cardtext7}</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">{cardtext8}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
