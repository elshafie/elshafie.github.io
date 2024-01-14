import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/data-2023.json'
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


const Publications = () => {
  const { publications } = data

  return (
    <section className="publications flex flex-col items-center  justify-center py-6 sm:p-6" id='publications'>

      <div>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold py-4 uppercase'>
          {"Publications".split('').map((l, i) => (
            <motion.span
              initial={{ x: -40, y: -50, opacity: 0 }}
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
        className='p-3 text-center sm:text-left'>
        <p className='text-sm sm:text-lg md:text-2xl tracking-wide leading-tight sm:p-3 md:px-20 md:py-4 sm:text-left'>
          Here is a list of my scientific papers and articles published in academic journals. You can find more information about them on their respective platforms or by contacting me directly.
        </p>
      </motion.div>


      <div className="content-wrapper flex flex-col lg:flex-row  lg:flex-wrap items-center justify-center gap-3 lg:gap-8">
        {publications.map((publication, i) => (
          <motion.div
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
              delay: 0.15 + (i * 0.03)
            }}
            key={i} className='border-[1px] p-3 w-full flex flex-col lg:w-[40%] xl:w-[30%] lg:h-80 xl:h-80 items-center justify-center lg:justify-around gap-1 glassmorphism group'>
            <div className="title w-full flex flex-col flex-[1]">

              <h3 className='text-base sm:text-lg sm:leading-tight text-center tracking-tight pb-2 leading-tight font-semibold group-hover:translate-y-2 transition-all'>
                {publication.title}
              </h3>
              <div className='flex items-start text-center pt-2'>
                <p className='border-2 p-1 w-20 sm:font-bold bg-purple-400/40  rounded-xl'>
                  {publication.type}
                </p>
              </div>

              {publication.type !== 'Article' && <p className="date text-center sm:text-lg font-bold leading-tight"> {publication.releaseDate}</p>}

            </div>

            <div className="publisher leading-tight text-sm sm:text-base sm:font-semibold py-3 flex-[1] flex items-center justify-center">
              <p>{publication.publisher}</p>
            </div>

            <hr className='h-1 w-full ' />

            <Link to={publication.link} target='_blank' className='text-center border-2 p-1 w-24 self-end hover:bg-purple-400/40 hover:font-bold hover:shadow-lg transition-all rounded-xl flex items-center justify-around'>
              Link <FontAwesomeIcon className='animate-right' icon={faArrowRight} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Publications