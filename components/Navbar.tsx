'use client'

import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion, useInView, useAnimation } from "framer-motion";
import MobileLinkTo from './MobileLinkTo';
const reactScroll = require('react-scroll')


type Props = {}

const pages = ['ICON', 'ABOUT', 'HOW TO BUY', 'TOKENOMICS', 'TELEGRAM', 'TWITTER', 'BUY', 'CHART']

const Navbar = (props: Props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    const getDesktopObject = ( name: string ) => {
        if( name == 'ICON' ) {
            return <motion.div className="bg-[url('/components/logo.png')] w-[60px] h-[60px] mr-[3vw] 2xl:mr-[10vw] bg-center bg-contain object-contain"></motion.div>
        } else if( name == 'TELEGRAM' ) {
            return (
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[url('/components/telegram.png')] cursor-pointer w-[60px] h-[60px] bg-center mx-[2vw] bg-contain object-contain"
                ></motion.div>
            )
        } else if( name == 'TWITTER' ) {
            return (
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[url('/components/twitter.png')] cursor-pointer w-[60px] h-[60px] bg-center mx-[2vw] bg-contain object-contain"
                ></motion.div>
            )
        } else if( name == 'BUY' ) {
            return (
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[url('/components/black_button.png')] flex items-center justify-center cursor-pointer w-[140px] h-[50px] bg-center mx-[1vw] bg-no-repeat bg-contain object-contain"
                > <div className='mt-[10px] text-5xl select-none'>BUY</div> </motion.div>
            )
        } else if( name == 'CHART' ) {
            return (
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[url('/components/black_button.png')] flex items-center justify-center cursor-pointer w-[140px] h-[50px] bg-center mx-[1vw] bg-no-repeat bg-contain object-contain"
                > <div className='mt-[10px] text-5xl select-none'>CHART</div> </motion.div>
            )
        } else {
            return (
                <reactScroll.Link activeClass="active" to={ name.split(' ')[0].toLowerCase() } spy={true} smooth={true} duration={1000}>
                    <motion.div className='px-[2vw] cursor-pointer text-4xl 2xl:text-6xl'>{ name } </motion.div>
                </reactScroll.Link>
            )
        }
    }

    const getMobileObject = ( name: string, ) => {
        if( ['ABOUT', 'HOW TO BUY', 'TOKENOMICS'].includes( name ) ) {
            return (
                <MobileLinkTo useAHref={ true } aHref={'#' + name.split(' ')[0].toLowerCase() } linkHref={'/#' + name.split(' ')[0].toLowerCase() } >
                    <div
                        onClick={ () => { setMobileMenuOpen( false ) } }
                        className={ `text-white cursor-pointer w-full text-center font-zoocute text-6xl py-[3vh] `}>
                        { name }
                    </div>
                </MobileLinkTo>
            )
        } else {
            return(
                <div key={name} 
                    onClick={ () => { setMobileMenuOpen( false ) } }
                    className={ ` ${ name == 'BUY' ? ' text-yellow-400' : `${ name == 'CHART' ? ' text-green-500' : 'text-white'}`}  cursor-pointer w-full text-center font-zoocute text-6xl py-[3vh] `}>
                    { name }
                </div>
            )
        }
    }

    return (
        <div className='block relative text-white'>
            <div className={ `absolute z-50 flex w-[101vw] left-[-1vw] h-[90px] justify-center items-center bg-black ease-in-out ${ mobileMenuOpen ? 'bg-opacity-90' : 'bg-opacity-20'} ${ mobileMenuOpen ? 'backdrop-blur-sm' : 'backdrop-blur-xl'} `}>

                <div className='z-50 lg:hidden text-white absolute mr-[10px] mt-[0px] right-0 hover:text-gray-500 cursor-pointer p-5' onClick={() => { setMobileMenuOpen( !mobileMenuOpen )}} >
                    { mobileMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <div className="lg:hidden bg-[url('/components/logo.png')] w-[60px] h-[60px] left-[30px] absolute bg-center bg-contain object-contain"></div>

                { mobileMenuOpen && (
                    <div className='lg:hidden font-jungle-land text-4xl'> $GRAPH </div>
                )}

                <div className='hidden lg:w-full lg:flex border border-transparent font-zoocute text-6xl'>
                    <div className='mx-auto flex items-center'>
                        {pages.map((pageName, index) => 
                            <div className='' key={index}>
                                { getDesktopObject( pageName ) }  
                            </div> 
                        )}
                    </div>
                </div>
            </div>

            { mobileMenuOpen && (
                <div className='relative lg:hidden top-[10vh] left-0 h-[90vh] pb-[30vh] pt-[5vh] ease-in bg-black bg-opacity-90 overflow-y-scroll'>
                    {pages.slice(1, pages.length).map((pageName, index) => 
                        <div key={index}>
                            { getMobileObject( pageName ) }
                        </div>
                    )}
                </div>
            )}
       </div>
    )
}

export default Navbar