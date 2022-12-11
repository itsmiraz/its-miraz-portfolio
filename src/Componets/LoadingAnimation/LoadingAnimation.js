import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingAnimation = () => {
    return (
        <div className='h-[1000px] flex justify-center items-center'>
            <ScaleLoader color="#08a8ec" />
        </div>
    );
};

export default LoadingAnimation;