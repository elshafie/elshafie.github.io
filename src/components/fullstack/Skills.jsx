import React from 'react'

import { skills } from '../../pages/fullstack/fullstack-data'
import { motion } from 'framer-motion';

import skillsImage from '../../../src/assets/skills.png'

const Skills = () => {


  return (
    <section className='flex min-h-[95dvh] items-center justify-evenly flex-col overflow-hidden px-2 rounded-lg mx-2 bg-indigo-900/60 py-5'>

      <div className="title w-full h-full flex items-center justify-center flex-[1] p-4">
        <h2 className='text-4xl md:text-5xl font-extrabold uppercase w-full h-full text-center'>
          {"SKILLS".split('').map((l, i) => (
            <motion.span
              initial={{ x: -40, y: -40, opacity: 0 }}
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

      <div className="flex flex-col items-center justify-evenly w-full h-[30dvh] p-5 text-center flex-[2]">

        <div className='flex items-center justify-center flex-[1] w-full flex-col sm:flex-row'>

          <motion.div
            initial={{ x: -40, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 10,
            }}
            className="text flex-[2] text-sm sm:text-4xl leading-snug sm:leading-relaxed order-2 sm:order-1">
            <p>
              I have a wide range of technical skills that include but are not limited to the following:
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 40, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            whileHover={{ y: -10 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 10,
            }}
            className="image flex-[1] sm:h-[30dvh] order-1 sm:order-2 pb-5">
            <img src={skillsImage} alt="" className='w-full h-[20dvh] sm:h-full object-contain' />
          </motion.div>


        </div>
      </div>

      <div className='flex-[3] flex w-full h-full'>

        <div className='flex flex-wrap flex-col sm:flex-row w-full flex-[1] h-full px-2 items-start justify-center gap-6'>

          <motion.div
            initial={{ x: -40, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            whileHover={{ y: -10, transition: { delay: 0 } }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              delay: 0,
              staggerChildren: 0.2
            }}
            className='w-full sm:w-[45%] lg:w-[35%] xl:w-[32%] sm:h-[28rem] xl:h-96 flex flex-col items-center justify-center border-[1px] rounded-lg text-center px-2 py-3 glassmorphism'>
            <div className='flex-[1] w-full p-2 flex items-center justify-center flex-col group'>
              <h2 className='tracking-widest text-2xl font-extrabold text-center cursor-default'>Front End Skills</h2>

              <hr className='w-full h-1 scale-0 group-hover:scale-100 transition-all' />

            </div>

            <div className='flex-[5] flex flex-wrap items-start content-start justify-center pt-4 gap-8 sm:gap-4 xl:gap-3'>

              {skills.frontEnd.map((skill, i) => (
                <motion.div
                  initial={{ x: -30, y: -30 }}
                  whileInView={{ x: 0, y: 0 }}
                  className={`relative overflow-hidden group`} key={i}>

                  <div className={`${skill.classnames} text-7xl sm:text-7xl w-26 h-26 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:p-3 flex items-center justify-center  transition-all`}>
                    {skill.icon}
                  </div>

                  <div className={`hidden sm:block absolute -top-[500px] group-hover:-top-1 left-[50%] -translate-x-[50%] text-base font-semibold transition-all`}>
                    <p>{skill.name}</p>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

          <motion.div
            initial={{ x: -40, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            whileHover={{ y: -10, transition: { delay: 0 } }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              delay: 0.1
            }}
            className='w-full sm:w-[45%] lg:w-[33%] xl:w-[32%] sm:h-[28rem] xl:h-96 flex flex-col items-center justify-center border-[1px] rounded-lg text-center p-6 glassmorphism'>
            <div className='flex-[1] w-full p-2 flex items-center justify-center'>
              <h2 className='tracking-widest text-2xl font-extrabold text-center'>Back End Skills</h2>
            </div>

            <div className='flex-[12] flex flex-wrap items-start content-start justify-center pt-4 gap-8 sm:gap-4'>

              {skills.backEnd.map((skill, i) => (
                <div className={`relative overflow-hidden group `} key={i}>

                  <div className={`${skill.classnames} text-7xl w-26 h-26 sm:w-20 sm:h-20 md:w-24 md:h-24 sm:p-3 flex items-center justify-center  transition-all`}>
                    {skill.icon}
                  </div>

                  <div className={`hidden sm:block absolute -top-[500px] group-hover:-top-1 left-[50%] -translate-x-[50%] text-base font-semibold transition-all`}>
                    <p >{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -40, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            whileHover={{ y: -10, transition: { delay: 0 } }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              delay: 0.2
            }}
            className='w-full sm:w-[45%] lg:w-[33%] xl:w-[32%] xl:h-[24rem] flex flex-col items-center justify-center border-[1px] rounded-lg text-center p-6 glassmorphism'>

            <div className='flex-[1] w-full p-2 flex items-center justify-center'>
              <h2 className='tracking-widest text-2xl font-extrabold text-center'>Mobile Skills</h2>
            </div>


            <div className='flex-[12] w-full flex flex-wrap items-center justify-center content-start pt-4 gap-1'>

              {skills.mobile.map((skill, i) => (
                <div className={`relative overflow-hidden group w-full flex items-center justify-center`} key={i}>
                  <div className={`${skill.classnames} text-7xl w-26 h-26 p-2 flex items-center justify-center  transition-all`}>
                    {skill.icon}
                  </div>

                  <div className={`hidden sm:block absolute -top-[500px] group-hover:-top-1 left-[50%] -translate-x-[50%] text-base font-semibold transition-all`}>
                    <p>{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills