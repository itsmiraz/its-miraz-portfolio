import React from 'react';
import Typewriter from 'typewriter-effect';
import heroImg from '../../../assets/hero-image/portfolio cover.png'


const Hero = () => {
    return (
        <div className='text-center app py-14 '>
            <h1 className='text-6xl text-white font-bold'>Assalamu <span className='text-cyan-400'>Alaikum!</span></h1>
            <h3 className='text-2xl text-white my-2 '>Welcome to my Web World</h3>
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
    );
};

export default Hero;