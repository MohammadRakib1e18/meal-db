import React, { useEffect } from 'react';
import Expert from '../Expert/Expert';
import './About.css';

const About = () => {
    useEffect(()=>{
        document.title ="Home:About";
    },[])
    return (
        <div className='about'>
            <Expert></Expert>
        </div>
    );
};

export default About;