import { Swiper, SwiperSlide } from 'swiper/react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Pagination, Navigation, Keyboard } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/effect-fade';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';


const Modal = ({ setModal, certificates, currentIndex }) => {

  return (
    <div className="modal fixed w-screen h-screen top-0 left-0 bg-gray-400/70 dark:bg-gray-800/90 backdrop-blur-sm text-center flex items-center justify-center z-30"
    >

      <div className=' absolute w-full h-full' onClick={() => setModal(false)} />

      <div className="relative h-[80dvh] sm:h-[70dvh] lg:h-[80dvh] w-[95dvw] sm:w-[80dvw] lg:w-[50dvw] xl:w-[50dvw] z-50 glassmorphism"
      >
        <div className='absolute z-50 top-0 right-0 w-10 sm:w-20 items-end justify-end cursor-pointer' onClick={() => setModal(false)}>
          <FontAwesomeIcon icon={faClose} className='text-2xl p-1' />
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
            swiper.slideTo(currentIndex)
          }}
          // loop={true}
          // onSlideChange={(slide) => console.log(slide)}
          className='w-full h-full flex items-center justify-center py-5 px-2'
        >
          {certificates?.map((slide, i) => {
            const date = slide.date.toUTCString().split(' ')
            // date.shift()
            // date.shift()
            // date.pop()
            // date.pop()

            // ${date.join(' ')}
            return (
              <SwiperSlide key={i} className='flex items-center justify-center flex-col w-full h-full px-4'>

                <div className="title w-full flex items-center justify-center h-[9rem]">
                  <h3 className='font-extrabold sm:text-lg py-2'>{slide.name}</h3>
                </div>

                <div className='flex w-full items-center pb-3 sm:w-[70%]'>
                  <p className='flex-[3] text-left text-xs sm:text-sm font-semibold leading-tight'>{slide.organizer}</p>

                  <p className='flex-[1] text-xs sm:text-sm font-semibold text-right'>
                    {`${date.splice(2, 2).join(' ')}`}
                  </p>
                </div>

                <div className='w-[90%] sm:w-[80%] h-full flex items-center justify-center overflow-hidden py-4'>

                  {slide.innerCertificates
                    ? <Swiper
                      className="mySwiper2 swiper-v w-full h-full"
                      direction={'vertical'}
                      spaceBetween={10}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                    >
                      {slide.innerCertificates.map((cer, i) => (

                        <SwiperSlide key={i}>
                          <Link to={cer.img} target='_blank' className='w-full h-full'>
                            <img src={cer.img} alt={cer.name} className='w-full h-full object-contain' />
                          </Link>
                        </SwiperSlide>
                      ))}

                    </Swiper>
                    : <Link to={slide.img} target='_blank' className='w-full h-full'>
                      <img src={slide.img} alt={slide.name} className='w-full h-full object-contain' />
                    </Link>
                  }
                </div>

                <div className="desc text-xs sm:text-sm leading-tight sm:w-[80%]">
                  <p>
                    {slide.description}
                  </p>
                </div>

                <div className="link w-full flex items-center justify-center py-4">
                  <Link to={slide.link} target='_blank' className='flex items-center justify-between bg-blue-500 w-24 p-4 rounded-xl h-8'>
                    <span className='inline-block'>Visit</span>
                    <BiRightArrowAlt className='inline-block animate-right' />
                  </Link>
                </div>

              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div >
  )
}

export default Modal