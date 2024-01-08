import { faCow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import data from '../../data/data-2023.json'
import { motion } from 'framer-motion';

const Experiences = () => {
  return (
    <section className="experiences py-6" id='experiences'>
      <div className='content flex flex-col items-center justify-center'>
        <div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold p-2'>
            {"EXPERIENCES".split('').map((l, i) => (
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


        <div className='w-full'>
          <VerticalTimeline className={`max-w-none before:left-1 before:top-8 before:h-[97%] p-0 py-4`}
          >
            {data.experiences.map((experience, i) => (
              <VerticalTimelineElement
                key={`${experience.position}+${i}`}
                className="vertical-timeline-element--work m-0 mb-5"
                contentStyle={{ background: 'rgb(157 112 225 / 34%)', padding: '1rem', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', borderRadius: '15px' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(157 112 225 / 34%)' }}
                date={`${experience.startDate} to ${experience.endDate ? experience.endDate : 'now'}`}
                iconStyle={{ background: 'rgb(157 112 225)', color: '#fff', width: '2rem', height: '2rem', left: '-10px', top: '5px' }}
                icon={<FontAwesomeIcon icon={faCow} />}
              >
                <h3 className="vertical-timeline-element-title font-extrabold text-lg uppercase leading-tight tracking-wider py-2 sm:text-xl">{experience.position}</h3>

                <h4 className="vertical-timeline-element-subtitle font-normal !leading-none text-sm sm:text-base md:text-lg md:font-semibold " title={experience.title}>{experience.company}</h4>

                <ul className='pt-2 pl-2 leading-none sm:leading-tight text-sm sm:text-base font-light tracking-tight sm:tracking-normal list-disc list-outside marker:text-blue-500/50'>
                  {experience.highlights.map((h, i) => (
                    <li key={`${h[0]}+i`} className='pt-2'>{h}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>

            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section >)
}

export default Experiences