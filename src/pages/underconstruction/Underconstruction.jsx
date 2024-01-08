
import { useEffect } from 'react'
import underConstructionImage from '../../../src/assets/underconstruction.jpg'

const Underconstruction = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <section className='min-h-[89dvh] flex items-center justify-center'>
      <div>
        <img src={underConstructionImage} alt="" />
      </div>
    </section>
  )
}

export default Underconstruction