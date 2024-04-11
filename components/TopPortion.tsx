import React from 'react'

import { motion, useInView, useAnimation } from "framer-motion";

type Props = {}

const TopPortion = (props: Props) => {
    return (
        <div className="relative pb-[430%] lg:pb-[120%] w-full">
            <div className="absolute z-10 w-full h-full lg:bg-[url('/components/desktop_bg.png')] bg-[url('/components/mobile_bg.png')] bg-center bg-cover object-cover bg-no-repeat "></div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100},
                    visible: { opacity: 1, x: 0}
                }}
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.25 }}
                whileInView="visible"
                viewport={{ once: true, amount: "some"}}
                className="absolute bg-[url('/components/cloud_1.png')] lg:hidden top-[6%] left-[-20%] z-30 bg-center bg-contain object-contain bg-no-repeat w-[70%] h-[10%]"
            >
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 100},
                    visible: { opacity: 1, x: 0}
                }}
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.25 }}
                whileInView="visible"
                viewport={{ once: true, amount: "some"}}
                className="absolute bg-[url('/components/cloud_2.png')] lg:hidden top-[13%] right-[-20%] z-30 bg-center bg-contain object-contain bg-no-repeat w-[70%] h-[10%]"
            >
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 300},
                    visible: { opacity: 1, x: 0}
                }}
                initial="hidden"
                transition={{ duration: 1, delay: 0.25 }}
                whileInView="visible"
                viewport={{ once: true, amount: "some"}}
                className="absolute bg-[url('/components/desktop_clouds.png')] top-[0%] right-[0%] z-10 bg-center bg-contain object-contain bg-no-repeat w-[100%] h-[20%]"
            >
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100},
                    visible: { opacity: 1, y: 0}
                }}
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.25 }}
                whileInView="visible"
                viewport={{ once: true, amount: "some"}}
                className="absolute bg-[url('/components/token_green.png')] left-[10%] top-[4%] z-30 bg-center bg-contain object-contain bg-no-repeat w-[80%] h-[8%]"
            >
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100, x: -100},
                    visible: { opacity: 1, y: 0, x: 0}
                }}
                initial="hidden"
                transition={{ duration: 1, delay: 0.25 }}
                whileInView="visible"
                viewport={{ once: true, amount: "some"}}
                className="absolute bg-[url('/components/giraffehead_top.png')] left-[-5%] top-[6%] z-30 bg-center bg-contain object-contain bg-no-repeat lg:top-[-4%] lg:w-[30%] lg:h-[60%] lg:left-0 w-[80%] h-[38%]"
            >
            </motion.div>

            <div className="absolute top-[15%] right-[5%] z-30 text-black font-zoocute w-[40%] lg:w-[90%] lg:top-[12%] lg:text-center h-fit text-5xl">
                Reaching new HEIGHTS everyday!
            </div>

            <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-[30%] z-30 w-[25%] h-[7vh] top-[16%] hidden cursor-pointer lg:flex bg-[url('/components/desktop_buy.png')] bg-center bg-contain object-contain bg-no-repeat">    
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-[45%] z-30 w-[25%] h-[7vh] top-[16%] hidden cursor-pointer lg:flex bg-[url('/components/desktop_chart.png')] bg-center bg-contain object-contain bg-no-repeat">    
            </motion.div>


            <motion.div
                variants={{
                hidden: { rotate: 0, opacity: 1},
                visible: { rotate: -10, opacity: 1}
                }}
                initial="hidden"
                transition={{ duration: 3, delay: 0.25, repeat: Infinity, repeatType: "reverse"}}
                whileInView="visible"
                viewport={{ once: true, amount: "some"}}
                className="absolute bg-[url('/components/leaf_1.png')] left-[2%] top-[20%] lg:top-[18%] lg:left-[0%] z-30 bg-center bg-contain object-contain bg-no-repeat lg:w-[40%] w-[70%] h-[20%]"
            >
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 1, x: 0, y: 0, scale: 0 },
                    visible: { opacity: 1, x: 0, y: 0, scale: 1 }
                }}
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.25 }}
                whileInView="visible"
                viewport={{ once: false, amount: "some"}}
                className="absolute bg-[url('/components/leaf_bush_main.png')] lg:top-[30%] lg:left-[40%] left-[30%] top-[48%] z-30 bg-center bg-contain object-contain bg-no-repeat w-[70%] h-[30%]"
            >
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 1, x: 0, y: 0, scale: 0 },
                    visible: { opacity: 1, x: 0, y: 0, scale: 1 }
                }}
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.25 }}
                whileInView="visible"
                viewport={{ once: false, amount: "some"}}
                className="absolute bg-[url('/components/leaf_bush_other.png')] lg:right-[0%] lg:top-[24%] right-[0%] top-[43.5%] z-30 bg-center bg-contain object-contain bg-no-repeat w-[38%] h-[30%]"
            >
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 1, x: 100 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                transition={{ duration: 1, delay: 0.25 }}
                whileInView="visible"
                viewport={{ once: false, amount: "some"}}
                className="absolute bg-[url('/components/giraffes_side.png')] right-[0%] top-[59%] z-30 bg-center bg-contain object-contain bg-no-repeat lg:w-[30%] lg:h-[50%] lg:top-[51%] w-[50%] h-[50%]"
            >
            </motion.div>
        </div>
    )
}

export default TopPortion