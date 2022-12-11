import React from 'react';
import { Link } from 'react-router-dom';

const SmallProjectCard = ({ project }) => {

    const { _id, title, image_url, live_web, git_hub, tech, details } = project;


    return (
        <div >
            <div  className=" rounded  bg-[#000916]  shadow-2xl ">
                <div className='cards h-[170px] '><span className='inner'>
                    <img className='scale-100 rounded'  src={image_url} alt="Shoes" />
                </span></div>
                <div className='p-4'>
                <div className="z-50 my-2 text-start ">
                    <h2 className=" text-2xl font-semibold text-white">{title}</h2>
                    <p className=''>{details.slice(0, 80)}<Link className='' to={`/projects/${_id}`}>...</Link></p>
                </div>
               
                <div className='text-start text-white flex justify-between'>
                    <Link to={`/projects/${_id}`}>
                        <button type="button" className="px-4 mr-4 py-1 font-semibold  rounded bg-gradient-to-r from-indigo-600 to-pink-600 text-white">Details</button>


                    </Link>
                    <a rel="noreferrer" target='_blank' href={live_web}>
                        <button type="button" className="px-4 mr-4 py-1 font-semibold rounded bg-gradient-to-r from-indigo-600 to-pink-600 text-white">Live Web</button>
                   
                        </a>
                </div>
                </div>
            </div>
        </div >
    );
};

export default SmallProjectCard;