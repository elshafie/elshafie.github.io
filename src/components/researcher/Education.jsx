import data from '../../data/data-2023.json'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

const Education = () => {
  const { education } = data

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  const handleOverFlowY = () => {

    modal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }

  useEffect(() => {
    handleOverFlowY()
  }, [modal])

  let educationImages = [];
  return (
    <section className="education pt-6 bg-purple-400/40 bg-opacity-60 rounded-xl p-2 flex flex-col items-center justify-center" id='education'>
      <div>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold p-2'>
          {"EDUCATION".split('').map((l, i) => (
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

      <div className='cards relative flex flex-col sm:flex-row items-center justify-center gap-4 p-2 min-h-[50vh] w-full'>

        <ol className="flex flex-wrap flex-col sm:flex-row items-center justify-center gap-4 sm:gap-1 sm:flex w-full">
          {
            education.map((education, i) => {

              educationImages.push({ img: education.imgUrl, title: education.degree })

              return (
                <motion.li
                  initial={{ x: -50, y: -50, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                    delay: 0.15 + (i * 0.03)
                  }}
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setModal(true)
                  }}
                  className="relative flex flex-col items-center justify-center gap-2 text-center w-60 sm:w-80 py-6 sm:py-10 sm:my-2 glassmorphism cursor-pointer overflow-hidden group">
                  <div className=''>
                    <h2 className='text-4xl font-extrabold group-hover:-translate-y-2 transition-all'>{education.degree}</h2>
                    <h3 className='text-lg font-semibold'>{new Date(education.endDate).getFullYear()}</h3>
                  </div>

                  <div className="relative w-full flex items-center justify-center">

                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <FontAwesomeIcon className='w-6 h-6 sm:w-7 sm:h-7' icon={faGraduationCap} />
                    </div>


                    <div className="hidden sm:absolute sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                  </div>


                  <div className="w-full sm:mt-2">
                    <h3 className="text-sm sm:text-base font-semibold"> {education.faculty},</h3>

                    <h3 className="text-sm sm:text-base font-semibold">{education.university},</h3>

                    <h3 className="text-sm sm:text-base font-semibold">{education.country}</h3>

                    <div className="flex items-center justify-around sm:justify-evenly pt-4">
                      <p className='text-sm sm:text-base sm:font-semibold '>{education.fieldOfStudy}</p>
                      <p className='font-bold sm:text-lg'>{education.grade}</p>
                    </div>

                  </div>

                  {
                    education?.honor && (
                      <div className='absolute w-16 h-16 sm:w-[80%] sm:h-8 rounded-full sm:rounded-lg sm:font-bold top-16 right-2 sm:top-0 sm:mr-6 sm:right-0 bg-yellow-400/70 flex items-center justify-center'>
                        <p className='text-gray-100 text-xs sm:text-base'>Honor Degree</p>
                      </div>
                    )
                  }
                </motion.li>
              )
            })
          }
        </ol>

      </div>

      {modal && <Modal setModal={setModal} data={educationImages} index={currentIndex} />}
    </section>
  )
}

export default Education
