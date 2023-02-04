import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingAnimation from '../../../Componets/LoadingAnimation/LoadingAnimation';
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const Skills = () => {

    const { data: skills, isLoading } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const res = await fetch('https://its-miraz-server.vercel.app/skills')
            const data = await res.json()
            return data
        }
    })
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [500, -500]);
    const skillsanimation = {
        animate: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
            },
        },
    };

    const skillimg = {
        initial: { y: 400 },
        animate: {
            y: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
            },
        },
    };
    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }
    return (
        <div className='py-10 bg-zinc-900  relative '>
        <h1 className='text-2xl  font-semibold text-white pt-4  text-center sticky top-0  z-50'>My Skills</h1>
        <div className='relative overflow-hidden'>
        <motion.div
         

            className='grid grid-cols-8 relative my-10 place-items-center place-content-center content-center justify-items-center overflow-hidden  gap-10'>
            {
                skills.map(skill => <div
                    className=''
                    key={skill._id}
                >
                    <img src={skill.img} className='w-40' alt="" />

                </div>)
            }
       
        </motion.div>
        <div className='absolute left-0 top-0  w-52 bg-gradient-to-r  from-zinc-900 to-transparent h-full'>
        </div>
        <div className='absolute right-0 top-0  w-52 bg-gradient-to-l  from-zinc-900 to-transparent h-full'>
        </div>
       </div>

    </div>
          
      
    );
};

export default Skills;