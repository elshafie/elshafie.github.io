import { useEffect, useState } from 'react';
import data from '../../data/data-2023.json'
import Modal from './Modal'
import { motion } from 'framer-motion';



const Volunteer = () => {

  const { volunteer } = data

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  let volunteerImages = []

  const handleOverFlowY = () => {

    modal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }

  useEffect(() => {
    handleOverFlowY()
  }, [modal])

  return (

    <section className="volunteer py-6 flex flex-col items-center justify-center rounded-xl p-2" id='conferences'>

      <div>
        <h2 className='text-4xl sm:text-4xl md:text-5xl font-extrabold p-2 uppercase'>
          {"Volunteer".split('').map((l, i) => (
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
        className='text-center p-2'>
        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
          I have been fortunate enough to work with several organizations and projects that align closely with my skills and interests. Here are some examples of the types of roles I’ve held in the past. If you would like more information about any of these experiences, feel free to reach out!
        </p>
      </motion.div>

      <div className="content-wrapper w-full flex flex-wrap flex-col sm:flex-row items-center justify-center text-center gap-4">
        {volunteer.map((job, i) => {
          volunteerImages.push({ img: job.imgUrl, title: job.orgName })
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
              onClick={() => {
                setCurrentIndex(i);
                setModal(true)
              }}
              className="volunteer glassmorphism w-full sm:w-80 sm:h-56 flex items-center justify-center flex-col gap-1 p-2 cursor-pointer group" key={i}>
              <h2 className='text-2xl sm:text-3xl font-bold flex-[1] flex items-center justify-center group-hover:scale-95 transition-all'>{job.orgName}</h2>
              <h3 className='text-sm sm:text-base flex-[1] flex items-center justify-center group-hover:animate-pulse'>{job.role}</h3>
              <p className='text-xl font-light sm:font-semibold flex-[1] flex items-center justify-center'>{job.from}-{job.to}</p>
              <p className='text-sm sm:text-base flex-[1] flex items-center justify-center'>{job.desc}</p>
            </motion.div>
          )
        })}
      </div>

      {modal && <Modal setModal={setModal} data={volunteerImages} index={currentIndex} />}

    </section>
  )
}

export default Volunteer