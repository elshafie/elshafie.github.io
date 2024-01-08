import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BiCodeAlt, BiHome, BiMenu, BiPhone, BiVideo } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { TbMicroscope } from "react-icons/tb"
import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion';



const Navbar = ({ mode, setMode, viewMenu, setViewMenu }) => {
  const MotionLink = motion(NavLink);

  const parentVarients = {
    hidden: {
      opacity: 0,
      scale: 0.94,
      x: 40
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,

      transition: {
        duration: 0.5,
        type: "spring",
        //  mass: 0.3,
        stiffness: 150,
        damping: 10,
        // delayChildren: 0.2,
        staggerChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      x: 40
    }
  }

  const childVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }



  return (
    <header className="sticky top-0 w-full flex justify-between items-center h-[6vh] sm:h-[6dvh] px-4 py-1 z-50 bg-sky-50/95 dark:bg-slate-900/70">

      <div className="logo-icon flex-[1]"
      >
        <NavLink to='/' className='w-28 h-6 items-center justify-center flex font-bold hover:scale-105 transition-all
                sm:w-36 sm:h-8 sm:ml-[2vw]'>
          <p className="blue-gradient_text text-2xl p-0 drop-shadow-lg">ELSHAFIE</p>
        </NavLink>
      </div>

      <div className="dark-toggle flex items-center justify-center flex-[2] sm:flex-[1]">
        {mode === 'light'
          ?
          <div
            className="cursor-pointer w-6 h-6 bg-black rounded-full flex items-center justify-center"
            onClick={() => {
              setMode('dark');
              document.documentElement.classList.remove('light');
              document.documentElement.classList.add('dark')
              localStorage.setItem('mode', 'dark')
            }}>
            <FontAwesomeIcon icon={faMoon} className="text-white text-lg" />
          </div>
          :
          <div
            className="cursor-pointer w-7 h-7 rounded-full flex items-center justify-center"
            onClick={() => {
              setMode('light');
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add('light')
              localStorage.setItem('mode', 'light')
            }}>
            <FontAwesomeIcon icon={faSun} className="text-yellow-400 text-2xl" />
          </div>
        }
      </div>

      <div className={`${viewMenu ? 'fixed' : 'hidden'} top-0 right-0 w-full h-[100vh]
      flex items-center justify-end overflow-hidden
      sm:inline-block sm:static sm:flex-[2] sm:w-full sm:h-full lg:flex-[1]`}
        onClick={() => setViewMenu(false)}
      >

        <motion.nav
          variants={parentVarients}
          initial='hidden'
          whileInView='visible'
          exit='exit'
          // transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          className={`w-[3rem] h-[60dvh] flex flex-col items-center justify-center text-center rounded-[25px_0_0_25px] py-4 overflow-hidden text-sm gap-2 bg-slate-100/90 dark:bg-slate-900/70
        sm:bg-transparent dark:sm:bg-transparent sm:static sm:w-full sm:h-full sm:py-0 sm:flex-row sm:gap-0 sm:font-medium sm:flex-[2]`}>

          <MotionLink
            variants={childVarients}
            initial='hidden'
            whileInView='visible'
            to='/'
            className={({ isActive }) => isActive
              ? 'flex items-center justify-center w-full h-full pt-0 sm:pt-0 -translate-y-1 sm:-translate-y-1 text-violet-800'
              : 'pt-0 sm:pt-0 flex items-center justify-center w-full h-full hover:-translate-y-1 sm:hover:-translate-y-1 hover:text-violet-800  transition-all'
            }
            onClick={() => setViewMenu(false)}
          >
            <BiHome className={`w-8 h-8`} />
          </MotionLink>

          <MotionLink
            variants={childVarients}
            initial='hidden'
            whileInView='visible'
            to='/researcher'
            className={({ isActive }) => isActive
              ? 'flex items-center justify-center w-full h-full pt-0 sm:pt-0 -translate-y-1 sm:-translate-y-1 text-violet-800'
              : 'pt-0 sm:pt-0 flex items-center justify-center w-full h-full hover:-translate-y-1 sm:hover:-translate-y-1 hover:text-violet-800  transition-all'
            }
            onClick={() => setViewMenu(false)}
          >
            <TbMicroscope className={`w-8 h-8`} />
          </MotionLink>

          <MotionLink
            variants={childVarients}
            initial='hidden'
            whileInView='visible'
            to='/fullstack'
            className={({ isActive }) => isActive
              ? 'flex items-center justify-center w-full h-full pt-0 sm:pt-0 -translate-y-1 sm:-translate-y-1 text-violet-800'
              : 'pt-0 sm:pt-0 flex items-center justify-center w-full h-full hover:-translate-y-1 sm:hover:-translate-y-1 hover:text-violet-800  transition-all'
            }>
            <BiCodeAlt className={`w-8 h-8`} />
          </MotionLink>

          <MotionLink
            variants={childVarients}
            initial='hidden'
            whileInView='visible'
            to='/video'
            className={({ isActive }) => isActive
              ? 'flex items-center justify-center w-full h-full pt-0 sm:pt-0 -translate-y-1 sm:-translate-y-1 text-violet-800'
              : 'pt-0 sm:pt-0 flex items-center justify-center w-full h-full hover:-translate-y-1 sm:hover:-translate-y-1 hover:text-violet-800  transition-all'
            }>
            <BiVideo className={`w-8 h-8`} />
          </MotionLink>

          <MotionLink
            variants={childVarients}
            initial='hidden'
            whileInView='visible'
            to='/contact'
            className={({ isActive }) => isActive
              ? 'flex items-center justify-center w-full h-full pt-0 sm:pt-0 -translate-y-1 sm:-translate-y-1 text-violet-800'
              : 'pt-0 sm:pt-0 flex items-center justify-center w-full h-full hover:-translate-y-1 sm:hover:-translate-y-1 hover:text-violet-800  transition-all'
            }>
            <BiPhone className={`w-8 h-8`} />
          </MotionLink>
        </motion.nav>
      </div>

      <div className="sm:hidden flex-[1] flex items-center justify-end text-xl z-50"
      >
        {!viewMenu &&
          <BiMenu className="cursor-pointer" onClick={() => setViewMenu(true)} />}

        {viewMenu &&
          <IoClose className="cursor-pointer" onClick={() => setViewMenu(false)} />}
      </div>

    </header >
  )
}

export default Navbar