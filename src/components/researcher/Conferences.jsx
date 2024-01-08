import { useEffect, useState } from 'react';
import data from '../../data/data-2023.json'
import Modal from './Modal';
import { motion } from 'framer-motion';



const Conferences = () => {
  const { conferences } = data

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  let conferencesImages = []

  const handleOverFlowY = () => {

    modal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }

  useEffect(() => {
    handleOverFlowY()
  }, [modal])

  return (
    <section className="conferences py-6 flex flex-col items-center justify-center bg-purple-400/40 bg-opacity-60 rounded-xl p-2" id='conferences'>

      <div>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold py-4 uppercase'>
          {"Conferences".split('').map((l, i) => (
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
        className='text-center sm:text-left px-2 pb-4'>
        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
          I have had the pleasure of attending several animal production conferences and meetups throughout my career as a researcher in animal science. Here are some highlights from these experiences that I feel were particularly impactful on my professional development.
        </p>
      </motion.div>

      <div className="contentw-rapper flex flex-col items-center justify-center gap-3 w-full sm:w-[90%] lg:flex-row lg:flex-wrap text-center">
        {conferences?.map((conference, i) => {
          conferencesImages.push({ img: conference.imgUrl, title: conference.name })
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
              key={i}
              onClick={() => {
                setModal(true)
                setCurrentIndex(i)
              }}
              className='border-2 w-full lg:w-[45%] lg:h-64 glassmorphism flex flex-col items-center justify-center lg:justify-around p-1 cursor-pointer group'>
              <div>
                <h2 className='font-bold sm:text-lg group-hover:scale-95 transition-all'>{conference.name}</h2>
                <h3 className='text-sm sm:text-base py-2 leading-tight'>{conference.description}</h3>
                <p className='font-bold text-sm sm:text-base'>{conference.organizer}</p>
              </div>
              <div className='w-full flex items-center justify-around text-xs sm:text-sm py-2'>

                {conference.endDate
                  ? (<div className='flex flex-col flex-[1]'>
                    <p>from &nbsp; {conference.startDate}</p>
                    <p> to &nbsp;&nbsp;&nbsp;&nbsp; {conference.endDate}</p>
                  </div>)
                  : <p className='flex-[1]'>{conference.startDate}</p>}

                <p className='flex-[1] sm:font-semibold'>{conference.place}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {modal && <Modal setModal={setModal} data={conferencesImages} index={currentIndex} />}
    </section>
  )
}

export default Conferences