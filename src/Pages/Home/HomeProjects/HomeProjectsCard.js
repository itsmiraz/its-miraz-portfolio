import React from 'react';

const HomeProjectsCard = ({ project }) => {
    console.log(project);
    const { title, image_url, live_web, git_hub, tech, details } = project;
    return (
        <div>
            <div className="card rounded-lg w-11/12 md:w-96 bg-slate-800 p-3  shadow-2xl ">
                <figure><img className='hover:w-96 w-80 rounded-lg ease-in duration-200' src={image_url} alt="Shoes" /></figure>
                <div className="z-50 my-4 text-start ">
                    <h2 className=" text-2xl font-semibold text-white">{title}</h2>
                    <p className='w-70'>{details.slice(0, 60)}...</p>
                </div>
                <div className='bg-slate-900 my-2 font-semibold text-white  rounded-lg '>
                    <h2 className='font-semibold text-white mt-2'>Tech Used</h2>
                    <div className='grid grid-cols-3 p-3'>

                        {
                            tech.map(t => <p>{t}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectsCard;