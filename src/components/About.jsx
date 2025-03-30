import React from 'react'
import {Link} from 'react-scroll'
import { saveAs } from 'file-saver';
import cv from '../assets/cv.pdf'
import AboutImg from '../assets/aboutGirl.jpg'

function About() {
  const downloadCV = () => {
    const fileURL = cv;
    saveAs(fileURL, 'cv.pdf');
  }
  

  return (
    <div id='about'>
    <div className='flex about-section mt-12'> 
      <div className='img-part flex items-center justify-center'>
        <img src={AboutImg} alt="Photo" className='p-10 w-82' />
      </div>
      
      <div className='mt-6 ml-4 ml-2 text-part px-12'>
        <div className='bold about-h'><span className='border-aqua pb-2 about-h'>About Me</span></div>
        <div className='py-6'>
            <p className='py-4'>I'm a Full-Stack Developer passionate about creating scalable, high-performance web applications. With expertise in Next.js, React, Django, and the MERN stack, I turn complex challenges into seamless digital solutions.</p>

            <p>My goal is to build efficient, user-friendly, and visually appealing applications. I focus on writing clean, optimized code while adding a creative touch to every project.</p>
            <p>🚀 Let's connect and build something amazing!</p>
        </div>
        <div className='py-4'>
        <Link to='contact' smooth={true} duration={500}>
            <button className='bg-gray-800 rounded-md px-10 py-2 about-btn'
              style={{
                backgroundColor: '#9d93f4',
                color: 'white',
                cursor: 'pointer',
                fontSize: '15px'}}
              >Hire Me</button>
              </Link>
              <button className='bg-gray-800 rounded-md px-10 py-2 ml-4 about-btn'
              style={{
                backgroundColor: 'black',
                color: 'white',
                cursor: 'pointer',
                fontSize: '15px'}}
              onClick={downloadCV}
              >Download CV</button>
        </div>
      </div>

     
    </div>
  </div>
  )
}

export default About
