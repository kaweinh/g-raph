import React from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {}

const Tokenomics = (props: Props) => {
    return (
        <div className='w-full'>
            <div className='w-full pt-[60vw] bg-dark-green h-fit grid grid-cols-1 lg:grid-cols-2 lg:px-[20vw] px-[5vw] relative lg:py-[40vh] lg:gap-y-[10vh]'>
                <motion.div 
                    variants={{
                        hidden: { y: 100, opacity: 0 },
                        visible: { y: 0, opacity: 1 } 
                    }}
                    initial="hidden"
                    transition={{ duration: 0.5, delay: 0 }}
                    whileInView="visible"
                    viewport={{ once: false, amount: "some"}}
                    className="absolute top-[8%] left-[0] lg:top-[11%] lg:left-[24%] lg:w-[10vw] lg:h-[30vh] w-[50%] h-[60vw] bg-[url('/components/tokenomics_giraffe.png')] z-30 bg-center bg-contain object-contain bg-no-repeat"
                ></motion.div>

                <div className="w-[100%] h-[50vw] lg:h-[20vh] bg-[url('/components/supply.png')] z-30 bg-center bg-contain object-contain bg-no-repeat"></div>
                <div className="w-[100%] h-[50vw] lg:h-[20vh] bg-[url('/components/tax.png')] z-30 bg-center bg-contain object-contain bg-no-repeat"></div>
                <div className="w-[100%] h-[50vw] lg:h-[20vh] bg-[url('/components/token_name.png')] z-30 bg-center bg-contain object-contain bg-no-repeat"></div>
                <div className="w-[100%] h-[50vw] lg:h-[20vh] bg-[url('/components/symbol.png')] z-30 bg-center bg-contain object-contain bg-no-repeat"></div>

                <div className='w-full lg:h-[20vh] h-[50vh]'></div>

                <div className="absolute bottom-[-26vw] left-[-10vw] bg-[url('/components/bush.png')] lg:hidden w-[120vw] h-[100vw] z-30 bg-center bg-contain object-contain bg-no-repeat"></div>

                <div className="absolute hidden lg:flex bottom-[-19vw] left-[-10vw] bg-[url('/components/desktop_bottom_leafs.png')] w-[120vw] h-[120vh] z-30 bg-center bg-contain object-contain bg-no-repeat"></div>
            </div>

            <div className='bg-black w-full h-fit'>
                <div className="bg-[url('/components/weed_bg.png')] bg-center bg-cover object-cover w-full h-fit pb-[5vw] lg:pt-[30vh] pt-[15vh] flex flex-col justify-center items-center font-zoocute">
                    <div className=' text-white font-jungle-land text-4xl w-[55%] text-center'>
                        WE&apos;LL SEE YOU AT THE TOP!
                    </div>

                    <div className='pt-[10vh] flex justify-center items-center'>
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className=" bg-[url('/components/twitter.png')] cursor-pointer bg-center bg-contain object-contain lg:w-[5vw] lg:h-[5vw] w-[20vw] h-[20vw]">    
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className=" bg-[url('/components/telegram.png')] cursor-pointer bg-center bg-contain object-contain lg:w-[5vw] lg:h-[5vw] w-[20vw] h-[20vw] lg:ml-[5vw] ml-[10vw]">
                        </motion.div>
                    </div>

                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-5xl mt-[10vh] bg-[url('/components/buy_bottom_button.png')] cursor-pointer bg-no-repeat bg-center bg-contain object-contain lg:w-[10vw] lg:h-[10vh] w-[50%] h-[30vw]"
                    ></motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-5xl mt-[5vh] bg-[url('/components/chart_bottom_button.png')] cursor-pointer bg-no-repeat bg-center bg-contain object-contain lg:w-[10vw] lg:h-[10vh] w-[50%] h-[30vw]"
                    ></motion.div>

                    <div className='text-2xl lg:text-4xl 2xl:text-6xl mt-[10vh]'> 0x5ace197d87b614942bc1670eb0ddd55ce4432801 </div>
                </div>
            </div>

            <div className=' bg-black flex items-center justify-center px-[5vw] py-[5vw] lg:py-[5vh] font-nunito pb-[10vh]'>
                Copyright 2024 $GRAPH - All rights reserved.
            </div>
        </div>
    )
}

export default Tokenomics