import { BiRightArrowAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const Project = ({ project, index }) => {
  const { name, imgUrl, description, skills, repo, live } = project;

  return (
    <motion.div
      initial={{ x: -50, y: -50, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      whileHover={{
        y: -10,
        transition: { type: "just", duration: 0.1 }
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.15 + (index * 0.02)
      }}
      className="flex flex-col items-center justify-between w-full gap-2 sm:w-[40%] lg:w-[30%] xl:w-[23%] sm:h-[28rem] md:h-[25rem] rounded-xl p-2 overflow-hidden hover:shadow-xl glassmorphism">

      <div className="flex-[1] w-full title text-xl font-bold p-2 group">
        <h2 className="cursor-default">{name}</h2>
        <hr className="scale-0 group-hover:scale-100 transition-all" />
      </div>

      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 2 }}
        className="flex-[7] image flex items-center justify-center w-full overflow-hidden">
        <img className="w-full h-full object-contain  rounded-2xl" src={imgUrl} alt={`Screenshot of ${name}`} />
      </motion.div>

      <div className="flex-[4] desc p-2 text-sm leading-4">
        <p>{description}</p>

        <ul className="skills flex flex-wrap items-center justify-center gap-1 text-xs pt-2">
          [{skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}]
        </ul>
      </div>

      <div className="flex-[1] w-full links flex items-center justify-between p-4">
        <div className="flex items-center justify-center">
          <Link to={repo} target="_blank">
            <FaGithub className="text-3xl" />
          </Link>
        </div>

        <div className="w-20 bg-blue-500 rounded-xl h-8 flex items-center justify-center text-lg font-bold">
          <Link to={live} target="_blank" className="flex justify-between items-center w-full px-2">
            <span className="">Live</span>
            <BiRightArrowAlt className="animate-right " />
          </Link>
        </div>
      </div>

    </motion.div>
  )
}

export default Project