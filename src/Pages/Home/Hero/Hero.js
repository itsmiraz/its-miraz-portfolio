import React from 'react';
import Typewriter from 'typewriter-effect';
import heroImg from '../../../assets/hero-image/portofolio_image.png'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className='relative '>


        <div className='text-center z-10 relative  py-14 '>
            <h1 className='text-6xl text-white font-bold'>Assalamu <span className='text-cyan-400'>Alaikum!</span></h1>
            <h3 className='text-2xl text-white font-semibold my-2 '>Welcome to my Web World</h3>
            <h3 className='md:text-4xl text-3xl flex mx-auto justify-center font-bold text-white'><span className='mx-3'>I am a</span> <Typewriter

                options={{

                    strings: ['React JS Developer', 'PhotoGrapher', 'Cinematographer', 'Graphic Disgner'],
                    autoStart: true,
                    loop: true,
                }}
            />
            </h3>
            <div className='flex justify-center'>
                <img className='w-96 ' src={heroImg} alt="" />
            </div>
        </div>
       
            <motion.div 
                className='absolute bottom-28 right-80 z-1 background_glow rounded-full w-[40%] h-[40%]'>
            </motion.div>
           
        </div>
    );
};

export default Hero;