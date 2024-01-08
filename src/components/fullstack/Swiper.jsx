import React, { useEffect, useState } from 'react'
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/effect-creative';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Slider = ({ data, modal, setModal, setGroup, setCurrentIndex }) => {

  const handleOverFlowY = () => {
    modal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }

  useEffect(() => {
    handleOverFlowY()
  }, [modal])

  return (
    <div className="swiper w-full xl:h-[80%] flex items-center justify-center">
      <Swiper
        modules={[Pagination, Keyboard, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        navigation
        breakpoints={
          {
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
            }
          }
        }
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}

        onClick={(slide) => setCurrentIndex(slide.clickedIndex)}
        className='w-full h-[60dvh] md:h-[55dvh] flex items-center justify-center text-center pb-8 px-2'
      >
        {data.map((certificate, i) => {
          return (
            <SwiperSlide key={i} className='flex items-center justify-center w-full'>

              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2 + (i * 0.05)
                }}
                className='flex flex-col items-center justify-around h-full py-2 glassmorphism rounded-xl p-3'
              >

                <div className="title w-full">
                  <h3 className='text-lg font-bold leading-tight'>{certificate.name}</h3>
                </div>

                <div className="img w-[85%] 2xl:w-[70%] cursor-pointer" onClick={() => { setModal(true); setGroup(data) }}>
                  <img src={certificate.img} alt={certificate.name} className='rounded-xl' />
                </div>

                <div className="link w-full flex items-center justify-end pr-6">
                  <Link to={certificate.link} target='_blank' className='flex items-center justify-between bg-blue-500 w-24 p-4 rounded-xl h-8'>
                    <span className='inline-block'>Visit</span>
                    <BiRightArrowAlt className='inline-block animate-right' />
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          )
        })}
      </Swiper>


    </div>
  )
}

export default Slider