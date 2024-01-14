import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <section className="min-h-[89dvh] flex items-center justify-center text-center">
      <div className="w-full flex-1">
        <h1>Contact</h1>
      </div>
    </section>
  )
}

export default Contact