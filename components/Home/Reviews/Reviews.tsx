'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewsCard from './ReviewsCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Reviews = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='mx-auto text-center'>
        <h1 className='text-black text-2xl md:text-4xl font-light tracking-wide leading-snug '>
          - Reviews -
        </h1>
        <div className='w-[80%] mx-auto mt-16'>
              <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    >
                      
                    <ReviewsCard image='/images/jane.jpg' username='Jane Peterson' userRole='Portrait photography, New York' title='Nora Hovard is probably the best photographer to work with! She made me feel comfortable once I met her. Two months ago she made portraits for me and I was extremely impressed with what she is capable of.  I have never had such beautiful photos before. Thank you very much for a great job!' />

                    <ReviewsCard image='/images/helen.jpg' username='Helen Stone' userRole='Event photography, New York' title="Nora's work is just extraordinary!!! We now hire her for any special occasion. She has proved to be the best and the most professional in the photography industry. She is always very friendly, attentive to details. You will definitely fell at ease in front of her camera. The delivered images are of the highest quality possible! We are looking forward to our next event to cooperate with Nora Hovard!" />

                    <ReviewsCard image='/images/patric.jpg' username='Patrick Pool' userRole='Event photography, New York' title="There are not enough words to describe how much I am impressed with the work of Nora and her team. They are just a treasure for those who want to have fantastic memories from their special event or party. The quality of work is second to none, each shot is a masterpiece. I would definitely use Nora's photography services again in the future. Highly recommend!" />
                    
              </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Reviews
