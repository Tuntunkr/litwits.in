import React from "react";

const CourseCard = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  isNew,
}) => {
  return (
    <div className="relative bg-gray-900 text-white rounded-xl p-4 shadow-lg w-full sm:w-72 md:w-80 lg:w-96">
      {isNew && (
        <span className="absolute top-2 left-2 bg-purple-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
          New
        </span>
      )}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-blue-400 font-bold text-lg">₹{price}</span>
        <span className="text-gray-400 line-through">₹{originalPrice}</span>
        <span className="bg-green-500 text-black text-sm font-bold px-2 py-1 rounded-md">
          {discount}% off
        </span>
      </div>
    </div>
  );
};

const CourseList = () => {
  const courses = [
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      title: "Data Structures & Algorithms BootCamp @Supreme-3.0",
      price: 3499,
      originalPrice: 7000,
      discount: 50,
      isNew: true,
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      title: "Low Level Design BootCamp @SUPRA Batch",
      price: 2199,
      originalPrice: 4800,
      discount: 57,
      isNew: false,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-black min-h-72">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default CourseList;
