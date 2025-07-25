import React from 'react';
import { image } from '../data/user';

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <img src={image} alt="Profile" />
        </div>
    );
};

export default About;