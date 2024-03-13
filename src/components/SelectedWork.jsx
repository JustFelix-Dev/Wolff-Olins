import WorkCard from "./WorkCard";
import museum from "../assets/museum.jpg"
import Nybg from "../assets/NYBG.jpg"
import decathlon from "../assets/decathlon.jpg";
import lgElectronics from "../assets/lg-electronics.jpg";
import Met from "../assets/Met.jpg";

const SelectedWork = () => {
  return (
    <div className="w-full mb-36  max-w-[1225px] mx-auto flex flex-col gap-14">
       <span className="text-[32.81px] text-black border-t-[1px] border-[#000] flex">Selected Work</span>
       <div className="flex flex-col gap-20" >
         <WorkCard image1={museum} image2={Nybg} text1={'Leeum Museum of Art'} subText1={'Putting the art museum in motion'} text2={'NYBG'} subText2={'Renewing a New York Institution'} cardtext1={'Culture and education'} cardtext2={'Brand Strategy'} cardtext3={'Visual Identity'} cardtext4={''} cardtext5={'Culture and education'}cardtext6={'Brand Strategy'} cardtext7={'Visual Identity'} cardtext8={'Verbal Identity'} />

         <div className="flex flex-col gap-3">
        <div><img src={ decathlon }  alt="image"/></div>
        <div className="flex flex-col gap-2" >
            <p className="text-[18.59px] text-black" >Decathlon</p>
            <p className="text-[18.59px] text-[#959595] font-medium" >Rewriting sport&apos;s playbook for billions of athletes</p>
            <div className="flex gap-2">
                <span className="py-1 px-2 border border-[#959595] text-[13.02px] text-[#959595]">Sports</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">Brand Strategy</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">Brand Architecture</span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">Visual Identity</span>
            </div>
        </div>
      </div>

      <WorkCard order={true} image1={Met} image2={lgElectronics} text1={'The Met'} subText1={'Bringing art to everyone'} text2={'LG Electronics'} subText2={'Bringing a smile back to tech'} cardtext1={'Culture and education'} cardtext2={'Brand Strategy'} cardtext3={'Brand Architecture'} cardtext4={'Visual Identity'} cardtext5={'Tech'}cardtext6={'Brand Strategy'} cardtext7={'Visual Identity'} cardtext8={'Verbal Identity'} />
       </div>
    </div>
  )
}

export default SelectedWork;
