import React from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import ButtnCss from "./Button.module.css"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ProjectsDetails = () => {
    const data = useLoaderData()
    const { title, image_url,screenshots,  live_web, features, git_hub, tech, server, details } = data;


   
    return (
        <div className='px-4 md:px-16 pb-2 md:mb-20 relative'>
            <div className='z-20 relative'>
            <h2 className='text-4xl text-white font-bold text-center py-6'>Project Details</h2>
            <div className='grid  grid-cols-1 md:grid-cols-2 gap-10 py-4 '>
                <div data-aos-duration="10000" data-aos="fade-bottom">
                    <div className=' md:h-[400px] overflow-hidden my-4 cards'>
                        <span className=' md:inner'>

                            <img className='shadow-lg rounded-lg' src={image_url} alt="" />

                        </span>
                    </div>
                    <div className='flex gap-x-5 my-5'>
                        <PhotoProvider>
                            {screenshots.map((item, index) => (
                                <PhotoView key={index} src={item}>
                                    {index < 3 ? <img className='object-cover w-32 h-24 shadow-xl  object-center  rounded-b-lg ' src={item} alt="" /> : undefined}
                                </PhotoView>
                            ))}
                        </PhotoProvider>
                    </div>
                </div>

                <div data-aos-duration="10000" data-aos="fade-bottom">
                    <h1 className='text-4xl font-bold text-white'>{title}</h1>
                    <div className='my-4'>
                        <h1 className='font-semibold text-xl my-2  text-white' >Features</h1>
                        <ul >
                            {
                                features.map((fea,i) => <ol key={i}>- {fea}</ol>)
                            }
                        </ul>
                    </div>
                    <div className='bg-black p-4 my-2 rounded-lg font-semibold text-center text-white'>
                        <h1 className="mb-2 text-gray-100 text-start font-bold">Tech Used in This Project</h1>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4  text-center text-gray-900  '>

                            {
                                tech.map((t, i) => <p key={i} className='bg-gray-200 text-center shadow-lg rounded-full py-1'>{t}</p>)
                            }
                        </div>
                    </div>
                    <div className='flex  border-none   justify-between my-6'>

                        <div className={` ${ButtnCss.btn}`}>
                            <a rel='noreferrer' target='_blank' href={live_web}>
                                <i></i> <span>Live Site</span>
                            </a>
                        </div>
                        <div className={` ${ButtnCss.btn}`}>
                            <a rel='noreferrer' target='_blank' href={git_hub}>
                                <i></i> <span>Client </span>
                            </a>
                        </div>
                        <div className={` ${ButtnCss.btn}`}>
                            <a rel='noreferrer' target='_blank' href={live_web}>
                                <i></i> <span>Server</span>
                            </a>
                        </div>
                    </div>
                  
                </div>
                </div>
                <h1 className='text-start font-semibold text-2xl text-white'>Details</h1>
        
            <p className='text-gray-200  my-4'>{details}</p>
            </div>

            <div className='absolute top-32  left-0 z-10 white_bg rounded-full w-[40%] h-[40%]'>

            </div>
            <ScrollRestoration></ScrollRestoration>
        </div >
    );
};

export default ProjectsDetails;