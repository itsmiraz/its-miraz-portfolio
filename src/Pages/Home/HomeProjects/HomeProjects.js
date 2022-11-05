import React, { useEffect } from 'react';
import { useState } from 'react';
import Projects from '../../Projects/Projects';
import HomeProjectsCard from './HomeProjectsCard';

const HomeProjects = () => {
    // setting data from data base
    const [projects, setprojects] = useState([])

    // fetching data from data base
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setprojects(data)
            })
    }, [])

    return (
        <div className='text-center py-10 bg-gray-900'>
            <h1 className='text-4xl font-bold text-white'>My Recent Projects</h1>
            <div className='grid grid-cols-1 gap-5 justify-items-center ml-6 py-10 md:grid-cols-2 lg:grid-cols-3 px-2 md:mx-20'>
                {
                    projects.slice(0, 3).map(project => <HomeProjectsCard
                        key={project._id}
                        project={project}
                    ></HomeProjectsCard>)
                }
            </div>
        </div>
    );
};

export default HomeProjects;