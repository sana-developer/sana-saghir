import React from 'react'
import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className='card-project'>
      <a href={props.demo} target="_blank">
        <div className="image-container rounded-lg">
            <img src={props.src} alt={props.heading} />
            <div className="image-caption">
                <p>{props.description}</p>
            </div>
        </div>  
        </a>
      <h2>{props.heading}</h2>
      
      <div className='flex flex-wrap'>
        {props.tech.map((item,index) => (
            <span key={index} className='tech'>{item}</span>
        ))}
      </div>
      <div className='flex'>
        <a href={props.code} target="_blank">
        <div className="btn py-4 px-1 font-semibold cursor-pointer"><span className='circle'>&nbsp;&nbsp;Co</span>de&nbsp; &gt;
        </div></a>
        
        <div className='py-4 ml-14 live-demo'>
            <a href={props.demo} target="_blank">
              <button className='bg-gray-800 rounded-md px-10 py-2'
              style={{
                backgroundColor: '#05b890',
                color: 'white',
                cursor: 'pointer',
                fontSize: '15px'}}
              >Live Demo</button>
              </a>
        </div>
        </div>
      
    </div>
  )
}

export default ProjectCard
