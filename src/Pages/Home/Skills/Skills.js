import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingAnimation from '../../../Componets/LoadingAnimation/LoadingAnimation';

const Skills = () => {

    const { data: skills, isLoading } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/skills')
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }
    return (
        <section className='my-10 px-4 md:px-20 z-10 relative'>
            <h1 className='text-3xl my-4 text-white font-semibold text-center '>My Skills</h1>
            <div className='grid my-10 grid-cols-5 md:grid-cols-7  gap-5 justify-center'>{
                skills.map(skill => <div
                    key={skill._id}
                >
                    <img className='w-18 md:w-28 h-18 md:h-28' src={skill.img} alt="" />

                </div>)
            }</div>
          
        </section>
    );
};

export default Skills;