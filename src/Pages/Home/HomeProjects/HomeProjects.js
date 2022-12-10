import React, { useEffect } from 'react';
import { useState } from 'react';
import HomeProjectsCard from './HomeProjectsCard';
import './HomeProjects.css'
import SmallProjectCard from './SmallProjectCard';
const HomeProjects = () => {
    // setting data from data base
    const [projects, setprojects] = useState([])

    // fetching data from data base
    useEffect(() => {
        fetch(' https://its-miraz-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setprojects(data)
            })
    }, [])

    return (
        <div className='text-center relative bg-black py-10 '>
            <div className='relative z-10'>
                <div className='flex justify-between px-10'>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                    <h1 className='text-4xl font-bold text-white'>My Recent Projects</h1>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                </div>


                <div className='grid grid-cols-1 gap-10 justify-items-center ml-6 py-10 md:grid-cols-2 lg:grid-cols-3 px-2 md:mx-10'>
                    <div className='w-full col-span-2'>
                        {
                            projects.slice(0, 1).map(project => <HomeProjectsCard
                                key={project._id}
                                project={project}
                            ></HomeProjectsCard>)
                        }
                    </div>
                    <div className='grid gap-y-4 grid-cols-1'>
                        {
                            projects.slice(1, 4).map(project => <SmallProjectCard
                                key={project._id}
                                project={project}
                            ></SmallProjectCard>)
                        }
                    </div>
                </div>
                <div className='flex justify-between px-10'>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                    <button className='btn'>Show All</button>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                </div>

            </div>
            <div className='absolute bottom-40 left-0 z-1 white_bg rounded-full w-[30%] h-[30%]'>

            </div>
            <div className='absolute top-52 right-0 z-1 blue-pink-gradient rounded-full w-[30%] h-[30%]'>

            </div>
        </div>
    );
};

export default HomeProjects;