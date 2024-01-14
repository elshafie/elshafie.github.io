
import { motion } from 'framer-motion';
const CardInfo = ({ children, imgUrl, }) => {
  return (
    <motion.div
      initial={{ x: -100, y: -100, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className='card-box text-center glassmorphism py-2 px-2 text-xl font-bold mx-6 over overflow-hidden flex flex-col  items-center justify-center gap-2 w-[90vw] h-full
     sm:text-lg sm:leading-snug sm:flex-row
      md:w-[75vw]
      lg:w-[72vw]'>

      <div className="image p-2 w-full flex-[1] flex items-center justify-center overflow-hidden
      sm:order-2 ">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{ type: "spring", duration: 0.5 }}
          className=" w-20 h-full object-contain
          sm:w-48 sm:h-full"
          src={imgUrl} alt="My img" />
      </div>

      <div className="text flex flex-col items-center justify-center sm:justify-evenly h-full flex-[3] pt-2
      sm:order-1">
        {children}
      </div>
    </motion.div>
  )
}

export default CardInfo