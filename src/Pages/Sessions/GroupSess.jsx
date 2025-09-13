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
        Group & Individual Sessions for Writing, Debate, SAT Prep & More | LITWITS
      </title>

      {/* ✅ Meta Description */}
      <meta
        name="description"
        content="Explore LITWITS’ Group & Individual Sessions in Writing, Debate, Public Speaking, Entrepreneurship, Financial Literacy, World Scholar’s Cup, MUN, TED-Ed, Research, AP & SAT/ACT Prep. Expert mentors help you grow academically and personally."
      />

      {/* ✅ Meta Keywords */}
      <meta
        name="keywords"
        content="Litwits sessions, Group sessions Litwits, Individual sessions Litwits, Debate & writing programs, SAT & ACT coaching India, World Scholar’s Cup training, MUN & TED-Ed prep"
      />

      {/* ✅ Open Graph (Social Sharing SEO) */}
      <meta property="og:title" content="Group & Individual Sessions for Writing, Debate, SAT Prep & More | LITWITS" />
      <meta
        property="og:description"
        content="Explore LITWITS’ Group & Individual Sessions in Writing, Debate, Public Speaking, Entrepreneurship, Financial Literacy, World Scholar’s Cup, MUN, TED-Ed, Research, AP & SAT/ACT Prep. Expert mentors help you grow academically and personally."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://litwits.com/sessions" />
      <meta property="og:image" content="https://litwits.com/logo.png" />

      {/* ✅ Twitter Card SEO */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Group & Individual Sessions for Writing, Debate, SAT Prep & More | LITWITS"
      />
      <meta
        name="twitter:description"
        content="Explore LITWITS’ Group & Individual Sessions in Writing, Debate, Public Speaking, Entrepreneurship, Financial Literacy, World Scholar’s Cup, MUN, TED-Ed, Research, AP & SAT/ACT Prep."
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
        {/* Hero Section */}

        {/* SEO Meta Tags */}

        <section className="bg-red-900 h-[20vh] flex items-center justify-center">
          <div className="container mx-auto px-4 text-center p-8 rounded-lg">
            <h1 className="text-[4vw] lg:text-2xl font-bold leading-tight mt-4 text-white">
              GROUP SESSIONS
            </h1>
          </div>
        </section>

        {/* 2 section  */}

        {/* WRITING */}

        <section
          id="individual-session"
          className="container-fluid mx-auto py-10 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-start  text-red-700 uppercase mb-2">
                  WRITING
                </h2>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  Writing is a transformative journey of self-expression and
                  creativity to find your unique voice. Our sessions encompass
                  all genres, from essays, fiction, and poetry, guiding students
                  on fundamental skills to advanced techniques, enriching their
                  appreciation for literature and sparking their imagination.
                  Through meticulously exploring key elements such as
                  originality, clarity, structure, tone, tenor, we empower
                  students to master the art of writing and develop enduring
                  proficiency to craft captivating narratives.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full  mx-auto no-underline">
                  <Link
                    to="https://wa.me/9811701747?text=Hi! I’m interested in your Academic Writing Course. Please share details about the program and I request a free consultation."
                    className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Free Consultation
                  </Link>

                  <Link
                    to="/membership"
                    className="text-white bg-blue-950 px-6 py-3 w-full uppercase no-underline rounded-md text-base font-medium transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
              <img
                src={Writing}
                style={{ height: "280px" }}
                alt="Writing Session for mastering self-expression and storytelling."
                className="rounded-lg shadow-lg w-full"
                title="Academic Writing Session at Litwits"
                aria-label="Academic Writing Session at Litwits"
                aria-describedby="A transformative journey guiding students from fundamental skills to advanced techniques in essays, fiction, and poetry, fostering creativity and enhancing literary appreciation."
              />
            </div>
          </div>
        </section>

        {/* World Scholar's Cup */}
        {/* <section id="voices" className="py-10 bg-gray-50">
          <div
            className="relative flex items-center justify-center min-h-[495px] md:h-[495px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${world})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
            }}
            role="img"
            aria-label="World Scholar's Cup training for academic excellence and teamwork."
            aria-describedby="world-scholar-cup-description"
          >
            {/*  Blue overlay instead of black */}
        {/* <div className="absolute inset-0 bg-blue-950/80"></div>

            <div className="relative text-left text-white max-w-5xl px-4 py-10">
              <h1 className="font-noto text-center font-bold text-2xl md:text-5xl mb-2">
                WORLD SCHOLAR'S CUP
              </h1>
              <p className="font-noto text-sm  leading-relaxed">
                LITWITS is at the forefront of World Scholar’s Cup training,
                consistently holding top rankings in Regional Rounds, Global
                Rounds, and the prestigious Tournament of Champions at Yale
                University. Our comprehensive WSC program immerses students in a
                dynamic and intellectually enriching environment, encompassing
                literature, science, politics, history, and the arts.
              </p>
              <p className="font-noto text-sm  leading-relaxed mt-2">
                The journey involves preparing teams for the four events -
                debate, collaborative writing, Scholar's Challenge and the
                Scholar's Bowl. The rigorous approach sharpens their academic
                and analytical skills, empowering students to think critically,
                collaborate seamlessly, and achieve excellence on a global
                stage.
              </p>

              <div className="w-full flex justify-center mt-6">
                <Link
                  to="https://wa.me/9811701747?text=Hi! I’m interested in the WSC Program. Please share details about the program and I request a free consultation"
                  className="bg-red-800 text-white px-6 py-3 uppercase no-underline w-full md:w-auto rounded-md text-sm md:text-base font-medium hover:bg-red-700 transition text-center"
                  style={{
                    fontFamily: "Noto Sans",
                  }}
                >
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Descriptive Content for Accessibility */}
        {/* <p id="world-scholar-cup-description" className="sr-only">
              Comprehensive coaching for the World Scholar's Cup, preparing
              students for debate, collaborative writing, and analytical
              challenges, fostering critical thinking and teamwork.
            </p>
          </div>
        </section> * */}

        {/* SOCIAL IMPACT section  */}
        <section
          id="individual-session"
          className="container-fluid mx-auto py-10 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={Debate}
                alt="Debate and Public Speaking skills for effective communication and leadership."
                title="Debate and Public Speaking with Litwits"
                aria-label="Debate and Public Speaking with Litwits"
                aria-describedby="Empowering students to develop impactful communication skills through thought-provoking themes and global issues, fostering leadership and confident expression."
                style={{ height: "530px" }}
                className="rounded-lg shadow-lg w-full object-cover object-top p-0 m-0"
              />
              <div>
                <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-red-700 uppercase text-start mb-2">
                  DEBATE AND PUBLIC SPEAKING
                </h2>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  Effective Communication is a critical skill, not a soft skill.
                  The hallmark of impactful leadership is the ability to
                  communicate one-on-one and address an audience authentically
                  and powerfully.
                </p>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  Leaders are forged through a balance of IQ and EQ. At LITWITS,
                  we foster intellectual growth alongside emotional
                  intelligence. Through multiple debating formats centred around
                  thought-provoking themes, our students delve into complex
                  subjects, critically analyzing global issues with diverse
                  perspectives, presenting compelling arguments, creating
                  meaningful solutions with their learning to leave a definitive
                  mark in the world.
                </p>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  Our Debate program encompasses various debating formats,
                  fostering critical thinking, constructive argumentation, and
                  effective communication skills, providing students with a
                  comprehensive and well-rounded learning experience.
                </p>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  Each session revolves around specific themes, exploring the
                  environment, social issues, politics, technology, science,
                  literature, art, music and more.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full   mx-auto">
                  <Link
                    to="https://wa.me/9811701747?text=Hi! I’m interested in your Debate and Public Speaking course. Please share details about the program and I request a free consultation."
                    className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Free Consultation
                  </Link>

                  <Link
                    to="/membership"
                    className="text-white bg-blue-950 px-6 py-3 no-underline uppercase w-full  rounded-md text-base font-medium transition text-center"
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Writing Section */}

        {/* Mun section  */}
        <section
          id="individual-session"
          className="container-fluid mx-auto py-10  bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-start text-red-700 mb-2">
                  ENTREPRENEURSHIP SESSION
                </h2>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  The LITWITS Entrepreneurship Program introduces students to
                  the exciting world of business and innovation in an engaging,
                  and age-appropriate way. Through interactive sessions and
                  hands-on activities, participants explore the basics of
                  entrepreneurship—from brainstorming creative ideas and
                  analyzing markets to designing products and presenting their
                  vision. Real-world examples and relatable case studies bring
                  concepts to life, making every session both educational and
                  enjoyable.
                </p>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  Our curriculum encourages students to think critically, solve
                  problems creatively, and understand the value of money through
                  financial literacy activities. Collaborative projects inspire
                  teamwork, communication, and confidence as students work
                  together to turn their ideas into actionable plans.
                </p>

                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  The program also focuses on developing essential life skills
                  like leadership, resilience, and adaptability while fostering
                  a strong sense of responsibility and ethical decision-making.
                  By tackling real-world challenges and exploring socially
                  impactful solutions, students learn how to make a difference
                  through their entrepreneurial ventures.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-6">
                  <Link
                    to="https://wa.me/9811701747?text=Hi! I’m interested in your Entrepreneurship Session. Please share details about the program and I request a free consultation."
                    className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Free Consultation
                  </Link>

                  <Link
                    to="/membership"
                    className="text-white bg-blue-950 px-6 py-3 w-full no-underline uppercase  rounded-md text-base font-medium transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
              <img
                src={Entrepreneurship}
                alt="Entrepreneurship Session for inspiring young innovators and leaders."
                title="Entrepreneurship Session at Litwits"
                aria-label="Entrepreneurship Session at Litwits"
                aria-describedby="Interactive sessions that introduce students to business fundamentals, innovation, and financial literacy, fostering creativity and strategic thinking."
                style={{ height: "570px" }}
                className="rounded-lg shadow-lg w-full object-cover object-top"
              />
            </div>
          </div>
        </section>
        {/* Writing Section */}

        <section
          id="individual-session"
          className="container-fluid mx-auto py-10 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={financial}
                alt="Debate and Public Speaking skills for effective communication and leadership."
                title="Debate and Public Speaking with Litwits"
                aria-label="Debate and Public Speaking with Litwits"
                aria-describedby="Empowering students to develop impactful communication skills through thought-provoking themes and global issues, fostering leadership and confident expression."
                style={{ height: "530px" }}
                className="rounded-lg shadow-lg w-full object-cover object-top p-0 m-0"
              />
              <div>
                <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-red-700 uppercase text-start mb-2">
                  FINANCIAL LITERACY SESSION
                </h2>
                <p
                  className="font-noto   text-gray-700"
                  style={{ fontSize: "15px" }}
                >
                  The LITWITS Financial Literacy Program is designed to equip
                  students with essential money management skills that will
                  serve them for a lifetime. Through interactive and practical
                  sessions, students learn the fundamentals of earning, saving,
                  budgeting, and investing in a real and approachable way.
                </p>
                <p
                  className="font-noto text-gray-700"
                  style={{ fontSize: "15px" }}
                >
                  Our program introduces key financial concepts such as
                  understanding income, expenses, and the importance of setting
                  financial goals. Students are guided on how to create budgets,
                  track spending, and make informed decisions about money.
                  Hands-on activities, including role-playing scenarios and
                  simulations, help them grasp the impact of financial choices
                  in real-life situations.
                </p>
                <p
                  className="font-noto text-gray-700"
                  style={{ fontSize: "15px" }}
                >
                  The curriculum also emphasizes understanding investments, the
                  basics of banking, and exploring topics like compound
                  interest, debt management, and smart shopping habits, and how
                  to differentiate between needs and wants, instilling a sense
                  of accountability and responsibility in the students.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full   mx-auto">
                  <Link
                    to="https://wa.me/9811701747?text=Hi! I’m interested in your Financial Literacy Session.Please share details about the program and I request a free consultation."
                    className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Free Consultation
                  </Link>

                  <Link
                    to="/membership"
                    className="text-white no-underline uppercase bg-blue-950 px-6 py-3 w-full rounded-md text-base font-medium transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div
            className="container-fluid relative bg-red-900 py-8"
            style={{
              height: "auto",
              backgroundImage: `url(${financial})`, // Background image
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Enables parallax effect
            }}
            role="img"
            aria-label="Financial Literacy Session for lifelong financial empowerment."
            aria-describedby="financial-literacy-session-description"
          >
            {/* Overlay for opacity */}
        {/* <div
              className="absolute inset-0 bg-black bg-opacity-50"
              style={{
                zIndex: 1, // Ensures the overlay is below the text content
              }}
            ></div> */}

        {/* Content */}
        {/* <div
              className="relative z-10 w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center"
              style={{ height: "100%" }}
            >
              {/* Text Content */}
        {/* <div>
                <h1 className="font-noto font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 text-center">
                  FINANCIAL LITERACY SESSION
                </h1>
                <div className="space-y-4">

                  <p
                    className="font-noto sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 text-white"
                    style={{ fontSize: "15px" }}
                  >
                    Our program introduces key financial concepts such as
                    understanding income, expenses, and the importance of
                    setting financial goals. Students are guided on how to
                    create budgets, track spending, and make informed decisions
                    about money. Hands-on activities, including role-playing
                    scenarios and simulations, help them grasp the impact of
                    financial choices in real-life situations.
                  </p>
                  <p
                    className="font-noto sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 text-white"
                    style={{ fontSize: "15px" }}
                  >
                    The curriculum also emphasizes understanding investments,
                    the basics of banking, and exploring topics like compound
                    interest, debt management, and smart shopping habits, and
                    how to differentiate between needs and wants, instilling a
                    sense of accountability and responsibility in the students.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                    <Link
                      to="https://wa.me/9811701747?text=Hi! I’m interested in your Financial Literacy Session.Please share details about the program and I request a free consultation."
                      className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center "
                      style={{
                        fontFamily: "Noto Sans",
                      }}
                    >
                      Free Consultation
                    </Link>

                    <Link
                      to="/membership"
                      className="text-white no-underline uppercase bg-blue-950 px-6 py-3 w-full rounded-md text-base font-medium transition text-center "
                      style={{
                        fontFamily: "Noto Sans",
                      }}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div> 
            </div> */}
        {/* Descriptive Content for Accessibility */}
        {/* <p
              id="financial-literacy-session-description"
              className="sr-only"
              style={{ fontSize: "15px" }}
            >
              Practical sessions equipping students with essential money
              management skills, including budgeting, saving, and investing
              through hands-on activities.
            </p>
          </div>
        </section> */}

        <section
          id="individual-session"
          className="container-fluid mx-auto py-10 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug t text-start uppercase text-red-700 mb-2">
                  IVY LEAGUE & PRESTIGIOUS COMPETITIONS
                </h2>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  We specialize in preparing students for high-stakes
                  competitions, including prestigious events such as the Harvard
                  and Yale Invitationals, John Locke Essay Competition, Queen's
                  Commonwealth Essay Competition, and the Ayn Rand Essay
                  Contest.
                </p>
                <p className="text-gray-700" style={{ fontSize: "15px" }}>
                  Through a structured and supportive framework, students gain
                  the rigor and confidence needed to excel under pressure. These
                  sessions go beyond academic enhancement, fostering resilience
                  and offering invaluable networking opportunities with peers
                  and professionals worldwide. Covering a wide spectrum of
                  regional, national, and international competitions, we equip
                  students with the skills to succeed at every level, ensuring
                  they stand out in competitive environments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-6">
                  <Link
                    to="https://wa.me/9811701747?text=Hi! I'm interested in your Ivy League & Prestigious Competitions program. Could you please share the details? I would also like to request a free consultation."
                    className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Free Consultation
                  </Link>

                  <Link
                    to="/membership"
                    className="text-white bg-blue-950 px-6 py-3 w-full no-underline uppercase  rounded-md text-base font-medium transition text-center "
                    style={{
                      fontFamily: "Noto Sans",
                    }}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
              <img
                src={competition}
                alt="Ivy League Prep for success in competitive environments."
                title="Ivy League and Prestigious Competitions at Litwits"
                aria-label="Ivy League and Prestigious Competitions at Litwits"
                aria-describedby="Focused coaching to prepare students for high-stakes competitions such as Harvard/Yale Invitationals, fostering resilience and academic excellence."
                className="rounded-lg shadow-lg w-full h-[450px] object-contain bg-white"
              />
            </div>
          </div>
        </section>
      </section>
      <section>
        <Individual />
      </section>
    </>
  );
};

export default GroupSess;

// Hi! I’m interested in the WSC Program. Please share details about the program and I request a free consultation.
