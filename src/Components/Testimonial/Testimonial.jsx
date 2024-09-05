import React from 'react'
import "./Testimonial.css"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
import { sliderSetting } from './Slidersetting';
import { testimonialdata } from './Testimonialdata';

const Testimonial = () => {
  return (
    <div className='container'>
      <div className="testimonial-container">
        <div className="top-text-testimonial">
            <div className='test-t-text'>Testimonials</div>
        </div>
        <div className="slider-container">
            <Swiper className='swiper' {...sliderSetting}>
            <SliderButtons />
                    {
           testimonialdata.map((itam,i)=>(
            <SwiperSlide key={i}>
                <div className="slider-card">
                    <span className='slider-img'><img src={itam.img} alt="" /></span>
                    <span className='name-detail-slider'>
                         <span className='neme-slider'>{itam.neme}</span>
                         <span className='sider-detail'>{itam.comment}</span>
                    </span>
                </div>
                </SwiperSlide>
                
           ))
                    }
                 
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="slider-buttuns">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slidePrev()}>&gt;</button>
        </div>
    );
};