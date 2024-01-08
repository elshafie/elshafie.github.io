
import { useEffect, useState } from 'react'
import { Landing, About, Experiences, Education, Publications, Conferences, Teaching, Training, Seminars, Extension, Skills, Volunteer, Honors } from '../../components/researcher'


import './index.scss'

const Researcher = () => {


  const [progressHeight, setProgressHeight] = useState(0)

  const handleProgress = () => {
    const fullHeight = document.body.clientHeight

    const progressHeight = (((window.scrollY) / (fullHeight - window.innerHeight)) * 100)

    return progressHeight
  }


  useEffect(() => {
    document.addEventListener('scroll', () => {
      const h = handleProgress()
      setProgressHeight(h)
    })

    return (
      document.removeEventListener('scroll', () => {
        handleProgress()
      })
    )
  }, [handleProgress])


  return (
    <main className={`researcher bg-slate-300/30 p-2 min-h-[90vh] font-poppins`}>
      <div className={`progress h-2 fixed bg-blue-600 left-0 top-[5vh] z-50`} style={{ width: progressHeight + '%' }} />

      <Landing />
      <About />
      <Experiences />
      <Education />
      <Publications />
      <Conferences />
      <Teaching />
      <Training />
      {/* <Seminars /> */}
      <Extension />
      <Skills />
      <Volunteer />
      <Honors />
    </main>
  )
}

export default Researcher