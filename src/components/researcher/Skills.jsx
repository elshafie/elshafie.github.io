import { useEffect, useState } from 'react'
import data from '../../data/data-2023.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/effect-creative';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import Modal from './Modal';
import { motion } from 'framer-motion';


const Skills = () => {

  const { skills } = data

  let certificates = []

  const [tap, setTap] = useState('software')
  const [modal, setModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)


  const handleTap = (tap) => {
    setTap(tap);
  }

  const handleModal = () => {
    setModal(true)
  }

  const handleOverFlowY = () => {
    modal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }

  useEffect(() => {
    handleOverFlowY()
  }, [modal])


  return (

    <section className="skills py-6 min-h-[95dvh] text-center bg-purple-400/40  rounded-xl p-2">
      <div className='w-full h-[100%] flex flex-col items-center justify-between'>
        <div className='flex-[1] w-full'>
          <h2 className='text-4xl sm:text-4xl md:text-5xl font-extrabold p-2 uppercase'>
            {"Skills".split('').map((l, i) => (
              <motion.span
                initial={{ x: -50, y: -50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.15 + (i * 0.03)
                }}
                key={i}
                className='inline-block'
              >{l}</motion.span>
            ))}
          </h2>
        </div>


        <div className='flex-[5] w-full h-full flex flex-col items-center justify-between'>

          <div className="content-wrapper w-full h-full flex flex-col items-center justify-evenly gap-2 text-center">

            <div>
              <div>
                <h2 className='text-2xl font-bold pb-4'>Languages</h2>
              </div>

              <div className="languages w-full p-2 flex flex-wrap items-center justify-center gap-3 sm:gap-10 pb-6">
                {skills.languages.map((language, i) => (
                  <motion.div
                    initial={{ x: -50, y: -50, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    whileHover={{
                      y: -10, transition: {
                        duration: 0.2,
                        ease: 'easeInOut',
                        delay: 0
                      }
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                      delay: 0.15 + (i * 0.03)
                    }}
                    className="language glassmorphism w-24 h-24 sm:w-36 md:w-40 sm:h-36 md:h-40 !rounded-full p-2 flex flex-col items-center justify-around sm:justify-center" key={i}>
                    <h3 className='font-bold text-base sm:text-xl cursor-default'>{language.language}</h3>
                    <p className='font-light text-xs sm:text-base sm:font-semibold cursor-default'>{language.level}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <hr className='w-[80%] border-t-2 my-4 border-t-gray-800' />

            <div className="computer w-full pt-2">
              <h2 className='text-2xl font-bold '>Computer Skills</h2>


              <div className='flex items-center justify-center gap-1 pt-3 text-sm'>
                <p
                  onClick={() => { handleTap('software') }}
                  className={`px-2 text-center sm:text-lg sm:font-bold py-3 cursor-pointer relative before:h-[0.2rem] before:w-[80%]  hover:font-bold before:absolute before:bottom-0 before:left-[10%] before:bg-gray-100 before:scale-0 hover:before:scale-100 transition-all before:transition-all before:duration-300 hover:scale-95 ${tap === 'software' && 'scale-95 before:scale-100'}`}
                >
                  Software
                </p>
                <p
                  onClick={() => { handleTap('skills') }}
                  className={`px-2 text-center sm:text-lg sm:font-bold py-3 cursor-pointer relative before:h-[0.2rem] before:w-[80%]  hover:font-bold before:absolute before:bottom-0 before:left-[10%] before:bg-gray-100 before:scale-0 hover:before:scale-100 transition-all before:transition-all before:duration-300 hover:scale-95 ${tap === 'skills' && 'scale-95 before:scale-100'}`}
                >
                  Skills
                </p>
                <p
                  onClick={() => { handleTap('certificates') }}
                  className={`px-2 text-center sm:text-lg sm:font-bold py-3 cursor-pointer relative before:h-[0.2rem] before:w-[80%]  hover:font-bold before:absolute before:bottom-0 before:left-[10%] before:bg-gray-100 before:scale-0 hover:before:scale-100 transition-all before:transition-all before:duration-300 hover:scale-95 ${tap === 'certificates' && 'scale-95 before:scale-100'}`}
                >
                  Certificates
                </p>
              </div>


              <div className='pt-3'>
                {tap === 'software'
                  &&
                  (
                    <div>
                      <motion.div
                        initial={{ x: -40, y: -50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 80,
                          damping: 10,
                        }}
                      >
                        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4'>
                          I have experience with the following software and tools:
                        </p>
                      </motion.div>
                      <div className="software flex flex-wrap gap-2 sm:gap-8 flex-col sm:flex-row p-2 items-center justify-center py-6 overflow-hidden">
                        {skills.computers.software.map((software, i) => (
                          <motion.div
                            initial={{ x: -50, y: -50, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            whileHover={{
                              y: -10, transition: {
                                duration: 0.2,
                                ease: 'easeInOut',
                                delay: 0
                              }
                            }}
                            transition={{
                              duration: 0.5,
                              ease: 'ease',
                              type: 'spring',
                              stiffness: 200,
                              damping: 15,
                              delay: 0.15 + (i * 0.03)
                            }}
                            className="software glassmorphism p-2 sm:rounded-full w-[75%] sm:w-36 md:w-40 sm:h-36 md:h-40 flex items-center justify-center sm:font-bold cursor-default" key={i}>
                            <h3 className='md:text-lg'>{software}</h3>
                          </motion.div>

                        ))}
                      </div>
                    </div>
                  )}

                {tap === 'skills'
                  &&
                  (
                    <div>
                      <motion.div
                        initial={{ x: -40, y: -50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 80,
                          damping: 10,
                        }}
                      >
                        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
                          In addition to my professional work, I also enjoy hobbies that allow me to learn
                          new skills in a fun and creative way. Here are some of them:
                        </p>
                      </motion.div>

                      <div className="programing-languages flex flex-wrap items-center justify-center w-full gap-2 sm:gap-6 p-2 py-6 overflow-hidden">
                        {skills.computers.skills.map((skill, i) => (
                          <motion.div
                            initial={{ x: -50, y: -50, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            whileHover={{
                              y: -10, transition: {
                                duration: 0.2,
                                ease: 'easeInOut',
                                delay: 0
                              }
                            }}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              damping: 15,
                              delay: 0.15 + (i * 0.03)
                            }}
                            className="skill glassmorphism w-28 sm:w-32 h-28 sm:h-32 !rounded-full flex items-center justify-center p-2 cursor-default" key={i}>
                            <p className='font-bold sm:text-lg'>{skill}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                {tap === 'certificates' &&
                  (
                    <div>
                      <motion.div
                        initial={{ x: -40, y: -50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 80,
                          damping: 10,
                        }}
                      >
                        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
                          Certifications are a great way to demonstrate the depth of knowledge I have acquired through my studies
                          I have completed the following certifications:
                        </p>
                      </motion.div>

                      <div className="certificates flex flex-col gap-2 p-2 overflow-hidden">
                        <Swiper
                          modules={[Pagination, Keyboard, Navigation]}
                          slidesPerView={1}
                          keyboard={{
                            enabled: true,
                          }}
                          navigation
                          breakpoints={
                            {
                              640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                              },
                              1024: {
                                slidesPerView: 3,
                              }
                            }
                          }
                          pagination={{ clickable: true, dynamicBullets: true }}
                          loop={true}
                          // onSwiper={(swiper) => {
                          //   console.log(swiper.slides.length);
                          // }}
                          // onSlideChange={
                          //   (slide) => {
                          //     setCurrentIndex(slide.clickedIndex);
                          //   }}
                          onClick={(slide) => setCurrentIndex(slide.clickedIndex)}
                          className='w-full h-80 flex'
                        >

                          {skills.computers.certificates.map((certificate, i) => {

                            certificates.push({ title: certificate.title, img: certificate.imgUrl, url: certificate.url })

                            return (
                              <SwiperSlide key={i} className='py-3 px-3'>
                                <motion.div
                                  initial={{ y: -50, opacity: 0 }}
                                  whileInView={{
                                    y: 0, opacity: 1, transition: {
                                      type: 'spring',
                                      stiffness: 200,
                                      damping: 10,
                                      delay: 0.15 + (i * 0.03)
                                    }
                                  }}
                                  whileHover={{
                                    y: -10, transition: {
                                      duration: 0.2,
                                      ease: 'easeInOut',
                                      delay: 0
                                    }
                                  }}

                                  className='certificate relative glassmorphism p-2 w-full flex flex-col items-center justify-center gap-2 h-[15rem] cursor-pointer overflow-hidden hover:rotate-1'
                                  onClick={() => {
                                    handleModal();
                                  }}>
                                  <h3 className='text-lg sm:text-xl font-semibold sm:font-bold leading-snug flex items-center justify-center flex-[2]'>{certificate.title}
                                    &nbsp;
                                    {certificate.online &&
                                      <span className='text-gray-800 bg-yellow-400/70 text-sm px-2 absolute bottom-4 -right-8 w-28 -rotate-45'>Online</span>}
                                  </h3>
                                  <p className='font-light sm:font-semibold flex items-center justify-center flex-[1]'>{certificate.date}</p>
                                  <p className='leading-tight font-light flex items-center justify-center flex-[2]'>{certificate.organizer}</p>
                                </motion.div>
                              </SwiperSlide>
                            )
                          })}
                        </Swiper>
                      </div>
                    </div>
                  )
                }
              </div>

            </div>
          </div>
        </div>
      </div>

      {modal && <Modal setModal={setModal} data={certificates} index={currentIndex} />}

    </section >
  )
}

export default Skills