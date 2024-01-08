import { useEffect, useState } from 'react';
import data from '../../data/data-2023.json'
import Modal from './Modal';
import { motion } from 'framer-motion';



const Extension = () => {
  const { extensionActivities } = data

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  let extensionImages = []

  const handleOverFlowY = () => {

    modal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }

  useEffect(() => {
    handleOverFlowY()
  }, [modal])


  return (


    <section className="seminars py-6 flex flex-col items-center justify-center">

      <div>
        <h2 className='text-4xl sm:text-4xl md:text-5xl font-extrabold p-2 uppercase'>
          {"Extensions".split('').map((l, i) => (
            <motion.span
              initial={{ x: -30, y: -30, opacity: 0 }}
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

      <motion.div
        initial={{ x: -40, y: -50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 10,
        }}
        className='p-3 text-center sm:text-left'>
        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
          Here is the project I have been involved in as an extension animal production researcher. The aim of these projects was to improve breeding efficiency and
          productivity within animal husbandry.
        </p>
      </motion.div>

      <div className="content-wrapper flex items-center justify-center pt-4">
        {extensionActivities?.map((activity, i) => {
          extensionImages.push({
            img: activity.imgUrl,
            title: activity.organizer
          })
          return (
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
              className="activity glassmorphism p-2 text-center cursor-pointer sm:w-72 sm:h-72 flex flex-col items-center justify-around hover:scale-95"
              onClick={() => {
                setCurrentIndex(i);
                setModal(true);
              }}
              key={i}>
              <h2 className='font-bold sm:text-lg leading-tight py-2'>{activity.organizer}</h2>
              <p className='font-light sm:font-semibold text-lg pb-2'>{activity.date}</p>
              <p className='text-sm sm:text-base sm:text-left leading-tight'>{activity.description}</p>
            </motion.div>
          )
        })}
      </div>

      {modal && <Modal setModal={setModal} data={extensionImages} index={currentIndex} />}

    </section>
  )
}

export default Extension