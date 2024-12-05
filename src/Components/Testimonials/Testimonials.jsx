import React from 'react'
import "./Testimonials.css"
import { testimonial1, testimonial2, testimonial3 } from '../../assets'

const Testimonials = () => {
  return (
    <section id="testimonials" className='dark-gray'>
      <div className="wrapper">
        <h2>What our Students Say?</h2>

        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial2} />
            <div className="reviewer-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Microsoft</div>
              <div className="review">
                This is a great course. I got to learn a lot.
                This is too mmuch fun.
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial3} />
            <div className="reviewer-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Amazon</div>
              <div className="review">
                Awesome Great Job!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials