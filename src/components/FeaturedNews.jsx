import FeaturedCard from "./FeaturedCard";
import bestPlace from "../assets/best-place.png";
import weird from "../assets/weird.png";
import generationAi from "../assets/generation-ai.png";
import thisDate from "../assets/2024.png";
import unilever from "../assets/unilever.png";
import consumerHealth from "../assets/consumer-health.png";
import lgRebrand from "../assets/lg-rebrand.png";
import botanicalGarden from "../assets/botanical-garden.png";
import utopia from "../assets/Utopia.png";
import dyslexia from "../assets/dyslexia.png";
import juliaRace from "../assets/Julia-Race.png";
import wolffOlins from "../assets/wolff-olins.png";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FeaturedNews = () => {

  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
       
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = 'rgb(191,191,191,0.5)';
        } else {
          document.body.style.backgroundColor = '';
        }
      });
    },{ rootMargin:'-50% 0%'});
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={targetRef} className="w-full max-w-[1225px] mx-auto flex flex-col gap-8 pb-32 ">
        <span className="text-[32.81px] text-black border-t-[1px] border-[#000] flex">Featured News</span>
         <div className=" flex flex-wrap gap-8">
           <FeaturedCard image={bestPlace} type={'Inside'} text={"Wolff Olins listed number 15 on Ad Age's Best Places to Work 2024"} subText={"Wolff Olins has been listed at number 15 on Ad Age's Best Place"} />

           <FeaturedCard image={weird} type={'Thinking'} text={"The power of weird"} subText={"Global CEO Sairah Ashman explores how deviating from the"} />

           <FeaturedCard image={generationAi} type={'Thinking'} text={"Generation AI: a muse to amplify creativity"} subText={"Global CEO Sairah Ashman explores the postive impact of AI"} />

           <FeaturedCard image={thisDate} type={'Thinking'} text={"2024 predictions and how to navigate change"} subText={"Senior leaders from Wolff Olins share some advice on how to"} />

           <FeaturedCard image={unilever} type={'Thinking'} text={"How to make Unilever great again: a memo to incoming CEO Hein Schumacher"} subText={"As new Unilever CEO Hein Schumacher takes uo the reins,"} />

           <FeaturedCard image={consumerHealth} type={'Clients'} text={"Wolff Olins designs new global brand identity for Johnson & Johnson consumer health division"} subText={"Wolff Olins, the global branding consultancy, has designed the ne"} />

           <FeaturedCard image={lgRebrand} type={'Clients'} text={"LG's rebrand looks to \"bring a smile\" to the world of tech"} subText={"Life's Good. We are proud to have partnered with LG Electronics on"} />

           <FeaturedCard image={botanicalGarden} type={'Clients'} text={"New York Botanical Garden hires Wolff Olins for major brand refresh"} subText={"We're thrilled to announce that we are partnering with New York"} />

           <FeaturedCard image={utopia} type={'Thinking'} text={"Utopia or dystopia ? It's up to us to teach AI to reflect the best of humanity"} subText={"In Global CEO Sairah Ashman's latest Forbes article,she explores"} />

           <FeaturedCard image={dyslexia} type={'Inside'} text={"Dyslexia, creativity and me"} subText={"Our Global Executive Creative Director,Emma Barratt, unpick "} />

           <FeaturedCard image={juliaRace} type={'Inside'} text={"We've hired transformation specialist Julia Race to strengthen global culture off"} subText={"We're thrilled to be  welcoming Julia Race, (CPC) to our New York team"} />

           <FeaturedCard image={wolffOlins} type={'Inside'} text={"Inside Wolff Olins new branding"} subText={"Here, Wayne Deakin, global creative principal at Wolff Olins,explains"} />
         </div>
         <motion.button  className="h-[194.5px] see-more-button border-[2px] border-black rounded-full text-[52.21px] flex items-center justify-center transition-all ">See More</motion.button>
    </div>
  )
}

export default FeaturedNews
