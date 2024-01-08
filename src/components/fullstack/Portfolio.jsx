
import { motion } from 'framer-motion';
import { portfolio } from '../../pages/fullstack/fullstack-data'

import { Project } from './'

import POTFOLIO from '../../assets/portfolio.png'

const Portfolio = () => {
  return (
    <section className="text-center w-full min-h-[95dvh] p-4 overflow-hidden">

      <div className="title w-full py-4">
        <h2 className='text-4xl md:text-5xl font-extrabold p-2 uppercase w-full'>
          {"PORTFOLIO".split('').map((l, i) => (
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

      <div className='flex items-center justify-center relative'>
        <motion.div
          initial={{ x: -40, y: -50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 10,
          }}
          className="flex-[2] lg:flex-[3] xl:flex-[4] desc">
          <p className=' p-2 sm:px-4 leading-tight text-sm sm:text-xl sm:leading-relaxed'>
            I have been fortunate enough to work on a variety of projects that showcase my skills in web development and design. From simple one-page websites to complex applications with serverless architecture, in web development and design. Below are some examples of the types of projects I am most proud of. If you would like to see more of my work or simply want to get in touch with me, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0, rotate: 0 }}
          whileInView={{ x: 0, opacity: 1, rotate: -45 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 10,
          }}
          className="hidden sm:inline-block sm:flex-[1] image">
          <img src={POTFOLIO} alt="" className='absolute inline-block w-60 -top-20 right-0 opacity-60' />
        </motion.div>
      </div>

      <div className="projects pt-6 sm:pt-16">
        <div className="cards flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {
            portfolio.map((project, i) => (
              <Project key={i} project={project} index={i} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio