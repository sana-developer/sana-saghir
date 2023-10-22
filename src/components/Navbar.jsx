import React, { useState } from 'react'
import {Link} from 'react-scroll'
import cv from '../assets/cv.pdf'

function Navbar() {
  const [activeItem, setActiveItem] = useState(0);
  const handleItemClick = (index) => {
    setActiveItem(index);
  }
  
  const items = ["Home" , "About", "Projects", "Resume"];
  
  return (
    <nav className='flex flex-wrap justify-between w-full px-14 py-2 item-center navbar'>
          <div className='mx-6 font-extrabold text-xl logo'>
            Sana Saghir
          </div>
          <div className='nav-items'>
          <ul className='flex flex-wrap'>
            {items.map((item,index) => (
              <li 
              key={index}
              className={`mx-5 px-1 ${index == activeItem ? "active" : ""}`}
              onClick={() => handleItemClick(index)}
              >
                {item == "Resume" ? (
                  <a href={cv} target='_blank' rel='noopener noreferrer'>
                  {item}
                  </a>
                ) : (
                  <Link
                to={item.toLowerCase()} // Set the 'to' prop to match the section's name
                spy={true} // Enables the active state when scrolling to the target
                smooth={true} // Enables smooth scrolling
                duration={500} // Scroll duration in milliseconds
                >
                {item}
                </Link>
                )
                }
              </li>
            ))}
            
            
            
          </ul>
          </div>
          <div className='mr-6 ml-18 px-2'>
              <Link to='contact' smooth={true} duration={500}>
              <button className='bg-black rounded-lg px-2 py-1'
              style={{
                backgroundColor: 'black',
                color: 'white',
                cursor: 'pointer'}}
              >Contact</button>
              </Link> 
          </div>
        </nav>
  )
}

export default Navbar
