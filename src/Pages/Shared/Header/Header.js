import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/web-logo.png'
import { FaAlignLeft, FaRegTimesCircle } from "react-icons/fa";



const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' shadow-xl bg-gray-900 sticky top-0 text-white items-center md:px-20 px-4 py-2 flex justify-between w-full'>

            <img className='z-50' width={'100px'} src={logo} alt="" />

            <div>
                <ul className={`md:flex right-0 z-0 bg-slate-900 w-full text-white text-center rounded-2xl md:shadow-none shadow-xl pb-2 md:pb-0 justify-center md:static duration-300 ease-linear absolute ${open ? 'top-12' : 'top-[-150px]'}`}>
                    <li className='font-semibold mr-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='font-semibold mr-4'>
                        <Link>Projects</Link>
                    </li>
                    <li className='font-semibold mr-4'>
                        <Link>About Me</Link>
                    </li>
                    <li className='font-semibold mr-4'>
                        <Link>Contact</Link>
                    </li>
                    <li className='font-semibold mr-4'>
                        <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                            <span>Dark</span>
                            <span className="relative">
                                <input id="Toggle1" type="checkbox" className="hidden peer" />
                                <div className="w-8 h-5 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-cyan-400"></div>
                                <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                            </span>
                            <span>Light</span>
                        </label>
                    </li>

                </ul>
                <div onClick={() => setOpen(!open)} className="h-6 ease-in duration-300  text-white w-6 md:hidden" >
                    {open ? <FaRegTimesCircle></FaRegTimesCircle>
                        : <FaAlignLeft></FaAlignLeft>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;