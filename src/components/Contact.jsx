import React from 'react'

function Contact() {
  return (
    <div id='contact' className='mx-28'>
      <div className='flex items-center flex-col justify-center'>
        <div className='mt-20 contact-head'>
        <label htmlFor="contact-h" className='name'>Get in touch</label>
        <div id='contact-h' ><span className='border-aqua pb-2 bold'>Contact Me</span></div></div>
        <p className='my-5 contact-p'>There are several platforms on which I'm available like Linkdin, Whatsapp, Twitter and Github.</p>
      </div>
      <div className="flex justify-between info">
        <div className='mt-4'>
          <div><h3 className='font-bold'>phone number</h3></div>
          <div className='mt-2 mb-4 ml-2'><i className="fa-solid fa-phone mr-2" style={{color: "#000000"}}></i>+923150152365</div>
        </div>
        <div className='address'>
          <div className='mt-4'><h3>
            <a href="https://www.google.com/maps/place/Islamabad,+Islamabad+Capital+Territory,+Pakistan/@33.6162509,72.7564434,10z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfd07891722f:0x6059515c3bdb02b6!8m2!3d33.6844202!4d73.0478848!16zL20vMGRoZDU?entry=ttu" target='_blank'>
            <i className="fa-solid fa-location-dot mr-2" style={{color: '#000000'}}></i>
            </a> Islambad Pakistan
            </h3></div>
          <div className='mt-2 mb-4 ml-4'>Islamabad Capital Territory</div>
        </div>
      </div>
      <div>
          <div><h3 className='font-bold email'>Email</h3></div>
          <div className='flex items-center foot'>
          <div className='mt-2 mb-4 ml-2'><i className="fa-regular fa-envelope mr-2" style={{color: "#000000"}}></i>sanasaghir979@gmail.com</div>
          <div className='social'>
          <a href="https://www.linkedin.com/in/sana-saghir-83bb24249/" target='_blank'>
          <i className="fa-brands fa-linkedin mr-2" style={{color: "#000000"}}></i>
          </a>
          
          <a href="https://twitter.com/SanaSaghir58211" target='_blank'>
          <i className="fa-brands fa-twitter mr-2" style={{color: "#000000"}}></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100095410369023" target='_blank'>
          <i className="fa-brands fa-facebook mr-2" style={{color: "#000000"}}></i>
          </a></div>
          </div>
          
          </div>

        

        <div className='text-center my-6 text-lg footer'><span className='text-2xl'>&copy;</span>&nbsp;Sana Saghir,&nbsp;All Rights Reserved</div>
    </div>
  )
}

export default Contact
