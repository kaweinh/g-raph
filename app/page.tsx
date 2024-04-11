'use client'

import TopPortion from "@/components/TopPortion"
import { motion, useInView, useAnimation } from "framer-motion";
import Steps from "@/components/Steps";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <div className='w-screen h-fit relative flex flex-col justify-start items-center overflow-x-hidden'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700"></link>

      <div className="z-10 w-full">
        <TopPortion />
      </div>

      <div className=" bg-medium-dark-green w-full z-20 h-fit relative">
          <div className="absolute lg:hidden z-20 w-[150vw] h-[120vw] left-[-20vw] top-[-75vw] bg-[url('/components/leaf_ground.png')] bg-center bg-contain object-contain bg-no-repeat"></div>
          <div className="absolute lg:hidden z-10 w-full h-[20vw] bg-medium-dark-green top-[-6.5vw] left-[-5vw] rotate-12"></div>

          <div className="absolute z-20 w-[100vw] h-[120vw] left-[0vw] top-[-65vw] bg-[url('/components/desktop_leaf_ground.png')] bg-center bg-contain object-contain bg-no-repeat"></div>

          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute lg:hidden left-[25%] top-[-42vw] cursor-pointer z-30 w-[50%] h-[20vw] select-none bg-[url('/components/black_button.png')] bg-center bg-contain object-contain bg-no-repeat font-zoocute text-white flex items-center justify-center text-5xl">
            BUY 
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute lg:hidden left-[25%] top-[-14vw] cursor-pointer z-30 w-[50%] h-[20vw] select-none bg-[url('/components/black_button.png')] bg-center bg-contain object-contain bg-no-repeat font-zoocute text-white flex items-center justify-center text-5xl">
            CHART 
          </motion.div>

          <div className="mt-[30vw] lg:mt-[20vw] font-zoocute italic text-white text-8xl z-50 text-center"> ABOUT </div>

          <div className="w-full lg:px-[20vw] px-[5vw] text-center lg:pb-[40vh] pb-[30vh] pt-[5vh] h-fit italic text-white lg:text-4xl text-3xl font-zoocute leading-[7vh]">
            Meet $GRAPH, the cryptocurrency that&apos;s taking the market to new heights with its adorable mascot, G-raph the giraffe.
            With the tallest neck in the crypto savannah, G-raph symbolizes our reach for soaring candles and long-term growth. Agile and visionary, 
            just like our giraffe navigating the volatile landscapes, $GRAPH offers a fresh, innovative approach to digital investments. Embodying 
            community and sustainability with a heart as vast as his neck, G-raph invites you on a journey where humor and innovation meet, 
            proving that in the $GRAPH ecosystem, the sky&apos;s just the beginning.
          </div>

          <div className="absolute lg:hidden z-30 w-[110vw] h-[120vw] bottom-[-55vw] bg-[url('/components/leaf_upside_down.png')] bg-center bg-contain object-contain bg-no-repeat"></div>
          <div className="absolute z-30 w-[100vw] h-[30vw] bottom-[-12vw] bg-[url('/components/desktop_leaf_upside_down.png')] bg-center bg-contain object-contain bg-no-repeat"></div>

          <div className="absolute z-20 w-full h-[30vw] lg:hidden bottom-[-25vw] lg:bottom-[-30vw] bg-green-green"></div>
          <div className="absolute z-50 w-full h-[30vw] lg:bottom-[-25vw] bottom-[-15vw] font-zoocute text-6xl lg:text-8xl text-center"> 
            HOW TO BUY
          </div>
      </div>

      <Steps />

      <Tokenomics />

    </div>
  )
}