import React from "react";
import Group from "../assets/images/groups.png"; // Update the path as needed
import Individual from "../assets/images/indivisual.png"; // Update the path as needed


const HoverCard = () => {
  const cards = [
    {
      imgSrc: Group,
      title: "Group Session",
      description: "Experience the power of learning together.",
    },
    {
      imgSrc: Individual,
      title: "Individual Session",
      description: "Tailored learning just for you.",
    },

  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-8 bg-red-800 min-h-screen text-white">
      {cards.map((card, index) => (
        <article
          key={index}
          className="group relative aspect-video h-96 w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100"
            src={card.imgSrc}
            alt={card.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60">
            <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
              {card.title}
            </h2>
            <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
              {card.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default HoverCard;
