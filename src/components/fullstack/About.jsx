import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-researcher bg-indigo-900/60 min-h-[90vh] sm:min-h-[94dvh] mx-2 p-4 md:mx-6 rounded-lg overflow-hidden flex flex-col" id='landing'>

      <div className='flex flex-col items-center flex-[1]'>
        <div className="title w-full text-center">
          <h2 className='text-4xl md:text-5xl font-extrabold p-2 uppercase'>
            {"about".split('').map((l, i) => (
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

        <div className='flex flex-col sm:flex-row items-center justify-center flex-[3]'>

          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            className="image flex-[1] sm:flex-[2] flex items-center justify-center">
            <img
              className='w-[50%] sm:w-[90%]'
              src="https://firebasestorage.googleapis.com/v0/b/storage-15.appspot.com/o/assets%2Fmy%20photo%204.webp?alt=media&token=40dd4813-8f8d-434f-bb6b-9ca80cbf8ab1" alt="" />
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            className='flex-[2] sm:flex-[4] lg:flex-[5] flex items-center justify-center sm:p-10'>
            <p className='text-center sm:text-left font-semibold leading-snug tracking-wider p-2 sm:text-2xl sm:leading-relaxed lg:px-20'>
              Hi! I’m <span className='font-bold text-lg sm:text-3xl text-violet-700/90 uppercase'>Mohammed Elshafie</span>, I'm a full-stack web developer (MERN stack) based in Kafr Elsheikh, Egypt.
              <br />Back in 2012, I decided to start my journey to be a full-stack web developer.
              I love to learn new technologies and flex my creativity to create amazing things.
            </p>
          </motion.div>


        </div>

      </div>

    </section>
  )
}

export default About