
import { motion } from 'framer-motion';
import { BiCodeBlock } from 'react-icons/bi';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbDeviceDesktopCode, TbSettingsCode, TbWorldCode } from 'react-icons/tb';

import servicesImage from '../../../src/assets/services.png'


const Services = () => {
  return (
    <section className="services-researcher min-h-[90vh] sm:min-h-[100vh] mx-2 p-4 md:mx-6 rounded-lg flex flex-col overflow-hidden" id='landing'>

      <div className='flex flex-col items-center justify-evenly flex-[1]'>
        <div className="title flex-[1] w-full text-center flex items-center justify-center">
          <h2 className='text-4xl md:text-5xl font-extrabold p-2 uppercase'>
            {"Services".split('').map((l, i) => (
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

          <p></p>
        </div>

        <div className='flex-[1] flex flex-col sm:flex-row items-center justify-center'>

          <motion.div
            initial={{ x: -40, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 10,
            }}
            className="flex-[2] text text-sm sm:text-2xl sm:text-left sm:leading-relaxed leading-tight text-center pb-4 sm:p-5 sm:pl-20 w-full order-2 sm:order-1">
            <p>
              I provide a range of services to help you bring your ideas and projects to life. Whether it’s building out the frontend or backend for web applications, or mobile apps. Whether it is developing a new feature for an existing product or creating something entirely new, I can assist with developing web applications or mobile apps, I can assist with all stages of the development process. My expertise includes but is not limited to:
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
            className="image flex-[1] h-[35dvh] order-1 sm:order-2">
            <img src={servicesImage} className='w-full h-full object-contain' alt="" />
          </motion.div>

        </div>

        <div className='w-full lg:flex-[2] h-full'>
          <div className="services flex flex-wrap flex-col 
          items-center justify-center gap-4
          sm:flex-row
          ">

            <motion.div
              initial={{ x: -40, y: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              whileHover={{ y: -10, transition: { delay: 0 } }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 10,
                delay: 0
              }}
              className="service flex flex-col items-center justify-between border-[1px] rounded-lg p-4 border-gray-100 sm:w-[40%] lg:w-[30%] sm:h-[40dvh] glassmorphism">
              <div className="title flex-[1] p-2 text-3xl font-semibold">
                <h3 className='cursor-default'>Front End</h3>
              </div>

              <div className="image flex-[2] p-2 w-full flex items-center justify-center">
                <LiaLaptopCodeSolid className='text-7xl' />
              </div>

              <div className="desc flex-[4] p-2 text-sm sm:text-base text-center leading-tight tracking-normal">
                <p className='cursor-default'>
                  I specialize in building responsive and user-friendly websites using HTML, CSS,
                  JavaScript and ReactJS framework. My goal is to create a seamless experience for users by ensuring that the website loads quickly, has an intuit interface, and functions as expected on all devices with internet access.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -40, y: -50, opacity: 0 }}
              whileInView={{
                x: 0, y: 0, opacity: 1, transition: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                  delay: 0.1
                }
              }}
              whileHover={{ y: -10, transition: { delay: 0 } }}

              className="service flex flex-col items-center justify-between border-[1px] rounded-lg p-4 border-gray-100 sm:w-[40%] lg:w-[30%] sm:h-[40dvh] glassmorphism">
              <div className="title flex-[1] p-2 text-3xl font-semibold">
                <h3 className='cursor-default'>Back End</h3>
              </div>

              <div className="image flex-[2] p-2 w-full flex items-center justify-center">
                <TbSettingsCode className='text-6xl' />
              </div>

              <div className="desc flex-[4] p-2 text-sm sm:text-base text-center leading-tight tracking-normal">
                <p className='cursor-default'>
                  I have experience with NodeJS, Express and MongoDB for the back end development.
                  Additionally, I am familiar with RESTful API design principles.
                </p>
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
              className="service flex flex-col items-center justify-between border-[1px] rounded-lg p-4 border-gray-100 sm:w-[40%] lg:w-[30%] sm:h-[40dvh] glassmorphism">
              <div className="title flex-[1] p-2 text-3xl font-semibold">
                <h3 className='cursor-default'>Full Stack</h3>
              </div>

              <div className="image flex-[2] p-2 w-full flex items-center justify-center">
                <TbWorldCode className='text-6xl' />
              </div>

              <div className="desc flex-[4] p-2 text-sm sm:text-base text-center leading-tight tracking-normal">
                <p className='cursor-default'>
                  When required, I can work on full stack applications combining frontend (React) and
                  backend (NodeJS/Express). This allows me to create a complete application from scratch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Services