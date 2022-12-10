import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Hero from '../Hero/Hero';
import HomeProjects from '../HomeProjects/HomeProjects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeProjects></HomeProjects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;