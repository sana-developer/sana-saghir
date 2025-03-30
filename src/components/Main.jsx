import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed.js library
import {Link} from 'react-scroll'
import Image from '../assets/prfile.jpg'

function Main() {
    let typed = null; // Define the typed variable

    useEffect(() => {
      const options = {
        strings: ["Frontend Developer", "MERN Developer", "Web Developer", "Full Stack Developer", "Software Engineer"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true,
      };
  
      typed = new Typed('.input', options); // Assign the Typed.js instance to the typed variable
  
      return () => {
        if (typed) {
          typed.destroy(); // Clean up the Typed.js instance when the component unmounts
        }
      };
    }, []);

  return (
    <div className='flex main py-8' id='home'>
      <div className='w-1/2 pl-14 ml-4 mr-2 main-text'>
        <div className='my-5'><p>Hey There,</p></div>
        <div className='bold'>I'M <span className='name'>SANA SAGHIR</span></div>
        <div className='bold typed-text'>
            <span className='input'>Full Stack Developer |</span>
        </div>
        <div className='py-4 main-p'><p>I'm a Software Engineer with a strong foundation in web development, passionate about building impactful full-stack applications. Let's create together!</p></div>
        <Link to='about' smooth={true} duration={500}>
        <div className="btn py-4 px-1 font-semibold cursor-pointer"><span className='circle'>&nbsp;&nbsp;Ab</span>out Me&nbsp; &gt;
        </div>
        </Link>
        <div className='py-4'>
        <Link to='contact' smooth={true} duration={500}>
            <button className='bg-gray-800 rounded-md px-10 py-2'
              style={{
                backgroundColor: 'black',
                color: 'white',
                cursor: 'pointer',
                fontSize: '15px'}}
              >Hire Me</button>
              </Link>
        </div>
      </div>

      <div className='main-img w-1/2 flex items-center justify-center'>
          <img src={Image} alt="Photo" className='rounded-full w-72 h-72'/>
      </div>
    </div>
  )
}

export default Main
