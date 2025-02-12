import React, { useState, useEffect } from 'react'
import './Carousel.css'
import testimonialsData from '../../assets/data/testimonials.json'

type Testimonial = {
  text: string;
  img: string;
  name: string;
  job: string;
}

const testimonials: Testimonial[] = testimonialsData;

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [transition, setTransition] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setTransition(false)
      }, 600)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <div className={`user-info ${transition ? 'leave' : 'enter'}`}>
          <div className='user-testimonial'>
            {testimonials[currentIndex].text}
          </div>
          <img
            src={testimonials[currentIndex].img}
            alt={testimonials[currentIndex].name}
          />
          <div className='username'>
            {testimonials[currentIndex].name}
          </div>
          <div className='user-job'>
            {testimonials[currentIndex].job}
          </div>
        </div>
        <div className='carousel-control'>
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel