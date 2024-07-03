import { useCallback, useEffect, useState } from 'react';
import HeaderTItle from '../../Shared/HeaderTItle';

const testimonials = [
  {
    title: 'Expertise and Compassion Combined',
    quote:
      "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    name: 'Sarah D',
    image: 'https://i.imgur.com/uPQC78U.png',
    role: 'IT Professional',
    rating: 5,
  },
  {
    title: 'Life-Saving Care, Life-Changing Experience',
    quote:
      'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
    name: 'Michael R',
    image: 'https://i.imgur.com/9S9gZqp.png',
    role: 'Business Executive',
    rating: 4,
  },
  {
    title: 'A Partner in Health and Wellness',
    quote:
      "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
    name: 'David S',
    image: 'https://i.imgur.com/x2IYJCV.png',
    role: 'Lawyer',
    rating: 5,
  },
  {
    title: 'A Partner in Health and Wellness',
    quote:
      "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
    name: 'David S',
    image: 'https://i.imgur.com/x2IYJCV.png',
    role: 'Lawyer',
    rating: 5,
  },
  {
    title: 'Life-Saving Care, Life-Changing Experience',
    quote:
      'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
    name: 'Michael R',
    image: 'https://i.imgur.com/9S9gZqp.png',
    role: 'Business Executive',
    rating: 4,
  },
  {
    title: 'Expertise and Compassion Combined',
    quote:
      "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    name: 'Sarah D',
    image: 'https://i.imgur.com/uPQC78U.png',
    role: 'IT Professional',
    rating: 5,
  },

  {
    title: 'Expertise and Compassion Combined',
    quote:
      "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    name: 'Sarah D',
    image: 'https://i.imgur.com/uPQC78U.png',
    role: 'IT Professional',
    rating: 5,
  },

  {
    title: 'A Partner in Health and Wellness',
    quote:
      "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
    name: 'David S',
    image: 'https://i.imgur.com/x2IYJCV.png',
    role: 'Lawyer',
    rating: 5,
  },
  {
    title: 'Life-Saving Care, Life-Changing Experience',
    quote:
      'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
    name: 'Michael R',
    image: 'https://i.imgur.com/9S9gZqp.png',
    role: 'Business Executive',
    rating: 4,
  },
];

export const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;

  const nextSlide = useCallback(() => {
    setCurrentSlide(currentSlide =>
      currentSlide === Math.ceil(testimonials.length / cardsPerSlide) - 1
        ? 0
        : currentSlide + 1
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="relative w-full mt-40">
      <div>
        <HeaderTItle text={'Testimonial'}></HeaderTItle>
        <h1 className="text-4xl mt-4 font-semibold leading-[54px] mb-4">
          What they say about us
        </h1>
      </div>

      {/* Carousel container */}
      <div className="grid grid-cols-3 gap-6">
        {/* Slides */}
        {testimonials
          .slice(
            currentSlide * cardsPerSlide,
            currentSlide * cardsPerSlide + cardsPerSlide
          )
          .map((testimonial, idx) => (
            <div key={idx} className="p-5 pr-10 bg-[#FFFFF5] rounded-2xl">
              <h3 className="mb-3 text-lg font-semibold leading-7 max-w-[260px]">
                {testimonial.title}
              </h3>
              <p className="text-[#4D4C7B] text-[12px] mb-5">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                  <img
                    src={`${testimonial.image}}`}
                    alt={testimonial.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">
                    {testimonial.name},{' '}
                    <span className="text-[12px] text-[#4D4C7B]">
                      {testimonial.role}
                    </span>
                  </p>

                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.535L.488 7.91l6.576-.957L10 1.5l2.936 5.453 6.576.957-4.756 3.645 1.122 6.535z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-[6px]">
        {[...Array(Math.ceil(testimonials.length / cardsPerSlide))].map(
          (item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentSlide ? 'bg-[#FFC637]' : 'bg-gray-300'
              }`}
            ></button>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonial;
