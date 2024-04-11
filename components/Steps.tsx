import React from 'react'

type Props = {}
import { motion, useInView, useAnimation } from "framer-motion";

const Steps = (props: Props) => {
    const [copyText, setCopyText] = React.useState('COPY')

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('0x9f9c8ec3534c3f5f8a7e8c7d4f7f2e6b9c3b04a7')
            setCopyText('COPIED')
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    return (
        <div className=" bg-green-green w-full h-fit pt-[30vw] lg:pt-[30vh] font-zoocute relative text-6xl flex flex-col items-center justify-center text-white">
            <div className="mb-[5vh]">
                Contract Address
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center w-full'>
                <div className="w-[90%] lg:w-[30%] h-[10vh] bg-[url('/components/brown_button.png')] lg:mb-0 mb-[5vh] bg-center bg-contain object-contain bg-no-repeat font-zoocute text-white flex items-center justify-center text-2xl lg:text-3xl 2xl:text-4xl">
                    0x9f9c8ec3534c3f5f8a7e8c7d4f7f2e6b9c3b04a7
                </div>

                <motion.div 
                    onClick={ handleCopy }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-[90%] lg:w-[20%] h-[10vh] lg:mb-0 mb-[10vh] bg-[url('/components/yellow_button.png')] cursor-pointer bg-center bg-contain object-contain select-none bg-no-repeat font-zoocute text-black flex items-center justify-center text-6xl">
                        { copyText }
                </motion.div>
            </div>

            <div className='w-full lg:grid lg:grid-cols-2 lg:gap-x-[10vw] lg:gap-y-[5vh] lg:px-[20vw] lg:mt-[5vh]'>

                <div className='w-full'>
                    <div className="w-full flex justify-center items-center py-[2vh]">
                        <motion.div 
                            variants={{
                                hidden: { rotate: -180},
                                visible: { rotate: 0 } 
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5, delay: 0 }}
                            whileInView="visible"
                            viewport={{ once: false, amount: "some"}}
                            className=" w-[15vw] h-[15vw] lg:w-[5vw] lg:h-[5vw] bg-[url('/components/hoof.png')] bg-center bg-contain object-contain bg-no-repeat flex items-center justify-center text-5xl">
                            1.
                        </motion.div>

                        <div className="text-white text-4xl ml-[3vw]"> ADD BASE TO METAMASK </div>
                    </div>

                    <div className="w-full lg:rounded-2xl text-center text-white px-[5vw] font-nunito text-lg py-[2vh] bg-medium-green">
                        Download the Metamask wallet
                        from your phone’s app store or
                        via your browser extension store. 
                    </div>
                </div>

                <div className='w-full'>
                    <div className="w-full flex justify-center items-center py-[2vh]">
                        <div className="text-white lg:hidden text-4xl mr-[3vw]"> LOAD UP ETH </div>

                        <motion.div 
                            variants={{
                                hidden: { rotate: 180},
                                visible: { rotate: 0 } 
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5, delay: 0 }}
                            whileInView="visible"
                            viewport={{ once: false, amount: "some"}}
                            className=" w-[15vw] h-[15vw] lg:w-[5vw] lg:h-[5vw] bg-[url('/components/hoof.png')] bg-center bg-contain object-contain bg-no-repeat flex items-center justify-center text-5xl">
                            2.
                        </motion.div>

                        <div className="text-white lg:flex hidden text-4xl ml-[3vw]"> LOAD UP ETH </div>
                    </div>

                    <div className="w-full lg:rounded-2xl text-center text-white px-[5vw] font-nunito text-lg py-[2vh] bg-medium-green">
                        Visit <a className=' text-yellow-300' target='_blank' href='https://bridge.base.org'>bridge.base.org</a> and link
                        your wallet to the Ethereum
                        blockchain. Select the amount of
                        ETH you wish to bridge from the
                        ERC20 network to Base. Make
                        sure you’ve got some spare ETH
                        for gas fees.
                    </div>
                </div>

                <div className='w-full'>
                    <div className="w-full flex justify-center items-center py-[2vh]">
                        <motion.div 
                            variants={{
                                hidden: { rotate: -180},
                                visible: { rotate: 0 } 
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5, delay: 0 }}
                            whileInView="visible"
                            viewport={{ once: false, amount: "some"}}
                            className=" w-[15vw] h-[15vw] lg:w-[5vw] lg:h-[5vw] bg-[url('/components/hoof.png')] bg-center bg-contain object-contain bg-no-repeat flex items-center justify-center text-5xl">
                            3.
                        </motion.div>

                        <div className="text-white text-4xl ml-[3vw]"> BUY $GRAPH </div>
                    </div>

                    <div className="w-full lg:rounded-2xl text-center text-white px-[5vw] font-nunito text-lg py-[2vh] bg-medium-green">
                        Go to Uniswap and import the
                        contract address for $GRAPH
                        to exchange your ETH.
                    </div>
                </div>

                <div className='w-full'>
                    <div className="w-full flex justify-center items-center py-[2vh]">
                        <div className="text-white lg:hidden text-4xl mr-[3vw]"> ADD TO WALLET </div>

                        <motion.div 
                            variants={{
                                hidden: { rotate: 180},
                                visible: { rotate: 0 } 
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5, delay: 0 }}
                            whileInView="visible"
                            viewport={{ once: false, amount: "some"}}
                            className=" w-[15vw] h-[15vw] lg:w-[5vw] lg:h-[5vw] bg-[url('/components/hoof.png')] bg-center bg-contain object-contain bg-no-repeat flex items-center justify-center text-5xl">
                            4.
                        </motion.div>

                        <div className="text-white hidden lg:flex text-4xl ml-[3vw]"> ADD TO WALLET </div>
                    </div>

                    <div className="w-full lg:rounded-2xl text-center text-white px-[5vw] font-nunito text-lg py-[2vh] bg-medium-green">
                        Simply include the $GRAPH
                        contract address in your Metamask
                        wallet to display your $GRAPH 
                        tokens.
                    </div>
                </div>
            </div>

            <div className='w-full h-[20vh] lg:h-[50vh]'></div>

            <div className="absolute lg:hidden z-30 w-[120vw] h-[120vw] bottom-[-80vw] bg-[url('/components/leaf_light_green.png')] bg-center bg-contain object-contain bg-no-repeat"></div>
            <div className="absolute hidden lg:flex z-30 w-[120vw] h-[43vw] bottom-[-24vw] bg-[url('/components/desktop_leaf_light_green.png')] bg-center bg-contain object-contain bg-no-repeat"></div>

            <div id='tokenomics' className='absolute text-6xl lg:text-8xl z-30 bottom-[-10vw] lg:bottom-[0vw] text-white'> TOKENOMICS </div>

            <div className='absolute z-20 w-full h-[30vw] bottom-[-40vw] bg-dark-green'></div>
      </div>
    )
}

export default Steps