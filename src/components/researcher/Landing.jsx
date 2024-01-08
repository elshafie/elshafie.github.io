import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faResearchgate, faOrcid, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import data from '../../data/data-2023.json'

import { motion } from 'framer-motion';

import researcherImage from '../../assets/images/researcher.png'

const Landing = () => {

  return (
    <section className="landing-researcher flex flex-col items-center justify-evenly sm:justify-evenly min-h-[94dvh] gap-0 overflow-hidden sm:min-h-[94vh] sm:gap-5" id='landing'>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='heading'>
        <h1
          className='relative text-3xl text-center font-extrabold uppercase sm:text-4xl md:text-5xl tracking-widest lg:text-6xl pt-4 sm:p-4 text-indigo-950/80 cursor-default'>
          <span
            className='absolute -top-2 sm:top-[-15px] md:top-[-30px] lg:top-[-50px] capitalize font-normal text-gray-700 hover:scale-105 hover:-translate-y-1 transition-all'>I'm
          </span>

          <span className='inline-block'>
            {"Mohammed".split("").map((l, i) => (
              <motion.span
                initial={{ x: -50, y: -20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.15 + (i * 0.03)
                }}
                key={i}
                className='inline-block'
              >
                {l}
              </motion.span>
            ))}
          </span>

          &nbsp;

          <span className='inline-block'>
            {"Elshafie".split("").map((l, i) => (
              <motion.span
                initial={{ x: -50, y: -20, opacity: 0 }}
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

          &nbsp;

          <span className='hidden sm:inline-block'>
            {"Abd-Elkader".split("").map((l, i) => (
              <motion.span
                initial={{ x: -50, y: -50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.15 + (i * 0.03)
                }} key={i} className='inline-block'>{l}</motion.span>
            ))}
          </span>

          &nbsp;

          <span className='hidden sm:inline-block'>
            {"Omar".split("").map((l, i) => (
              <motion.span
                initial={{ x: -50, y: -50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.15 + (i * 0.03),
                }}
                key={i}
                className='inline-block'
              >{l}</motion.span>
            ))}
          </span>


        </h1>
      </motion.div>

      <div className="middle-section relative px-2 py-2 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-2">

        <div
          className='image w-[50%] flex items-center justify-center sm:flex-[1] sm:w-full sm:order-2 md:p-0 hover:scale-95 transition-all'>

          <motion.img
            initial={{ x: 50, y: 50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: 'spring', stiffness: 200, damping: 15
            }}
            className='w-[70%] xl:w-[55%]'
            src={researcherImage} alt="" />

        </div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: -0, opacity: 1 }}
          transition={{
            duration: 0.5
          }}
          className="sm:order-1 sm:flex-[2] pt-6 sm:p-6 text-center sm:text-justify lg:px-20">
          <h5
            className='relative text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
            <span
              className='absolute text-xl font-light top-[-20px] sm:top-[-25px] lg:top-[-35px] normal-case'>
              I'm a
            </span>
            {data.experiences[0].position}
          </h5>
          <p className='text-sm sm:text-base md:text-lg  lg:text-xl font-normal'>
            at {data.experiences[0].company}.
          </p>

          <div className="contact flex flex-col items-center justify-center gap-2 sm:gap-4 pt-3 text-left text-sm sm:text-base md:text-lg  lg:text-xl font-normal">

            <div className="email w-full flex items-center justify-center gap-2 sm:gap-4 hover:text-violet-500">
              <FontAwesomeIcon className='flex-[1] ' icon={faEnvelope} />
              <div className='flex flex-col flex-[8]'>
                <Link to={`mailto:${data.contact.email[0]}`}>{data.contact.email[0]}</Link>
                <Link to={`mailto:${data.contact.email[1]}`}>{data.contact.email[1]}</Link>
              </div>
            </div>

            <div className="address w-full flex items-center justify-center gap-2 sm:gap-4 hover:text-violet-500">
              <FontAwesomeIcon className='flex-[1] ' icon={faLocationDot} />
              <p className='flex-[8]'>{data.contact.address}</p>
            </div>

            <div className="phone w-full flex items-center justify-center gap-2 sm:gap-4 hover:text-violet-500">
              <FontAwesomeIcon className='flex-[1]' icon={faMobile} />
              <Link to={`tel:${data.contact.phoneNumber}`} className='flex-[8]'>{data.contact.phoneNumber}</Link>
            </div>
          </div>
        </motion.div>
      </div>


      <motion.div
        initial={{ x: -50, y: -50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='social flex gap-1 sm:gap-4 md:gap-6 lg:gap-8'>


        <Link
          to={data.contact.researchApps.researchGate}>
          <motion.div
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: 'spring',
              stiffness: 300,
              damping: 15,
            }}
            className="researchgate w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon className='text-[#04d4ac] sm:text-gray-600 sm:w-8 sm:h-8' icon={faResearchgate} size='xl' />
          </motion.div>
        </Link>


        <Link to={data.contact.researchApps.orcid}>
          <motion.div
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: 'spring',
              stiffness: 300,
              damping: 15,
              delay: 0.1
            }}
            className="orcid w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon className='text-[#a6ce39] sm:text-gray-600 sm:w-8 sm:h-8' icon={faOrcid} size='xl' />
          </motion.div>
        </Link>


        <Link to={data.contact.socialMedia.facebook}>
          <motion.div
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: 'spring',
              stiffness: 300,
              damping: 15,
              delay: 0.2
            }}
            className="facebook w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon
              className="text-[#4267B2] sm:text-gray-600 sm:w-8 sm:h-8"
              icon={faFacebook}
              size="lg" />
          </motion.div>
        </Link>

        <Link to={data.contact.socialMedia.linkedin}>
          <motion.div
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: 'spring',
              stiffness: 300,
              damping: 15,
              delay: 0.3
            }}
            className="linked w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon
              className="text-[#0077B5] sm:text-gray-600  sm:w-8 sm:h-8"
              icon={faLinkedin} size="lg" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Landing