import React from 'react'
import './Abouts.css'
import Me from '../../assets/dp7.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{RiFolder5Fill} from 'react-icons/ri'

const Abouts = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
           <div className="about_me-img">
             <img src={Me} alt="About image" />
           </div>
        </div>

        <div className="about_content">
             <div className="about_cards">
               <article className='about_card'>
                 <FaAward className='about_icon'/>
                 <h5>Experience</h5>
                  <small> 3+ years working</small>
               </article>
               <article className='about_card'>
                 <FiUsers className='about_icon'/>
                   <h5>Clients</h5>
                    <small> Clients world wide</small>
               </article>
               <article className='about_card'>
                   <RiFolder5Fill className='about_icon'/>
                    <h5>Projects</h5>
                     <small>10+ Projects</small>
               </article>
             </div>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero 
                nostrum harum, repudiandae dolorum assumenda! Corporis quaerat qui
                quam facilis libero. Molestiae facere vero recusandae nemo.</p>

                <a href="#about" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Abouts











/* import React from 'react'
import './Abouts.css'
import Me from '../../assets/dp2.png'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{RiFolder5Fill} from 'react-icons/ri'

const Abouts = () => {
  return (
  <section id='about'>
    <h5></h5>
    <h2></h2>
    <div className="container about_container">
      <div className="about me">
        <div className="about_me-img">
          <img src={Me} alt='about image'/>
        </div>
      </div>
      <div className="about_content">
         <div className="about_cards">
           <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small> 3+ years working</small>
           </article>
           <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small> Clients world wide</small>
           </article>
           <article className='about_card'>
            <RiFolder5Fill className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
           </article>
         </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos recusandae
            maiores placeat vitae delectus tempore labore debitis rem adipisci maxime, obcaecati,
             in sunt quibusdam iste illo, suscipit soluta pariatur modi.</p>

             <a href="#contact" className='btn btn primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default Abouts */