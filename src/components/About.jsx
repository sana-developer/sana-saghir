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
    <div className='h-14rem w-full'></div>
    <div className='flex about-section mt-12'> 
      <div className='img-part flex items-center justify-center'>
        <img src={AboutImg} alt="Photo" />
      </div>
      
      <div className='mt-6 ml-4 ml-2 text-part'>
        <div className='bold about-h'><span className='border-aqua pb-2 about-h'>About Me</span></div>
        <div className='py-6'><p>Innovative and dedicated Software Engineering student at Virtual University with a passion for web development and a strong foundation in HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Committed to continuous learning and hands-on experience, I've honed my technical expertise, problem-solving skills, and teamwork abilities through a diverse portfolio of personal projects. My mission is to leverage my skills and academic background to make a significant impact as a full-stack developer, and I'm eager to contribute my knowledge and talents to create exceptional solutions in a professional setting.
        </p></div>
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
