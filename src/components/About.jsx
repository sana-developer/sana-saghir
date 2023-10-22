import React from 'react'
import {Link} from 'react-scroll'
import { saveAs } from 'file-saver';
import cv from '../assets/cv.pdf'
import AboutImg from '../assets/aboutImage.png'

function About() {
  const downloadCV = () => {
    const fileURL = cv;
    saveAs(fileURL, 'cv.pdf');
  }
  

  return (
    <div id='about'>
    <div className='h-14rem w-full'></div>
    <div className='flex about-section'> 
      <div className='img-part'>
        <img src={AboutImg} alt="Photo" />
      </div>
      
      <div className='pl-9 mt-6 ml-4 ml-2 text-part'>
        <div className='bold mt-20 about-h'><span className='border-aqua pb-2 about-h'>About Me</span></div>
        <div className='py-6'><p>I'm Sana Saghir, a dedicated Software Engineering student at Virtual University with a strong CGPA of 3.44. My passion lies in web development, where I've honed my skills in HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Through hands-on projects, I've deepened my technical expertise and gained valuable problem-solving experience. I'm excited about the prospect of applying my knowledge as a full-stack developer in a professional setting, where I can contribute effectively and continue to learn and grow. <br />
        <p className='pt-4'> My academic dedication and practical experience have equipped me with the tools to excel in the field of web development. I'm looking forward to taking on new challenges and making a positive impact through my work as I progress in my journey as a software engineer.</p>
       
        </p></div>
        <div className='py-4'>
        <Link to='contact' smooth={true} duration={500}>
            <button className='bg-gray-800 rounded-md px-10 py-2'
              style={{
                backgroundColor: '#353430',
                color: 'white',
                cursor: 'pointer',
                fontSize: '15px'}}
              >Hire Me</button>
              </Link>
              <button className='bg-gray-800 rounded-md px-10 py-2 ml-4'
              style={{
                backgroundColor: '#353430',
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
