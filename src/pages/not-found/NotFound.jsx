import { useEffect } from "react"

const NotFound = () => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <section className="min-h-[89dvh] bg-[url('../../../src/assets/Oops.jpg')] bg-contain bg-no-repeat bg-center text-center">
            <h1 className="text-7xl">NOT FOUND</h1>
        </section>
    )
}

export default NotFound