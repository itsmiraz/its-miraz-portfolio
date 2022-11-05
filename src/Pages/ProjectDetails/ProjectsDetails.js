import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ProjectsDetails = () => {
    const data = useLoaderData()
    const { title, image_url, live_web, git_hub, tech, details } = data;
    return (
        <div className='bg-gray-900 '>
            <h2 className='text-4xl text-white font-bold text-center py-6'>Project Details</h2>
            <div className='grid  grid-cols-2 gap-10 py-10 px-20 pb-32'>
                <div data-aos-duration="10000" data-aos="fade-right">
                    <img className='shadow-2xl rounded-lg' src={image_url} alt="" />
                </div>
                <div data-aos-duration="10000" data-aos="fade-left">
                    <h1 className='text-4xl font-bold text-white'>{title}</h1>
                    <p className='text-gray-400 my-4'>{details}</p>
                    <div className='bg-slate-800 p-3 rounded-lg font-semibold text-center text-white'>
                        <h1 className="mb-2 text-gray-500 font-bold">Tech Used in This Project</h1>
                        <div className='grid grid-cols-4' >
                            {tech.map(t => <p>{t}</p>)}
                        </div>
                    </div>
                    <div className="flex  my-4">

                        <a rel='noreferrer' target='_blank' href={live_web}>
                            <button type="button" className="px-4 mr-4 py-1 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Live Link</button>

                        </a>
                        <a rel='noreferrer' target='_blank' href={git_hub}>     <button type="button" className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Code Link</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsDetails;