import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import HomeProjectsCard from '../Home/HomeProjects/HomeProjectsCard';
import SmallProjectCard from '../Home/HomeProjects/SmallProjectCard';

const Projects = () => {

    const { data: projects, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(' https://its-miraz-server.vercel.app/projects')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='p-4'>

            <div className='relative z-20 my-2 md:my-10'>
                <div className='flex justify-between px-3 md:px-10'>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                    <h1 className='text-2xl md:text-4xl font-bold text-white'>My All Projects</h1>
                    <p className='App-logo font-semibold text-2xl'>+</p>
                </div>


                <div className='grid grid-cols-1 gap-0 gap-y-4 md:gap-y-0 md:gap-10 justify-items-center ml-0 md:ml-6 py-10 md:grid-cols-2 lg:grid-cols-3 px-2 md:mx-10'>
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
                                        projects?.slice(0, 1).map(project => <HomeProjectsCard
                                            key={project._id}
                                            project={project}
                                        ></HomeProjectsCard>)
                                    }
                                </>
                        }

                    </div>
                    <div className='grid gap-y-4  grid-cols-1'>
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
                <div className='grid md:mx-14 grid-cols-1 md:grid-cols-3 gap-5'>
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
                                    projects.slice(3,).map(project => <SmallProjectCard
                                        key={project._id}
                                        project={project}
                                    ></SmallProjectCard>)
                                }
                            </>
                    }
                </div>
               
                    

            </div>
            <div className='absolute top-32  left-0 z-10 white_bg rounded-full w-[40%] h-[40%]'>

            </div>
            <ScrollRestoration />
        </div>
    );
};

export default Projects;