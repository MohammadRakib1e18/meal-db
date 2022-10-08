import React, { useEffect } from 'react';

const About = () => {
    useEffect(()=>{
        document.title ="Home:About";
    },[])
    return (
        <div>
            <h1>This is about section</h1>
        </div>
    );
};

export default About;