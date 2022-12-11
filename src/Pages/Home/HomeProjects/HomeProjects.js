import React from 'react';
import HomeProjectsCard from './HomeProjectsCard';
import './HomeProjects.css'
import SmallProjectCard from './SmallProjectCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
const HomeProjects = () => {


    const { data: projects, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(' https://its-miraz-server.vercel.app/projects')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='text-center relative  py-10 '>
            <div className='relative z-10'>
                <div className='flex justify-between px-10'>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                    <h1 className='text-4xl font-bold text-white'>My Recent Projects</h1>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                </div>


                <div className='grid grid-cols-1 gap-10 justify-items-center ml-6 py-10 md:grid-cols-2 lg:grid-cols-3 px-2 md:mx-10'>
                    <div className='w-full col-span-2'>
                        {
                            isLoading ?
                                <>
                                    <div className="flex flex-col  rounded shadow-md w-full animate-pulse h-[900px]">
                                        <div className="h-[70%] rounded-t dark:bg-gray-700"></div>
                                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                                            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                            <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    {
                                        projects.slice(0, 1).map(project => <HomeProjectsCard
                                            key={project._id}
                                            project={project}
                                        ></HomeProjectsCard>)
                                    }
                                </>
                        }

                    </div>
                    <div className='grid gap-y-4 grid-cols-1'>
                        {
                            isLoading ?
                                <>

                                    <div className="flex flex-col  rounded shadow-md  w-96  animate-pulse h-72">
                                        <div className="h-48 rounded-t dark:bg-gray-700"></div>
                                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                                            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col  rounded shadow-md w-full  animate-pulse h-72">
                                        <div className="h-48 rounded-t dark:bg-gray-700"></div>
                                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                                            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col  rounded shadow-md w-full  animate-pulse h-72">
                                        <div className="h-48 rounded-t dark:bg-gray-700"></div>
                                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                                            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    {
                                        projects.slice(1, 4).map(project => <SmallProjectCard
                                            key={project._id}
                                            project={project}
                                        ></SmallProjectCard>)
                                    }
                                </>
                        }

                    </div>
                </div>
                <div className='flex justify-between px-10'>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                    <Link to='/projects'>
                        <button className='my-4 px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white'>Show ALL</button>
                    </Link>
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