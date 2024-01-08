import { useEffect, useState } from 'react'
import data from '../../data/data-2023.json'
import Modal from './Modal';
import { motion } from 'framer-motion';


const Training = () => {
  const { training, seminars } = data

  const [tap, setTap] = useState('training');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  let trainingImages = []

  const handleTap = (tap) => {
    setTap(tap);
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

    <section className="training min-h-[95dvh] py-6 flex flex-col items-center text-center bg-purple-400/40 rounded-xl p-2 overflow-hidden" >

      <div>
        <h2 className='text-4xl sm:text-4xl md:text-5xl font-extrabold p-2 uppercase justify-self-start flex-[1]'>
          <span className='inline-block'>
            {"Training".split('').map((l, i) => (
              <motion.span
                initial={{ x: -40, y: -50, opacity: 0 }}
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
          </span>

          <motion.span
            initial={{ x: -40, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
              delay: 0.2
            }}
            className='inline-block'>&nbsp;&&nbsp;
          </motion.span>


          <span className="inline-block">
            {"Seminars".split('').map((l, i) => (
              <motion.span
                initial={{ x: -40, y: -50, opacity: 0 }}
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
          </span>
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
        className='p-2'>
        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
          I have had the pleasure of presenting at various trainings and seminars on topics related to various fields in animal production. I have been fortunate enough to participate in several seminars and workshops related to my research interests.<br />
          Here are some of them:
        </p>
      </motion.div>

      <div className='flex items-center justify-center gap-4 py-3 flex-[1]'>
        <p
          onClick={() => { handleTap('training') }}
          className={`px-4 text-center sm:text-lg sm:font-bold py-1 cursor-pointer relative rounded-xl before:h-[0.2rem] before:w-full  hover:font-bold before:absolute before:bottom-0 before:left-0 before:bg-gray-100 before:scale-0 hover:before:scale-100 transition-all before:transition-all before:duration-300 hover:scale-95 ${tap === 'training' && 'scale-95 before:scale-100'}`}
        >
          Training
        </p>
        <p
          onClick={() => { handleTap('seminars') }}
          className={`px-4 text-center sm:text-lg sm:font-bold py-1 cursor-pointer relative rounded-xl before:h-[0.2rem] before:w-full  hover:font-bold before:absolute before:bottom-0 before:left-0 before:bg-gray-100 before:scale-0 hover:before:scale-100 transition-all before:transition-all hover:scale-95 ${tap === 'seminars' && 'scale-95 before:scale-100'}`}
        >
          Seminars
        </p>
      </div>

      <div className='flex-[6] flex items-center justify-center'>

        {tap === 'training'
          &&
          (
            <div className="content-wrapper flex flex-col sm:flex-row sm:h-full flex-wrap items-center justify-center gap-4 text-center py-6 sm:px-6">
              {training.map((course, i) => {
                trainingImages.push({ title: course.title, img: course.imgUrl })

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
                      setCurrentIndex(i);
                      setModal(true)
                    }}
                    className="course relative card glassmorphism py-4 px-2 w-full sm:w-[45%] lg:w-[30%] xl:w-[24%] sm:h-64 flex flex-col justify-center sm:justify-around gap-2 overflow-hidden cursor-pointer group">

                    <h2 className='font-bold leading-tight text-lg sm:text-xl group-hover:animate-bounce'>{course.title}</h2>


                    <h5 className='text-sm sm:text-base sm:font-semibold py-2'>{course.organizer}</h5>

                    {course.online && <p className='bg-yellow-400/70 px-2  text-sm font-bold absolute -rotate-45 bottom-4 -right-6 w-24 group-hover:animate-pulse'>Online</p>}


                    {/* <p>{course.location}</p> */}

                    <div className="date text-left text-sm sm:text-base">
                      {course.startDate && <p>from &nbsp;: {course.startDate}</p>}

                      <p className=''>{course.startDate && <span>to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>}  {course.endDate} </p>
                    </div>
                  </motion.div>
                )
              })}

            </div>)}
        {tap === 'seminars' &&
          (<div className="content-wrapper flex flex-col flex-wrap gap-5 sm:gap-10 py-5 sm:flex-row items-center justify-center">
            {seminars.map((seminar, i) => (
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
                className="seminar glassmorphism !rounded-3xl text-center w-full p-2 sm:w-60 sm:h-48 flex items-center justify-center cursor-default" key={i}>
                <h4 className='font-semibold'>{seminar.title}</h4>
              </motion.div>
            ))}
          </div>)
        }

      </div>

      {modal && <Modal setModal={setModal} data={trainingImages} index={currentIndex} />}

    </section>
  )
}

export default Training