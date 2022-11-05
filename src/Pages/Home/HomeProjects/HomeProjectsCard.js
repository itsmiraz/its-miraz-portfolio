import React from 'react';
import { Link } from 'react-router-dom';

const HomeProjectsCard = ({ project }) => {
    console.log(project);
    const { _id, title, image_url, live_web, git_hub, tech, details } = project;
    return (
        <div >
            <div data-aos-duration="10000" data-aos="zoom-in-up" className="card rounded-lg w-11/12 md:w-96 bg-slate-800 p-3  shadow-2xl ">
                <figure><img className='hover:w-96 w-80 rounded-lg ease-in duration-200' src={image_url} alt="Shoes" /></figure>
                <div className="z-50 my-4 text-start ">
                    <h2 className=" text-2xl font-semibold text-white">{title}</h2>
                    <p className='w-70'>{details.slice(0, 80)}<Link className='' to={`/projects/${_id}`}>...</Link></p>
                </div>
                <div className='bg-slate-900 my-2 font-semibold text-white  rounded-lg '>
                    <h2 className='font-semibold text-gray-400 mt-2'>Tech Used</h2>
                    <div className='grid grid-cols-3 text-gray-400  p-3'>

                        {
                            tech.map(t => <p>{t}</p>)
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
        </div >
    );
};

export default HomeProjectsCard;