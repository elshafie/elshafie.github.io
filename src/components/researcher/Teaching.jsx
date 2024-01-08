import data from '../../data/data-2023.json'
import { motion } from 'framer-motion';


const Teaching = () => {
  const { teachingExperiences } = data


  return (
    <section className="teaching py-6 px-5 flex flex-col items-center justify-center" id='teaching'>

      <div className='flex-[1] flex flex-col items-center justify-center'>
        <div>
          <h2 className='text-4xl md:text-5xl font-extrabold pb-4 uppercase text-center'>
            {"Teaching".split('').map((l, i) => (
              <motion.span
                initial={{ x: -20, y: -20, opacity: 0 }}
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
        >
          <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
            I have had the privilege of being a part of several educational projects and courses as an instructor mentor.  I have had the opportunity to teach courses in various fields in Animal production. Here are some of my experiences in this field so far.
          </p>
        </motion.div>
      </div>

      <div className="content-wrapper w-full h-full pt-14 sm:pt-2 sm:w-[90%] flex flex-wrap sm:flex-row items-center justify-center gap-12 text-base text-center">
        {teachingExperiences.map((course, i) => (
          <motion.div
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            whileHover={{
              y: -10, transition: {
                duration: 0.2,
                ease: 'easeInOut'
              }
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
              delay: 0.15 + (i * 0.03)
            }}
            key={i}
            className='course relative p-3 w-52 sm:w-40 sm:h-28 flex items-center justify-center glassmorphism hover:rotate-1 cursor-default'>

            <h3 className='font-bold text-center text-base'>{course.courseName}</h3>

            <span className={`absolute rounded-lg w-auto h-6  ${!course.graduated ? 'bg-yellow-400/70' : 'bg-green-600/70'} -top-6 right-0 text-sm px-4 sm:top-0 sm:left-0`}>{course.graduated ? 'Graduated' : 'Under graduated'}</span>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Teaching