import data from '../../data/data-2023.json'



const Seminars = () => {
  const { seminars } = data
  return (


    <section className="seminars py-6 flex flex-col items-center justify-center text-gray-800" id='teaching'>

      <h2 className='text-4xl sm:text-4xl md:text-5xl font-extrabold p-2 uppercase'>Seminars</h2>

      <p></p>

      <div className="content-wrapper flex flex-wrap gap-2">
        {seminars.map((seminar, i) => (
          <div className="seminar glassmorphism text-center w-full p-2" key={i}>
            <h4>{seminar.title}</h4>
            <p>{seminar.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Seminars