import { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Group.css";
import Entrepreneurship from "/assets/entrepreneurship-session.avif";
import Debate from "/assets/debate-and-public-speaking.avif";
import world from "/assets/wsc.jpg";
import competition from "/assets/ivy-league-prep.avif";
import financial from "/assets/financial-literacy-session.avif";
import Writing from "/assets/academic-writing-session.avif";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import Individual from "../Sessions/index";

const GroupSess = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "Essential Tips and Tricks",
      description:
        "Explore the fundamentals of writing, gaining valuable insights and practical tips to build a solid foundation in the art of expression.",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "Creative Writing Adventures",
      description:
        "Immerse yourself in dynamic exercises that spark your imagination and allow you to explore the endless possibilities of creative expression.",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "Descriptive Writing Mastery",
      description:
        "Develop your ability to craft vivid narratives in our Descriptive Writing Sessions, learning to paint immersive pictures with words that captivate readers.",
      image: "https://picsum.photos/300/200?random=3",
    },
  ];

  const handlePrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / 3; // Adjust to show 3 cards
      const newSlide = Math.max(0, currentSlide - 1);
      sliderRef.current.scrollTo({
        left: newSlide * cardWidth,
        behavior: "smooth",
      });
      setCurrentSlide(newSlide);
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / 3; // Adjust to show 3 cards
      const newSlide = Math.min(cards.length - 3, currentSlide + 1);
      sliderRef.current.scrollTo({
        left: newSlide * cardWidth,
        behavior: "smooth",
      });
      setCurrentSlide(newSlide);
    }
  };

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / 3; // Adjust to show 3 cards
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  return (
    <>
      <Helmet>
        {/* ✅ Meta Title */}
        <title>
          Group & Individual Sessions for Writing, Debate, SAT Prep & More |
          LITWITS
        </title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Explore LITWITS’ Group & Individual Sessions in Writing, Debate, Public Speaking, Entrepreneurship, Financial Literacy, World Scholar’s Cup, MUN, TED-Ed, Research, AP & SAT/ACT Prep. Expert mentors help you grow academically and personally."
        />

        {/* ✅ Meta Keywords */}
        <meta
          name="keywords"
          content="Litwits sessions
Group sessions Litwits
Individual sessions Litwits
Debate & writing programs
SAT & ACT coaching India
World Scholar’s Cup training
MUN & TED-Ed prep"
        />

        {/* ✅ Open Graph (Social Sharing SEO) */}
        <meta
          property="og:title"
          content="Group & Individual Sessions | LITWITS"
        />
        <meta
          property="og:description"
          content="Description: Learn Writing, Debate, Public Speaking, SAT/ACT Prep, MUN, TED-Ed & more with expert mentors at LITWITS. Join our sessions today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://litwits.in/session" />
        <meta property="og:image" content="https://litwits.com/logo.png" />

        {/* ✅ Twitter Card SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Group & Individual Sessions for Writing, Debate, SAT Prep & More | LITWITS"
        />
        <meta
          name="twitter:description"
          content="Explore LITWITS’ Group & Individual Sessions in Writing, Debate, Public Speaking, Entrepreneurship, Financial Literacy, World Scholar’s Cup, MUN, TED-Ed, Research, AP & SAT/ACT Prep. Expert mentors help you grow academically and personally."
        />
        <meta name="twitter:image" content="https://litwits.com/logo.png" />

        {/* ✅ Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "LITWITS",
            "url": "https://litwits.com",
            "logo": "https://litwits.com/logo.png",
            "description": "Explore LITWITS’ Group & Individual Sessions in Writing, Debate, Public Speaking, Entrepreneurship, Financial Literacy, World Scholar’s Cup, MUN, TED-Ed, Research, AP & SAT/ACT Prep. Expert mentors help you grow academically and personally.",
            "sameAs": [
              "https://www.facebook.com/litwits",
              "https://www.instagram.com/litwits",
              "https://www.linkedin.com/company/litwits"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Group & Individual Sessions",
              "description": "Debate, Writing, SAT & ACT coaching, World Scholar’s Cup, MUN, TED-Ed, Public Speaking, Financial Literacy & more.",
              "url": "https://litwits.com/sessions"
            }
          }
        `}
        </script>
      </Helmet>

      <section>
        <Individual />
      </section>
    </>
  );
};

export default GroupSess;

// Hi! I’m interested in the WSC Program. Please share details about the program and I request a free consultation.
