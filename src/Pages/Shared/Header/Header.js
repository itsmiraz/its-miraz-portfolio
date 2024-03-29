import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/web-logo.png'
import { FaAlignLeft, FaRegTimesCircle } from "react-icons/fa";
import './Header.css'


const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' shadow-xl header bg-black md:bg-transparent  z-50 sticky top-0 text-white items-center md:px-20 px-4 py-2 flex justify-between w-full'>

            <img className='z-50 w-[90px] md:w-[120px]' src={logo} alt="" />
           
            <div>
                <ul className={`md:flex bg-black md:bg-transparent right-0 z-0  w-full text-center  rounded-2xl md:shadow-none shadow-xl pb-2 md:pb-0 justify-center md:static duration-100 ease-linear absolute ${open ? 'top-12' : 'top-[-550px]'}`}>
                    <li onClick={() => setOpen(!open)} className='font-semibold text-white  my-2 md:0   mx-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={() => setOpen(!open)} className='font-semibold text-white  my-2 md:0  mx-4'>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li onClick={() => setOpen(!open)} className='font-semibold  text-white my-2 md:0  mx-4'>
                        <Link to='aboutme'>About Me</Link>
                    </li>
                    <li onClick={() => setOpen(!open)} className='font-semibold text-white my-2 md:0 mx-4'>
                        {/* <a href='#contact'>Contact</a> */}
                        <Link to='contact'>Contact</Link>
                    </li>
                    <li onClick={() => setOpen(!open)} className='font-semibold text-white  my-2 md:0  mx-4'>
                        <Link to='/blogs'>Blogs</Link>
                    </li>


                </ul>
                <div onClick={() => setOpen(!open)} className="h-6 ease-in duration-300  text-white w-6 md:hidden" >
                    {open ? <FaRegTimesCircle></FaRegTimesCircle>
                        : <FaAlignLeft></FaAlignLeft>
                    }
                </div>
            </div>


        </div>
    );
};

export default Header;