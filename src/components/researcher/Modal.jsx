import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/effect-fade';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Modal = ({ setModal, data, index }) => {


  return (
    <div className="modal fixed w-screen h-screen top-0 left-0 bg-gray-600/80 backdrop-blur-sm text-center flex items-center justify-center z-20"
    >

      <div className=' absolute w-full h-full' onClick={() => setModal(false)} />


      <div className="relative h-[45dvh] w-[95dvw] sm:h-[60dvh] sm:w-[70dvw] mx-4 z-50"
      >
        <div className='absolute z-50 top-8 right-4 w-14 sm:w-20 items-end justify-end cursor-pointer' onClick={() => setModal(false)}>
          <FontAwesomeIcon icon={faClose} className='text-2xl p-3' />
        </div>

        <Swiper
          modules={[Pagination, Navigation, Keyboard]}
          keyboard={{
            enabled: true,
          }}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}

          onSwiper={(swiper) => {
            swiper.slideTo(index)
          }}
          // loop={true}
          // onSlideChange={(slide) => console.log(slide)}
          className='w-full h-full flex items-center justify-center py-5 px-2'
        >
          {data?.map((slide, i) => (
            <SwiperSlide key={i} className='flex items-center justify-center w-full h-full'>
              <div className='relative w-full h-full px-4 glassmorphism py-0 flex items-center justify-center'>
                <Link to={slide?.img} target={slide.img && `_blank`} className='flex w-[80%] h-full items-center justify-center'>
                  <img src={slide.img} alt={slide.title} className='w-auto h-auto max-h-[95%]' />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div >
  )
}

export default Modal