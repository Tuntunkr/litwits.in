import { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Group.css";
import Entrepreneurship from "/Entrepreneurship.jpeg";
import mdl from "/image-model.png";
import Debate from "/debate.jpeg";
import world from "/worlds.jpeg";
import competition from "/competition.jpeg";
import financial from "/financial.jpg";
import Writing from "/Writing.jpeg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
        <title>Group Sessions for Writing, Debate, & Entrepreneurship | LITWITS </title>
        <meta
          name="description"
          content="Enhance your skills with LITWITS' Group Sessions in Writing, Debate, Public Speaking, Entrepreneurship, Financial Literacy, and World Scholar Cup. Enroll now for academic success and personal growth!"
        />
        <meta name="keywords" content="World Scholar’s Cup, Debating and Writing Programs Group Sessions in Writing, Group session" />
        <meta property="og:title" content="Group Sessions for Writing, Debate, & Entrepreneurship | LITWITS" />
        <meta
          property="og:description"
          content="Discover a platform where you can write, discuss, and engage in thought-provoking debates."
        />
        <meta property="og:url" content="https://litwits.com/" />
        <link rel="canonical" href="https://litwits.com/" />
      </Helmet>
   
    <section>
      {/* Hero Section */}

       {/* SEO Meta Tags */}
       
      <section
        id="home"
        className="bg-cover bg-center h-[40vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/frame-11.png')",
          fontFamily: "'Noto Sans', sans-serif",
        }}
      >
        <div className="container mx-auto px-4 text-center bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-[4vw] md:text-[3vw] lg:text-[50px] font-bold mb-4">
            GROUP SESSIONS
          </h1>
        </div>
      </section>

      {/* 2 section  */}

      {/* WRITING */}

      <section
        id="individual-session"
        className="container-fluid mx-auto py-16 bg-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl text-start font-bold text-red-700 uppercase mb-4">
                WRITING
              </h2>
              <p className="text-gray-700">
                Writing is a transformative journey of self-expression and
                creativity to find your unique voice. Our sessions encompass all
                genres, from essays, fiction, and poetry, guiding students on
                fundamental skills to advanced techniques, enriching their
                appreciation for literature and sparking their imagination.
                Through meticulously exploring key elements such as originality,
                clarity, structure, tone, tenor, we empower students to master
                the art of writing and develop enduring proficiency to craft
                captivating narratives.
              </p>
              <br />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full  mx-auto">
                <Link
                  to="/contact-us"
                  className="bg-red-800 text-white px-6 py-3 w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                   Free Consultation
                </Link>
                
                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 w-full rounded-md text-base font-medium transition text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            <img
              src={Writing}
              style={{ height: "280px" }}
              alt="Debate"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* World Scholar's Cup */}
      <section id="voices" className="py-16 bg-gray-50">
        <div
          className="relative flex items-center justify-center h-[495px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${world})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat", // Replace with a proper URL for the image
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
          {/* Dark overlay */}
          <div className="relative text-left text-white max-w-4xl px-4">
            <h1 className="font-nato text-center font-bold text-3xl md:text-5xl mb-4">
              WORLD SCHOLAR’S CUP
            </h1>
            <p className="font-nato text-sm md:text-lg leading-relaxed">
            LITWITS is at the forefront of preparing young scholars for the World Scholar’s Cup (WSC) and consistently holding top rankings in Regional Rounds, Global Rounds, and the finale, the prestigious Tournament of Champions at Yale University. Our comprehensive WSC program immerses students in a dynamic and intellectually enriching environment, encompassing literature, science, politics, history, and the arts.
            </p>
            <p className="font-nato text-sm md:text-lg leading-relaxed mt-3">
            The journey involves preparing teams for the four events - debate, collaborative writing, Scholar’s Challenge and the Scholar’s Bowl.  The rigorous approach sharpens their academic and analytical skills, empowering students to think critically, collaborate seamlessly, and achieve excellence on a global stage.
            </p>
            <div className=" gap-4 w-full max-md items-center  mx-auto mt-12">

                <Link
                  to="/membership"
                  className="bg-red-800 text-white px-6 py-3 w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                   Free Consultation
                </Link>
                
                
              </div>
          </div>
        </div>
      </section>
      {/* SOCIAL IMPACT section  */}
      <section
        id="individual-session"
        className="container-fluid mx-auto py-16 bg-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={Debate}
              style={{ height: "380px" }}
              alt="Debate"
              className="rounded-lg shadow-lg w-full"
            />
            <div>
              <h2 className="text-3xl font-bold text-red-700 uppercase text-start mb-4">
                DEBATE AND PUBLIC SPEAKING
              </h2>
              <p className="text-gray-700">
                Effective Communication is a power skill, not a soft skill. The
                ability to address an audience authentically and powerfully is
                the hallmark of impactful leadership.
              </p>
              <br />
              <p className="text-gray-700">
                Leaders are forged through a balance of IQ and EQ. At LITWITS,
                we foster intellectual growth alongside emotional intelligence.
                Through multiple debating formats centred around
                thought-provoking themes, our students delve into complex
                subjects, critically analyzing global issues with diverse
                perspectives, presenting compelling arguments, creating
                meaningful solutions with their learning to leave a definitive
                mark in the world.
              </p>

              <br />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto">
                <Link
                  to="/contact-us"
                  className="bg-red-800 text-white px-6 py-3 w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                   Free Consultation
                </Link>
                
                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 w-full rounded-md text-base font-medium transition text-center"
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
        className="container-fluid mx-auto py-16 bg-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl text-start font-bold text-red-700 mb-4">
                ENTREPRENEURSHIP SESSION
              </h2>
              <p className="text-gray-700">
                The LITWITS Entrepreneurship Program introduces students to the
                exciting world of business and innovation in an engaging, and
                age-appropriate way. Through interactive sessions and hands-on
                activities, participants explore the basics of
                entrepreneurship—from brainstorming creative ideas and analyzing
                markets to designing products and presenting their vision.
                Real-world examples and relatable case studies bring concepts to
                life, making every session both educational and enjoyable.
              </p>
              <br />
              <p className="text-gray-700">
                Our curriculum encourages students to think critically, solve
                problems creatively, and understand the value of money through
                financial literacy activities. Collaborative projects inspire
                teamwork, communication, and confidence as students work
                together to turn their ideas into actionable plans.
              </p>
              <br />
              <p className="text-gray-700">
                The program also focuses on developing essential life skills
                like leadership, resilience, and adaptability while fostering a
                strong sense of responsibility and ethical decision-making. By
                tackling real-world challenges and exploring socially impactful
                solutions, students learn how to make a difference through their
                entrepreneurial ventures.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                <Link
                  to="/contact-us"
                  className="bg-red-800 text-white px-6 py-3 w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                   Free Consultation
                </Link>
                
                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 w-full rounded-md text-base font-medium transition text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
            <img
              src={Entrepreneurship}
              alt="Debate"
              style={{ height: "570px" }}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
         
        </div>
      </section>
      {/* Writing Section */}

      <section>
        <div
          className="container-fluid relative bg-red-900 py-8"
          style={{
            height: "auto",
            backgroundImage: `url(${financial})`, // Background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // Enables parallax effect
          }}
        >
          {/* Overlay for opacity */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            style={{
              zIndex: 1, // Ensures the overlay is below the text content
            }}
          ></div>

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center"
            style={{ height: "100%" }}
          >
            {/* Text Content */}
            <div>
              <h1 className="font-nato font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">
                FINANCIAL LITERACY SESSION
              </h1>
              <div className="space-y-4">
                <p className="font-nato text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 text-white">
                  The LITWITS Financial Literacy Program is designed to equip
                  students with essential money management skills that will
                  serve them for a lifetime. Through interactive and practical
                  sessions, students learn the fundamentals of earning, saving,
                  budgeting, and investing in a real and approachable way.
                </p>
                <p className="font-nato text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 text-white">
                  Our program introduces key financial concepts such as
                  understanding income, expenses, and the importance of setting
                  financial goals. Students are guided on how to create budgets,
                  track spending, and make informed decisions about money.
                  Hands-on activities, including role-playing scenarios and
                  simulations, help them grasp the impact of financial choices
                  in real-life situations.
                </p>
                <p className="font-nato text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 text-white">
                  The curriculum also emphasizes understanding investments, the
                  basics of banking, and exploring topics like compound
                  interest, debt management, and smart shopping habits, and how
                  to differentiate between needs and wants, instilling a sense
                  of accountability and responsibility in the students.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                <Link
                  to="/contact-us"
                  className="bg-red-800 text-white px-6 py-3 w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                   Free Consultation
                </Link>
                
                <Link
                  to="/membership"
                  className="border border-red-700 text-white bg-black px-6 py-3 w-full rounded-md text-base font-medium transition text-center"
                >
                  Enroll Now
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="individual-session"
        className="container-fluid mx-auto py-16 bg-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={competition}
              alt="Debate"
              style={{ height: "450px" }}
              className="rounded-lg shadow-lg w-full"
            />
            <div>
              <h2 className="text-3xl text-start font-bold uppercase text-red-700 mb-4">
                IVY LEAGUE & PRESTIGIOUS COMPETITIONS
              </h2>
              <p className="text-gray-700">
                We specialize in preparing students for high-stakes
                competitions, including prestigious events such as the Harvard
                and Yale Invitationals, John Locke Essay Competition, Queen's
                Commonwealth Essay Competition, and the Ayn Rand Essay Contest.
              </p>
              <br />
              <p className="text-gray-700">
                Through a structured and supportive framework, students gain the
                rigor and confidence needed to excel under pressure. These
                sessions go beyond academic enhancement, fostering resilience
                and offering invaluable networking opportunities with peers and
                professionals worldwide. Covering a wide spectrum of regional,
                national, and international competitions, we equip students with
                the skills to succeed at every level, ensuring they stand out in
                competitive environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                <Link
                  to="/contact-us"
                  className="bg-red-800 text-white px-6 py-3 w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                   Free Consultation
                </Link>
                
                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 w-full rounded-md text-base font-medium transition text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mun section  */}

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-8 bg-gray-50">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-nato pt-6 font-bold text-center text-red-700 mb-8">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="p-4">
          {/* First Accordion */}
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                As a member, which sessions can I attend?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                All group sessions are open to all members.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How many sessions can I attend in a week?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Members can attend as many sessions as they wish, provided there
                is availability.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What are the timings of the sessions?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Session timings vary. Please check the schedule for specific
                details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What would be the structure of the core sessions?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Core sessions include warm-ups, skill-building activities, and
                group discussions.
              </Accordion.Body>
            </Accordion.Item>

            {/* Second Accordion */}

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Can I convert my Group Session package to Individual Sessions?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Yes, conversion is possible. Please contact support for more
                details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Do you offer trial sessions for the students?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Yes, we offer trial sessions to help students get familiar with
                the program.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </section>
    </>
  );
};

export default GroupSess;
