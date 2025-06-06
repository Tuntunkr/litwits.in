import { star } from '../assets/icons'

const PopularProductCard = () => {
  return (
    <>
    
    <section className="bg-red-800 text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">ABOUT LITWITS</h2>
          <p className="mb-4">
            LITWITS has revolutionized the educational landscape by empowering minds of students around the world through teaching critical thinking in diverse methods. These sessions encourage students to think deeply on a broad spectrum of topics, consider multiple perspectives, analyze complex scenarios, and propose innovative solutions.
          </p>
          <p>
            LITWITS students’ ability to think critically, formulate deep and effective questions has led to LITWITS being home to the best speakers, debaters and writers who become leaders with a conscience.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="bg-gray-200 w-full h-full md:w-[85%] md:h-[85%]">
            {/* Image */}
            <img
              src="https://via.placeholder.com/400" // Replace with your image URL
              alt="Student"
              className="absolute bottom-0 right-0 w-[85%] md:w-[100%] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default PopularProductCard