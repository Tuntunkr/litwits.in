import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"



const CustomReviews = () => {
  return (
    <section className="max-container ">
      <a
        href="https://www.google.com/search?q=litwits+google+reviews" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center mb-10 cursor-pointer"
      >
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={`star-${i}`}
              width="20" 
              height="20" 
              viewBox="0 0 22 22" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-400"
            >
              <path 
                d="M10.0755 1.24162C10.4158 0.416631 11.5842 0.416631 11.9245 1.24162L13.9694 6.20014C14.2507 6.88227 14.8848 7.3541 15.619 7.42766L20.796 7.94636C21.6527 8.03219 22.0077 9.08845 21.3767 9.67424L17.3747 13.3897C16.8594 13.8681 16.6332 14.582 16.7789 15.2699L17.9307 20.7069C18.1132 21.5686 17.1733 22.2283 16.425 21.7638L12.0548 19.051C11.4088 18.6499 10.5912 18.6499 9.94518 19.051L5.57504 21.7638C4.82673 22.2283 3.88681 21.5686 4.06934 20.7069L5.22109 15.2699C5.36681 14.582 5.14058 13.8681 4.62527 13.3897L0.62328 9.67424C-0.00768149 9.08845 0.347297 8.03219 1.20397 7.94636L6.38103 7.42766C7.11522 7.3541 7.74926 6.88227 8.03058 6.20014L10.0755 1.24162Z" 
                fill="currentColor"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          ))}
        </div>
        <p className="text-lg font-semibold font-palanquin text-white">TrustScore 4.8 | 242 reviews</p>
      </a>
      <h3 className="font-palanquin text-center text-4xl font-bold ">
        What Our 
        <span className="text-coral-red"> Customers </span>
        Say ?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us. </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
       {reviews.map((review, index) => (
        <ReviewCard 
          key={index}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
       ))} 

      </div>
    
    </section>
  )
}

export default CustomReviews