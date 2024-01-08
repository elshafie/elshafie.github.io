import { LiaCertificateSolid } from "react-icons/lia";
import Slider from "./Swiper";

import { certificates } from '../../pages/fullstack/fullstack-data'
import { motion } from 'framer-motion';
import Modal from "./Modal";
import { useState } from "react";


const Certificates = () => {

  const [modal, setModal] = useState(false)
  const [group, setGroup] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="w-full min-h-[95dvh] bg-indigo-900/60 rounded-xl">



      <div className="relative flex flex-col flex-[1] w-full">

        <LiaCertificateSolid className="absolute top-2 -right-2 text-6xl md:text-[12rem] md:right-20 md:top-14 rotate-[35deg] text-yellow-400 opacity-80 z-10 animate-pulse" />

        <div className="flex-[1] w-full flex items-center justify-center p-2 py-6 sm:p-4">

          <h2 className='text-2xl text-center md:text-5xl font-extrabold uppercase w-full'>
            {"Certificates".split('').map((l, i) => (
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
          className="flex-[1] w-full text-sm text-center sm:text-base md:w-[70%] leading-tight">
          <p className="text-sm sm:text-base lg:text-xl sm:leading-normal lg:leading-relaxed px-3 sm:px-16 leading-tight">
            I have completed various courses and certifications to enhance my skills in web development, data analysis. Here are some of my achievements and certifications. I'm always eager to learn new skills, so if you have any projects or challenges that could benefit from my expertise, feel free to reach out! I have completed the following certifications:
          </p>
        </motion.div>

        <div className="flex-[4] flex flex-col items-center justify-center pt-4 w-full 2xl:px-8">

          <div className="frontend flex-[1] w-full overflow-hidden">
            <div className="text">
              <h3 className="text-3xl font-extrabold flex items-center justify-center gap-2 py-4">

                {"Front End".split(' ').map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </h3>
            </div>

            <Slider
              data={certificates.frontEnd}
              setGroup={setGroup}
              modal={modal}
              setCurrentIndex={setCurrentIndex}
              setModal={setModal} />

          </div>

          <div className="backend flex-[1] w-full pt-4">
            <div className="text">
              <h3 className="text-3xl font-extrabold flex items-center justify-center gap-2 py-4">
                {"Back End".split(' ').map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </h3>
            </div>

            <Slider
              data={certificates.backEnd}
              setGroup={setGroup}
              setCurrentIndex={setCurrentIndex}
              modal={modal}
              setModal={setModal} />

          </div>

          <div className="backend flex-[1] w-full pt-4">
            <div className="text">
              <h3 className="text-3xl font-extrabold flex items-center justify-center gap-2 py-4">
                {"Other".split(' ').map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </h3>
            </div>

            <Slider
              data={certificates.other}
              setGroup={setGroup}
              setCurrentIndex={setCurrentIndex}
              modal={modal}
              setModal={setModal} />

          </div>
        </div>

        {modal && <Modal setModal={setModal} certificates={group} currentIndex={currentIndex} />}
      </div>
    </section>
  )
}

export default Certificates