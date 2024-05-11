'use client'

import TopPortion from "@/components/TopPortion"
import { motion, useInView, useAnimation } from "framer-motion";
import Steps from "@/components/Steps";
import Tokenomics from "@/components/Tokenomics";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className='w-screen h-screen relative flex justify-center items-center overflow-x-hidden overflow-y'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700"></link>

      <div className="absolute z-20 w-full h-full left-0 top-0 hidden lg:flex">
          <video
              id='dash-vid'
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
          >
              <source src="/videos/longboiz.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>

      <div className="absolute z-20 w-full h-full left-0 top-0 flex lg:hidden">
          <video
              id='dash-vid'
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
          >
              <source src="/videos/longboiz_mobile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>

      <div className="absolute h-full w-full flex justify-center items-center z-30">
        <div className="flex items-center justify-start lg:mt-[35%] mt-[140%]">
          <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={ () => { window.open('https://twitter.com/longboizsol', '_blank') } }
              className="bg-[url('/components/twitter.png')] cursor-pointer lg:w-[4vw] lg:h-[4vw] w-[15vw] h-[15vw] mx-[5vw] lg:mx-[2vw] bg-center bg-contain object-contain"
          ></motion.div>

          <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={ () => { window.open('https://t.me/+H0_AEJnIcRdmZTMx', '_blank') } }
              className="bg-[url('/components/telegram.png')] cursor-pointer lg:w-[4vw] lg:h-[4vw] w-[15vw] h-[15vw] mx-[5vw] lg:mx-[2vw] bg-center bg-contain object-contain"
          ></motion.div>

          <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[url('/components/pumpfun.png')] cursor-pointer lg:w-[4vw] lg:h-[4vw] w-[15vw] h-[15vw] mx-[5vw] lg:mx-[2vw] bg-center bg-contain object-contain"
          ></motion.div>
        </div>
      </div>

    </div>
  )
}