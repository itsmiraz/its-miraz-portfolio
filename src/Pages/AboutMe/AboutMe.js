import React from 'react';
import image from '../../assets/hero-image/portfolio cover.png'

const AboutMe = () => {
    return (
        <section id='aboutme' className='relative my-20'>
        <div className='flex mx-4 md:mx-32 relative z-10 flex-col md:flex-row gap-10  justify-between items-center'>
            <img className='w-full md:w-[40%]' src={image} alt="" />

            <div className= 'w-full md:w-[50%] mx-auto'>
                <h1 className='text-start text-4xl text-white my-4  font-bold'>About Me</h1>

                <p className=' text-white font-semibold mx-auto'>
                    <span>Hi there,</span>
                    <br />
                    My name is Miraj Hossen.I am a React JS developer.
                    I am an expert with Html, CSS, Tailwind, Bootstrap, Javascript, ReactJS, Node Js, Firebase,
                    and MongoDB.As a React developer, I know basic to advanced level things about
                    Front-end-developer.  My previous learning experiences have strengthened my
                    capabilities. I consider myself a quick learner, self-motivated, responsible, disciplined, and
                    deadline-oriented Person who can work under pressure and solve problems in critical
                    situations with analytical knowledge and the latest technology.
                </p>
            </div>

        </div>
        <div className='absolute top-0 right-0 z-1 blue-pink-gradient rounded-full w-[30%] h-[30%]'>

        </div>
    </section>
    );
};

export default AboutMe;