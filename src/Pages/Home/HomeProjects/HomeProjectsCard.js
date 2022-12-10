import React from 'react';
import { Link } from 'react-router-dom';

const HomeProjectsCard = ({ project }) => {
    const { _id, title, image_url, live_web, git_hub, tech, details } = project;
    return (
        <div >
            <div data-aos-duration="10000" data-aos="zoom-in-up" className=" rounded  bg-slate-800  shadow-2xl ">
                <div className='cards h-[570px]'><span className='inner'>
                    <img className='rounded' src={image_url} alt="Shoes" />
                </span></div>
                <div className='p-4'>
                <div className="z-50 my-4 text-start ">
                    <h2 className=" text-2xl font-semibold text-white">{title}</h2>
                    <p className='w-70'>{details.slice(0, 200)}<Link className='' to={`/projects/${_id}`}>...</Link></p>
                </div>
                <div className='bg-slate-900 my-2 p-4 font-semibold text-white  rounded-lg '>
                    <h2 className='font-semibold text-start text-gray-400 my-2'>Tech Used</h2>
                    <div className='grid grid-cols-5 gap-6  text-gray-900  '>

                        {
                            tech.map((t,i) => <p key={i} className='bg-gray-300 shadow-lg rounded-full py-1'>{t}</p>)
                        }
                    </div>
                </div>
                <div className='text-start text-white flex justify-between'>
                    <Link to={`/projects/${_id}`}>
                        <button type="button" className="px-4 mr-4 py-1 font-semibold rounded border-gray-500 border">Details</button>


                    </Link>
                    <a rel="noreferrer" target='_blank' href={live_web}>
                        <button type="button" className="px-4 mr-4 py-1 font-semibold rounded bg-gray-700 ">Live Web</button>
                    </a>
                </div>
                </div>
            </div>
        </div >
    );
};

export default HomeProjectsCard;