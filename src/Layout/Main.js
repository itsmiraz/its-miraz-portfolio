import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='relative header z-10'>
                <Header></Header>

                <Outlet></Outlet>
            </div>
            <div className='absolute z-1 top-[-100px] blue-pink-gradient opacity-50 left-0 right-0 mx-auto w-[50%] rounded-full h-[90%]'>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;