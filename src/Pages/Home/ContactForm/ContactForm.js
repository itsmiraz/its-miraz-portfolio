import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      const forme = e.target
      emailjs.sendForm('service_g8r92cr', 'template_2jn8jje', form.current, 'hkpbt1u5XkzDyGz5Q')
        .then((result) => {
            toast.success('Email Sent')
            forme.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id='contact' className='bg-black my-10'>
            <form ref={form} onSubmit={sendEmail} className="container text-white flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
               
            <fieldset className="grid md:grid-cols-2  grid-cols-1 px-20 gap-6 p-6 rounded-md shadow-sm ">
                        <div className="flex flex-col items-center justify-center ">
                        <div>
                        <h1 className='text-4xl font-semibold'>Contact Me?</h1>
                            <p className='w-96 my-4'>Feel free to send me any message about me or wanna hire me or need any help in your project. I will reply you as soon as possible. Please enter a valid emal so that I can contact you. </p>
                    
                        </div>   
                    </div>
                        <div className="">
                            <div className='grid gap-5 grid-cols-2'>
                            <div className=" ">
                                <label htmlFor="username" className="text-sm">Name</label>
                                <input  required  name="user_name" id="username"  type="text" placeholder="Your Name" className="w-full text-gray-800 rounded py-2 px-2" />
                            </div>
                            <div className=" ">
                                <label htmlFor="username" className="text-sm">Email</label>
                                <input  required name="user_email"id="username" type="text" placeholder="Your Email" className="w-full  text-gray-800 rounded py-2 px-2" />
                            </div>
                           </div>
                            <div className="col-span-full">
                                <p htmlFor="bio" className="text-sm my-2">Your Message</p>
                                <textarea name="message" required id="bio" placeholder="" className="w-full rounded p-2  text-gray-800 h-28"></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center space-x-2">
                                
                                    
                                       
                                              
                                                <button type="submit" value="Send" className="px-4 py-1 font-semibold my-2 rounded bg-gray-800 text-white">Send</button>
                                            
                                           
                                
                                </div>
                            </div>
                        </div>
                    </fieldset>
               
               
            </form>
           
        </div>
    );
};

export default ContactForm;