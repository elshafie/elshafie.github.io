import { Link } from "react-router-dom";

import data from '../data/data-2023.json'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faGithub, faInstagram, faLinkedin, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'

import CardInfo from "./CardInfo";

import { BiRightArrowCircle, BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";

import myPhoto from '../../src/assets/images/main.png'
import researcherImage from '../../src/assets/images/researcher.png'
import fullStackImage from '../../src/assets/images/full-stack.png'
import designerImage from '../../src/assets/images/video.png'


const HomeInfo = ({ currentStage }) => {

  const { facebook, linkedin, instagram, github, twitter } = data.contact.socialMedia


  if (currentStage === 1)
    return (
      <CardInfo imgUrl={myPhoto}>

        <div className="relative">

          <motion.span
            className="absolute inline-block top-[-10px] left-4 text-base text-violet-900 font-normal
            sm:-top-2 sm:text-xl sm:font-semibold
            md:text-2xl md:-top-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello I'm
          </motion.span>


          <h1
            className="relative pt-4 text-fuchsia-800 font-poppins text-xl font-extrabold leading-none uppercase
            sm:text-3xl sm:font-bold
            md:text-3xl
            lg:text-4xl
            ">

            {'MOHAMMED'.split('').map((letter, i) => (

              <motion.span
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.08 }}
                key={i} className={`relative inline-block`}
              >
                {letter}
              </motion.span>
            ))}

            <span className="inline-block"> &nbsp;&nbsp;
              {'ELSHAFIE'.split('').map((letter, i) => (
                <motion.span key={i}
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.08 + 0.2, ease: 'easeInOut' }}
                  className={`inline-block`}
                >
                  {letter}
                </motion.span>
              ))}
            </span>

            <span className="hidden sm:inline-block"> &nbsp;&nbsp;&nbsp;
              {'Abd elkader'.split('').map((letter, i) => (
                <motion.span
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.08 + 0.2, ease: 'easeInOut' }}
                  key={i} className={`inline-block `}
                >
                  {letter}
                </motion.span>
              ))}
            </span>



            <span className="hidden sm:inline-block"> &nbsp;&nbsp;
              {'OMAR'.split('').map((letter, i) => (
                <motion.span
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.08 + 0.2, ease: 'easeInOut' }}
                  key={i} className={`inline-block `}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        <div
          className="description">
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-base font-normal leading-none py-2 px-2
          sm:text-lg sm:py-4  sm:px-6
          md:text-xl md:leading-normal
          xl:text-2xl'>
            Welcome to my world😉, feel free to take a tour to know more about me 🛩️.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-block font-normal text-base md:text-xl">
            (use <BiSolidLeftArrowSquare className="inline-block" />
            <BiSolidRightArrowSquare className="inline-block" />
            arrow keys Or grap the castle to left)
          </motion.p>
        </div>

      </CardInfo>
    );

  if (currentStage === 2) {
    return (

      <CardInfo imgUrl={researcherImage}>

        <div className="relative pt-2">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-3 left-10 text-lg font-normal
            sm:-top-2 sm:left-20 sm:font-semibold
            lg:text-2xl lg: lg:-top-4
            ">I'm a</motion.span>
          <h2
            className='text-center text-3xl py-0 px-0 text-violet-900 mx-2 uppercase
            sm:leading-snug sm:px-2
            lg:text-5xl
            '>

            {"Researcher".split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="inline-block"
              >

                {letter}</motion.span>
            ))}
          </h2>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: {} }}
            transition={{ duration: 0.2, delay: 0.08 }}
            className="text-base leading-none tracking-tight text-fuchsia-800
            sm:text-lg
            md:text-xl ">
            <span className="text-xs">at: </span>Animal Production 🐄 Research Institute
          </motion.h3>
        </div>

        <div
          className="description py-2 px-0
          sm:py-2 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1, y: 0, transition: {}
            }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-sm font-normal leading-none inline-block tracking-tight
          sm:text-base sm:leading-tight
          md:leading-normal md:text-lg
          xl:text-2xl xl:leading-tight">
            I work as a researcher and lecturer at animal production research station
            <span className="hidden sm:inline leading-tight">, Animal Production Research Institute, Agriculture Research Center.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-bold mt-4 w-40 sm:w-60 inline-block left-0
          sm:text-xl">
            <Link className="btn !p-2 hover:text-fuchsia-700 flex items-center justify-between"
              to='/researcher/'>
              <span className="!text-xs">Feel free to  dive in</span>
              <span className="animate-right">
                <BiRightArrowCircle className="inline-block  text-2xl" />
              </span>
            </Link>
          </motion.div>
        </div>

      </CardInfo>

    );
  }

  if (currentStage === 3) {
    return (

      <CardInfo imgUrl={fullStackImage}>
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-6 left-0 text-lg font-normal
            sm:-top-4 sm:left-4 sm:font-semibold
            md:left-20
            lg:text-2xl lg:left-5 lg:-top-4
            ">I'm a</motion.span>
          <h2 className='text-center py-0 px-0 text-violet-800 mx-0 text-2xl leading-none font-extrabold uppercase
          sm:leading-snug sm:py-0 sm:px-2 sm:text-3xl
          md:text-4xl
          lg:pt-3 lg:text-5xl
          '>
            <span className="inline-block">
              {"FULL-STACK".split('').map((letter, i) => (
                <motion.span
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  key={i}
                  className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </span>
            &nbsp;
            <span className="inline-block">
              {"DEVELOPER".split('').map((letter, i) => (
                <motion.span
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  key={i}
                  className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </span>
          </h2>
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="text-sm font-normal inline-block
           sm:text-base
           md:text-lg">MERN-STACK</motion.span>
        </div>

        <div
          className="description py-2 px-0
          sm:py-2 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-sm font-normal leading-none inline-block tracking-tight
            sm:text-base sm:leading-tight
            md:leading-normal md:text-lg
            xl:text-2xl xl:leading-tight">
            I'm working hard to learn more programming languages
            <span className="hidden sm:inline leading-tight">
              , I hope to be a pioneer full-stack developer.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="font-bold mt-4 w-40 sm:w-60 inline-block left-0
          sm:text-xl">
            <Link className="btn !p-2 hover:text-fuchsia-700 flex items-center justify-between"
              to='/fullstack/'>
              <span className="!text-xs">Feel free to  dive in</span>
              <span className="animate-right">
                <BiRightArrowCircle className="inline-block  text-2xl" />
              </span>
            </Link>
          </motion.div>
        </div>

      </CardInfo>
    );
  }

  if (currentStage === 4) {
    return (

      <CardInfo imgUrl={designerImage}>
        <div className="">
          <h2 className='text-center py-0 text-violet-800 mx-0 text-3xl px-0 font-bold uppercase
          sm:leading-none sm:py-0 sm:px-2 sm:text-5xl
          lg:text-6xl'>
            <span className="inline-block">
              {
                "Editor".split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -30, y: -30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="leading-tight inline-block">
                    {letter}
                  </motion.span>
                ))
              }
            </span>

            <span>&nbsp; & &nbsp;</span>

            <span className="inline-block">
              {
                "Designer".split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -30, y: -30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="leading-tight inline-block">
                    {letter}
                  </motion.span>
                ))
              }
            </span>
          </h2>

        </div>

        <div
          className="description flex flex-col items-center justify-center py-2 px-0
          sm:py-2 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-sm font-normal leading-none inline-block tracking-tight
            sm:text-base sm:leading-tight
            md:leading-normal md:text-lg
            xl:text-2xl xl:leading-tight">
            I love work with videos and pictures
            <span className="hidden sm:inline leading-tight">
              , I love edit videos and pictures.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="font-bold mt-4 w-40 sm:w-60 inline-block left-0
          sm:text-xl">
            <Link className="btn !p-2 hover:text-fuchsia-700 flex items-center justify-between"
              to='/video/'>
              <span className="!text-xs">Feel free to  dive in</span>
              <span className="animate-right">
                <BiRightArrowCircle className="inline-block  text-2xl" />
              </span>
            </Link>
          </motion.div>
        </div>

      </CardInfo>

    );
  }

  if (currentStage === 5) {
    return (
      <motion.div
        initial={{ x: -100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="card-box w-[90vw] sm:w-[90vw] md:w-[75vw] lg:w-[72vw] max-h-[55vh] sm:max-h-[35vh] lg:max-h-[30vh] sm:text-lg sm:leading-snug text-center glassmorphism  py-4 px-2 text-xl font-bold mx-6 over overflow-hidden flex flex-col sm:flex-row items-center justify-center gap-2">
        <div className="text flex flex-col items-center justify-center gap-2 sm:gap-4 w-full h-full sm:order-1 sm:flex-[3]">
          <div className="">
            <h2 className='text-center py-0 text-violet-800 mx-0 text-4xl px-0 font-bold uppercase
            sm:leading-snug sm:py-0 sm:px-2 sm:text-5xl '>
              {"Contact".split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="inline-block"
                >{letter}</motion.span>
              ))}
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.08 }}
            className="text-base sm:text-xl lg:text-2xl font-semibold sm:font-bold  leading-tight md:leading-normal">
            Feel free to contact me in any of the social links here.
          </motion.p>

          <div className="social flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <Link to={facebook} target="_blank" >
              <motion.div
                initial={{ opacity: 0, y: -30, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.2, delay: 0 }}
                className="facebook w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-[#4267B2] sm:text-[#000000] sm:w-8 sm:h-8"
                  icon={faFacebook}
                  size="lg" />
              </motion.div>
            </Link>

            <Link to={github} target="_blank" >
              <motion.div
                initial={{ opacity: 0, y: -30, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="github w-8 h-8 sm:w-10 sm:h-10 bg-white text-black sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
                <FontAwesomeIcon className="sm:w-8 sm:h-8" icon={faGithub} size="lg" />
              </motion.div>
            </Link>

            <Link to={linkedin} target="_blank" >
              <motion.div
                initial={{ opacity: 0, y: -30, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="linked w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-[#0077B5] sm:text-[#000000]  sm:w-8 sm:h-8"
                  icon={faLinkedin} size="lg" />
              </motion.div>
            </Link>

            <Link to={instagram} target="_blank" >
              <motion.div
                initial={{ opacity: 0, y: -30, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="insta w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon className="sm:w-8 sm:h-8" icon={faInstagram} size="lg" />
              </motion.div>
            </Link>

            <Link to={twitter} target="_blank">
              <motion.div
                initial={{ opacity: 0, y: -30, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }} className="twitter w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
                <FontAwesomeIcon className="text-[#1DA1F2] sm:text-[#000000] sm:w-8 sm:h-8" icon={faTwitter} size="lg" />
              </motion.div>
            </Link>

            <Link target="_blank" >
              <motion.div
                initial={{ opacity: 0, y: -30, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="tiktok w-8 h-8 sm:w-10 sm:h-10 bg-white text-black sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
                <FontAwesomeIcon className="sm:w-8 sm:h-8" icon={faTiktok} size="lg" />
              </motion.div>
            </Link>
          </div>



          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-bold mt-4 text-base w-44 sm:w-96 inline-block left-0
          sm:text-xl">
            <Link className="btn !p-3 hover:text-fuchsia-700 flex items-center justify-between"
              to='/contact/'>
              <span className="">Send me a message</span>
              <BiRightArrowCircle className="animate-right  inline-block  text-2xl" />
            </Link>
          </motion.div>

        </div>
      </motion.div>
    );
  }

  return null;
};

export default HomeInfo;