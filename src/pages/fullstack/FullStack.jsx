import { About, Landing, Skills, Portfolio, Certificates, Services } from "../../components/fullstack"



const FullStack = () => {



  return (
    <main className="fullstack p-2 2xl:px-8 overflow-hidden">
      <Landing />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Certificates />
    </main>
  )
}

export default FullStack