import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <div>Contact</div>
  )
}

export default Contact