
import { motion } from 'framer-motion';
const About = () => {
  return (
    <section className="about flex flex-col rounded-xl min-h-[95dvh] p-4 overflow-hidden after:blur-sm" id='about'>

      <div className='flex-[1] flex flex-col items-center justify-center w-full h-full'>

        <div className='flex-[1] flex items-center justify-center w-full'>
          <h2 className='text-4xl font-extrabold text-center w-full'>
            {"ABOUT".split('').map((l, i) => (
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

        <div className='flex-[4] w-full h-full text-center sm:text-left flex flex-col sm:flex-row items-center justify-evenly'>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className='w-[50%] sm:flex-[2] flex items-center justify-center'>

            <img src="https://firebasestorage.googleapis.com/v0/b/storage-15.appspot.com/o/assets%2Fmy%20photo%204.webp?alt=media&token=40dd4813-8f8d-434f-bb6b-9ca80cbf8ab1" alt="mine pic"
              className='w-full lg:w-[80%]'
            />
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 40 }}
            className='sm:flex-[4] xl:flex-[6] flex items-center justify-center'>
            <p className='text-2xl sm:text-4xl sm:leading-relaxed leading-relaxed w-[70%] tracking-normal font-semibold p-5'>
              I have been fortunate enough to be one of the team of the Animal Production Research Institute since 2012 till now.
              <span className='hidden sm:inline-block'>

              </span>
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default About