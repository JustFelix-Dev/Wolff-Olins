import VideoPlayer from "./VideoPlayer";

const OurAmbition = () => {
  return (
    <div className="my-14 w-full max-w-[1225px] mx-auto flex flex-col gap-24">
      <div className="my-10">
        <span className="pt-3 mr-3  text-[20px] float-left text-[#000]">Our Ambition</span>
        <p className=" text-[64px] -tracking-[1.76px] leading-[64px] text-[#000] max-w-[32ch] ">We create transformative brands that move <span className="ambition-line">businesses</span>, <span className="ambition-line" >people</span> and the <span className="ambition-line" >world</span> <span className="ambition-line">forward</span>.</p>
      </div>
      <VideoPlayer/>
    </div>

  )
}

export default OurAmbition
