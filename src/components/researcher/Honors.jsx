import { useEffect, useState } from 'react';
import data from '../../data/data-2023.json'
import Modal from './Modal';
import { motion } from 'framer-motion';

const Honors = () => {
  const { honors } = data

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  let honorsImages = []

  const handleOverFlowY = () => {

    modal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }

  useEffect(() => {
    handleOverFlowY()
  }, [modal])

  return (

    <section className="training py-6 min-h-[95dvh] flex flex-col items-center justify-evenly text-center bg-purple-400/40  rounded-xl p-2">

      <div>
        <h2 className='text-4xl md:text-5xl font-extrabold p-2 uppercase'>
          {"Honors".split('').map((l, i) => (
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

      <motion.div
        initial={{ x: -40, y: -50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 10,
        }}
        className='px-2 py-3'>
        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
          I have been fortunate enough to receive several awards for my efforts. Here are some of the most notable ones that stand out in my career.
        </p>
      </motion.div>

      <div className="content-wrapper w-[90%] sm:w-full flex flex-wrap flex-col sm:flex-row items-center justify-center text-center gap-5 lg:gap-10">
        {honors.map((honor, i) => {

          honorsImages.push({
            img: honor.imgUrl,
            title: honor.award
          })
          return (
            <motion.div
              initial={{ x: -50, y: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
                delay: 0.15 + (i * 0.03)
              }}
              className="honor glassmorphism w-full sm:w-[48%] lg:w-[35%] sm:h-52 flex flex-col items-center justify-center gap-3 p-3 cursor-pointer group"
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                setModal(true)
              }}
            >
              <h2 className='text-lg font-semibold leading-tight flex-[2] flex items-center justify-center group-hover:scale-95 transition-all'>{honor.award}</h2>
              <p className='text-sm sm:text-base flex-[1] flex items-center justify-center'>{honor.date}</p>
              <p className='text-sm sm:text-lg font-bold flex-[2] flex items-center justify-center'>{honor.organizer}</p>
            </motion.div>
          )
        })}
      </div>

      {modal && <Modal setModal={setModal} data={honorsImages} index={currentIndex} />}

    </section>
  )
}

export default Honors