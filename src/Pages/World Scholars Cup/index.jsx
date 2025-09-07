import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./individualessions.css";
import PrizeSlider from "./Prize";
import Contact from "../../sections/Contact";
import Prize11 from "/public/WSCimages/11.png";
import Prize23 from "/public/WSCimages/23.png";
import wsc from "/assets/wsc image.jpeg";
import Prize1 from "/public/WSCimages/1.png";
import worlds from "/worlds.jpeg";

const GroupSess = () => {
  return (
    <section>
      {/* <section
        id="WORLD SCHOLAR’S CUP TRAINING"
        className="relative h-[25vh] w-full flex items-center justify-center text-white overflow-hidden"
        style={{ fontFamily: "'Noto Sans', sans-serif" }}
        role="img"
        aria-label="Group Sessions at LITWITS for Writing, Debate, Public Speaking, and more to foster growth and learning."
        aria-describedby="group-session-description"
      >
        {/* Background Image */}
      {/* <div className="absolute inset-0">
          <img
            src="/assets/wsc-image.jpeg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div> */}

      {/* Overlay (thoda transparent black) */}
      {/* <div className="absolute inset-0 "></div> */}

      {/* Content */}
      {/* <div className="relative z-10 text-center">
          <h2 className="text-[4vw] lg:text-2xl font-bold leading-tight mt-2">
            WORLD SCHOLAR’S CUP TRAINING
          </h2>
        </div>
      </section> */}
      <section className="bg-red-900 h-[20vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center p-8 rounded-lg">
          <h1 className="text-[4vw] lg:text-2xl font-bold leading-tight mt-4 text-white">
            WORLD SCHOLAR’S CUP TRAINING
          </h1>
        </div>
      </section>

      <section className="container py-5">
        {/* LITWITS is at the forefront of World Scholar’s Cup training around
            the globe. */}
        <section
          id="individual-session"
          className="container-fluid mx-auto py-10 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div>
                <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-start uppercase  text-red-700 mb-4">
                  LITWITS is at the forefront of World Scholar’s Cup training
                  around the globe.
                </h2>
                <h5
                  className="text-gray-900 leading-snug sm:leading-8 mt-3"
                  style={{ fontSize: "15px" }}
                >
                  As a testament to our pursuit of excellence, LITWITS has been
                  awarded the World Scholar’s Cup
                  <strong className="text-sm sm:text-base text-gray-900 uppercase">
                    {" "}
                   COACH OF THE YEAR AWARD, 2025
                  </strong>{" "}
                  for our unmatched mentorship, academic leadership, and top
                  rankings across various Regional and Global rounds, and the
                  Grand Finale, Tournament of Champions at Yale University.
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-4">
                  <Link
                    to="https://wa.me/9811701747?text=Hi! I’m interested in your World Scholars Cup Session.Please share details about the program and I request a free consultation."
                    className="bg-red-800 text-white px-4 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                    style={{ fontFamily: "Noto Sans" }}
                  >
                    Free Consultation
                  </Link>

                   <Link
                      to="/membership"
                      className="text-white bg-blue-950 px-6 py-3 w-full no-underline uppercase rounded-md text-base font-medium transition text-center "
                      style={{
                        fontFamily: "Noto Sans",
                      }}
                    >
                      Enroll Now
                    </Link>
                </div>
              </div>

              <div className="rounded-lg shadow-lg w-full overflow-hidden">
                <iframe
                  src="https://www.instagram.com/p/DLo_dbPJ6Gn/embed"
                  className="w-full h-[500px] rounded-lg"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="mb-1">
          {/* <h2 className=" text-center fw-bold text-3xl md:text-5xl mb-3 text-red-700">
            WORLD SCHOLAR’S CUP TRAINING
          </h2> */}
        {/* <p
            className="font-bold leading-relaxed text-gray-900 text-center"
            style={{ fontSize: "15px" }}
          >
            LITWITS is at the forefront of World Scholar’s Cup training around
            the globe.
          </p>
          <h5
            className="leading-relaxed text-gray-900"
            style={{ fontSize: "15px" }}
          >
            As a testament to our pursuit of excellence, LITWITS has been
            awarded the World Scholar’s Cup
            <strong className="text-sm sm:text-base text-gray-900">
              {" "}
              Coach of the Year Award, 2025
            </strong>{" "}
            for our unmatched mentorship, academic leadership, and top rankings
            across various Regional and Global rounds, and the Grand
            Finale,Tournament of Champions at Yale University.
          </h5>
        </div> */}
        <div>
          <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700 text-center uppercase">
            World Scholar's Cup Awards
          </h3>
          {/* <p className=" text-gray-900 mb-0" style={{ fontSize: "15px" }}>
            Let’s just say our trophy shelves are crowded. A few highlights:
          </p> */}
          <section className="container-fluid p-0 mb-2 mt-2">
            <PrizeSlider />
          </section>
          <p className=" text-gray-900" style={{ fontSize: "15px" }}>
            Learn more about our achievements in WSC:
            <a href="/WSCimages/LITWITSACHIEVEMENTS.pdf" download>
              <span className="text-blue-500 "> click here </span>
            </a>
          </p>
        </div>
        <div className="">
          <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700 uppercase">
            What is the World Scholar’s Cup (WSC)?
          </h3>
          <p className=" text-gray-900 " style={{ fontSize: "15px" }}>
            The World Scholar’s Cup isn't just a competition. It’s a launchpad
            for global dominance.
          </p>
          <p
            className=" leading-relaxed text-gray-900"
            style={{ fontSize: "15px" }}
          >
            You don’t just study a syllabus - you dive into a universe. One
            moment you’re exploring whether artists are the new explorers “they
            just use paint instead of ships”, and the next, you’re writing about
            why some mysteries are better left unsolved. Want to challenge
            history? Try making a case for the unsung discoveries that didn’t
            make it into textbooks. Or get philosophical with a prompt like:
            “When a story tells you something, it’s also hiding something.”
          </p>
          <p
            className="leading-relaxed text-gray-900"
            style={{ fontSize: "15px" }}
          >
            And just when you think you’ve caught your breath, along comes the
            Scholar’s Bowl - where you team up, hit buzzers, and try to figure
            out how a Shakespeare quote connects to a Brooklyn Nine-Nine scene.
            Yes, that actually happens.
          </p>
          <p
            className=" leading-relaxed text-gray-900"
            style={{ fontSize: "15px" }}
          >
            Oh, and did we mention the alpacas that lead to hours of high-stakes
            negotiations over color swaps, ownership, and trading rights? Let’s
            just say diplomacy has never been more rewarding.
          </p>
          <p
            className=" leading-relaxed text-gray-900"
            style={{ fontSize: "15px" }}
          >
            At the end of January, every year, a new theme is released that
            tackles six interdisciplinary subjects - like History, Literature,
            Social Studies, Art & Music, Science, and a wildcard Special Area.
            It's serious fun, and it's seriously rewarding when done right.
          </p>
          <p
            className="leading-relaxed text-gray-900"
            style={{ fontSize: "15px" }}
          >
            For the 2025 WSC curriculum, click
            <span className="text-blue-500 text-sm sm:text-base"> here</span>.
          </p>
        </div>

        <div className="">
          <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700 uppercase">
            What are the Events of the World Scholar’s Cup?
          </h3>
          <p
            className="mt-2 mb-4  leading-relaxed text-gray-900"
            style={{ fontSize: "15px" }}
          >
            Students from over 70 countries compete in four events:
          </p>

          {/* image */}
          <div className="w-full h-[500px] mb-3">
            <img
              src={wsc}
              alt="World Scholar’s Cup Events"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Team Debate:- </strong>
                <span style={{ marginLeft: "8px" }}>
                  {" "}
                  Speak your mind. Think on your feet.
                </span>
              </Accordion.Header>
              <Accordion.Body className="text-gray-900">
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Three members in a team. Three debates of thrilling
                    argumentation.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Motions pulled from every corner of the curriculum – expect
                    the unexpected.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    15 minutes to brainstorm, plan, and maybe panic (just a
                    little).
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Each scholar speaks for up to 4 minutes.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Gadgets are permitted in the first two rounds, but not the
                    final round.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong>Collaborative Writing:-</strong>
                <span style={{ marginLeft: "8px" }}>
                  Craft brilliant essays, then make them better with your team.
                </span>
              </Accordion.Header>
              <Accordion.Body className="text-gray-900">
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Three prompts per team—one for each curious mind.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Brainstorm as a team.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Draft your piece individually, then huddle again to refine
                    and review.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <strong>Scholar’s Challenge:-</strong>
                <span style={{ marginLeft: "8px" }}>
                  A deceptively tricky quiz where more than one answer seems to
                  be right.
                </span>
              </Accordion.Header>
              <Accordion.Body className="text-gray-900">
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    120 questions. 60 minutes for Regional Rounds.{" "}
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    120 questions. 75 minutes for Global Rounds.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Every question? Trickier than it seems.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Multiple answers may be correct, but fewer choices mean more
                    points.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    A test of knowledge, intuition, and strategy.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <strong>Scholar’s Bowl:-</strong>
                <span style={{ marginLeft: "8px" }}>
                  A multimedia team quiz with music, memes, strategy, and speed.
                </span>
              </Accordion.Header>
              <Accordion.Body className="text-gray-900">
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Teams gather in the arena, armed with clickers and courage.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Multimedia madness: memes, music, mystery.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    Each question digs deeper, reaching across subjects.
                  </li>
                  <li className="text-gray-900" style={{ fontSize: "15px" }}>
                    It’s fast, it’s fun, it’s wonderfully unpredictable.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <p
          className="mt-4  leading-relaxed text-gray-900"
          style={{ fontSize: "15px" }}
        >
          These events aren’t just exciting - they’re demanding. They require
          sharp thinking, smart strategy, and serious preparation.
          <br />
          LITWITS leads the way.
        </p>
        <p
          className="  leading-relaxed text-gray-900"
          style={{ fontSize: "15px" }}
        >
          We don’t just help you sign up - we build champions. From forming
          competitive teams to delivering top-tier World Scholar’s Cup training
          across all four events, LITWITS is where serious Scholars go to excel.
        </p>
        <p
          className="leading-relaxed text-gray-900"
          style={{ fontSize: "15px" }}
        >
          Because excellence isn’t luck. At LITWITS, excellence is a habit.
        </p>
        <div>
          <Link to={"/contact-us"}>
            <button
              className="bg-red-800 text-white px-4 py-3 no-underline uppercase rounded-md text-base font-medium hover:bg-red-700 transition text-center"
              style={{ fontFamily: "Noto Sans" }}
            >
              Book a Consultation
            </button>
          </Link>
        </div>

        {/* <div className="w-full h-[500px] mb-3">
          <img
            src={Prize1}
            alt="World Scholar’s Cup Events"
            className="w-full h-full object-cover object-center"
          />
        </div> */}

        <section
          id="individual-session"
          className="container-fluid mx-auto py-10 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-start uppercase  text-red-700 mb-4">
                  World Scholar’s Cup Eligibility
                </h2>
                <p
                  className=" leading-relaxed text-gray-900"
                  style={{ fontSize: "15px" }}
                >
                  The World Scholar’s Cup is open to all students and LITWITS is
                  here to make the journey easier. Whether you are signing up
                  solo or with friends:
                </p>
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li
                    className="mb-3 text-gray-900 leading-relaxed"
                    style={{ fontSize: "15px" }}
                  >
                    Register with LITWITS
                  </li>
                  <li
                    className="mb-3 text-gray-900 leading-relaxed"
                    style={{ fontSize: "15px" }}
                  >
                    Form a super team with the help of our diverse and talented
                    student network
                  </li>
                  <li
                    className="mb-3 text-gray-900 leading-relaxed"
                    style={{ fontSize: "15px" }}
                  >
                    {" "}
                    Train strategically with LITWITS, with expert guidance and
                    resources tailored for every WSC event.
                  </li>
                </ul>
                <p
                  className=" text-gray-900 leading-relaxed"
                  style={{ fontSize: "15px" }}
                >
                  You can participate as:
                </p>

                <ul className="list-disc list-inside mb-6 pl-5">
                  <li
                    className="mb-3 text-gray-900 "
                    style={{ fontSize: "15px" }}
                  >
                    A school-affiliated team.
                  </li>

                  <li
                    className="mb-3 text-gray-900 leading-relaxed"
                    style={{ fontSize: "15px" }}
                  >
                    An independent team (LITWITS will pair you with like-minded
                    scholars to form a competitive team across all rounds)
                  </li>
                </ul>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-6">
                    <Link
                    to="https://wa.me/9811701747?text=Hi! I’m interested in your World Scholars Cup Session.Please share details about the program and I request a free consultation."
                    className="bg-red-800 text-white px-4 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                    style={{ fontFamily: "Noto Sans" }}
                  >
                    Free Consultation
                  </Link>

                    <Link
                      to="/membership"
                      className="text-white bg-blue-950 px-6 py-3 w-full no-underline uppercase rounded-md text-base font-medium transition text-center "
                      style={{
                        fontFamily: "Noto Sans",
                      }}
                    >
                      Enroll Now
                    </Link>
                  </div>
              </div>
              <img
                src={Prize1}
                alt="Defining unique identity through passion, strengths, and potential."
                title="Defining Your Unique Identity with LITWITS"
                aria-label="Defining Your Unique Identity with LITWITS"
                aria-describedby="Guided self-discovery through psychometric assessments and reflective activities to align personal goals and academic aspirations."
                style={{ height: "550px" }}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        <div className="">
          {/* <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700 uppercase">
            World Scholar’s Cup Eligibility
          </h3>
          <p
            className=" leading-relaxed text-gray-900"
            style={{ fontSize: "15px" }}
          >
            The World Scholar’s Cup is open to all students and LITWITS is here
            to make the journey easier. Whether you are signing up solo or with
            friends:
          </p>
          <ul className="list-disc list-inside mb-6 pl-5">
            <li
              className="mb-3 text-gray-900 leading-relaxed"
              style={{ fontSize: "15px" }}
            >
              Register with LITWITS
            </li>
            <li
              className="mb-3 text-gray-900 leading-relaxed"
              style={{ fontSize: "15px" }}
            >
              Form a super team with the help of our diverse and talented
              student network
            </li>
            <li
              className="mb-3 text-gray-900 leading-relaxed"
              style={{ fontSize: "15px" }}
            >
              {" "}
              Train strategically with LITWITS, with expert guidance and
              resources tailored for every WSC event.
            </li>
          </ul>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            You can participate as:
          </p>

          <ul className="list-disc list-inside mb-6 pl-5">
            <li className="mb-3 text-gray-900 " style={{ fontSize: "15px" }}>
              A school-affiliated team.
            </li>

            <li
              className="mb-3 text-gray-900 leading-relaxed"
              style={{ fontSize: "15px" }}
            >
              An independent team (LITWITS will pair you with like-minded
              scholars to form a competitive team across all rounds)
            </li>
          </ul> */}
          <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700 uppercase">
            <strong> Eligibility Criteria:</strong>
          </h3>
          <ul className="list-disc list-inside mb-6 mt-2 space-y-4">
            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1  whitespace-nowrap">
                Skittles:
              </span>
              <span>
                Events are held in select countries for students 10 and younger
                only; these younger scholars are also welcome in the standard
                Junior Division.
              </span>
            </li>
            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1  whitespace-nowrap">
                Junior Division:
              </span>
              <span>Students aged 11 to 13</span>
            </li>
            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1  whitespace-nowrap">
                Senior Division:
              </span>
              <span>
                Students aged 14 and above (For 2025: any student who turns 14
                by January 1, 2025 (i.e. born before January 1, 2011) will be
                considered a senior division student.)
              </span>
            </li>
          </ul>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            WSC values diversity, inclusivity, and the curiosity to engage with
            complex ideas.
          </p>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            The program is open to both new and returning participants.
          </p>
        </div>

        <div className="w-full h-[500px] mb-3">
          <a
            href=" https://www.scholarscup.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={worlds}
              alt="World Scholar’s Cup Events"
              className="w-full h-full object-cover object-center"
            />
          </a>
        </div>

        <div className="mb-7">
          <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700 uppercase">
            How to Join the World Scholar’s Cup?
          </h3>
          <p
            className="mt-2  text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            Joining the World Scholar’s Cup involves a few simple steps:
          </p>

          <ul className="mt-2 space-y-4">
            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1 whitespace-nowrap">
                Form a Team:
              </span>
              <span>
                If you're an individual participant, LITWITS will help you form
                one by connecting you with other interested students.
              </span>
            </li>

            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1 whitespace-nowrap">
                Select a Regional Round:
              </span>
              <span>
                Find a round convenient for your location and check the
                registration deadlines.
              </span>
            </li>

            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1 whitespace-nowrap">
                Register Your Team:
              </span>
              <span>
                Visit the official website to register. You’ll need basic team
                details and a payment method.
              </span>
            </li>

            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1 whitespace-nowrap">
                Begin Preparation:
              </span>
              <span>
                Once registered, download the curriculum and begin studying the
                six subjects. Teams typically spend time preparing for debates,
                writing sessions, and the quiz-based events.
              </span>
            </li>

            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1 whitespace-nowrap">
                Compete in Your Round:
              </span>
              <span>
                Attend your selected Regional Round. If your team qualifies, you
                can progress to the Global Rounds.
              </span>
            </li>

            <li className="relative pl-5 text-gray-900 leading-relaxed text-[15px] flex before:content-['•'] before:absolute before:left-0 before:text-black">
              <span className="font-bold mr-1 ">
                Advance to the Tournament of Champions:
              </span>
              <span>
                Teams that excel at Globals shall be invited to participate at
                Yale.
              </span>
            </li>
          </ul>
        </div>

        {/* Official Launchpad to WSC Success */}

        <section
          id="individual-session"
          className="container-fluid mx-auto py-10 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={Prize11}
                alt="Defining unique identity through passion, strengths, and potential."
                title="Defining Your Unique Identity with LITWITS"
                aria-label="Defining Your Unique Identity with LITWITS"
                aria-describedby="Guided self-discovery through psychometric assessments and reflective activities to align personal goals and academic aspirations."
                style={{ height: "650px" }}
                className="rounded-lg shadow-lg w-full"
              />
              <div>
                <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-start uppercase  text-red-700 mb-4">
                  LITWITS: Your Official Launchpad to WSC Success
                </h2>
                <p
                  className=" text-gray-900 leading-relaxed"
                  style={{ fontSize: "15px" }}
                >
                  <strong>
                    If you’re serious about the World Scholar’s Cup, LITWITS is
                    your destination.
                  </strong>
                </p>
                <p
                  className=" text-gray-900 leading-relaxed"
                  style={{ fontSize: "15px" }}
                >
                  We’re not here to spoon-feed facts or toss you a syllabus and
                  wish you luck. We’re here to make you fall in love with
                  learning, and turn you into the kind of scholar who walks into
                  a debate room or writing hall knowing exactly what to do.
                </p>
                <p
                  className=" text-gray-900 leading-relaxed"
                  style={{ fontSize: "15px" }}
                >
                  Whether you're just starting your WSC journey or aiming for
                  that Yale podium, LITWITS is where preparation meets
                  transformation.
                </p>
                <p
                  className=" text-gray-900 leading-relaxed"
                  style={{ fontSize: "15px" }}
                >
                  You shall discover that debate can be thrilling, writing can
                  be powerful, and even the trickiest multiple-choice questions
                  can feel like a game when you know how to think, not just what
                  to remember.
                </p>
                <p
                  className=" text-gray-900 leading-relaxed"
                  style={{ fontSize: "15px" }}
                >
                  At LITWITS, preparation isn’t about stress or feeling
                  overwhelmed. It’s about building mastery through momentum -
                  bit by bit, session by session - until performance becomes
                  second nature. You’ll get the structure, strategy, and
                  community you need to not just survive WSC, but to thrive in
                  it. To walk into any round and say, “I’ve got this.”
                </p>
                <p
                  className=" text-gray-900 leading-relaxed"
                  style={{ fontSize: "15px" }}
                >
                  Because we don’t just teach. We train, team up, mentor, and
                  guide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-6">
                  <Link
                    to="https://wa.me/9811701747?text=Hi! I’m interested in your World Scholars Cup Session.Please share details about the program and I request a free consultation."
                    className="bg-red-800 text-white px-4 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                    style={{ fontFamily: "Noto Sans" }}
                  >
                    Free Consultation
                  </Link>

                  <Link
                    to="/membership"
                    className="text-white bg-blue-950 px-6 py-3 w-full no-underline uppercase rounded-md text-base font-medium transition text-center "
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

        {/* <div className="mb-3">
          <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700">
            LITWITS: Your Official Launchpad to WSC Success
          </h3>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            <strong>
              If you’re serious about the World Scholar’s Cup, LITWITS is your
              destination.
            </strong>
          </p>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            We’re not here to spoon-feed facts or toss you a syllabus and wish
            you luck. We’re here to make you fall in love with learning, and
            turn you into the kind of scholar who walks into a debate room or
            writing hall knowing exactly what to do.
          </p>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            Whether you're just starting your WSC journey or aiming for that
            Yale podium, LITWITS is where preparation meets transformation.
          </p>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            You shall discover that debate can be thrilling, writing can be
            powerful, and even the trickiest multiple-choice questions can feel
            like a game when you know how to think, not just what to remember.
          </p>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            At LITWITS, preparation isn’t about stress or feeling overwhelmed.
            It’s about building mastery through momentum - bit by bit, session
            by session - until performance becomes second nature. You’ll get the
            structure, strategy, and community you need to not just survive WSC,
            but to thrive in it. To walk into any round and say, “I’ve got
            this.”
          </p>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            Because we don’t just teach. We train, team up, mentor, and guide.
          </p>
          <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700">
            Here’s what you get with us:
          </h3>

          <ul className="list-disc list-outside pl-6 mt-2 space-y-4">
            <li className="text-gray-900">
              <strong className=" block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                Engaging, high-energy sessions
              </strong>

              <p
                className=" mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                We don’t do boring! Our classes are part discussion, part
                exploration, part “wait, how did we just talk for an hour about
                time travel and war ethics?” Every session is structured but
                never stiff. Whether we're breaking down the latest topic
                update, reacting to wild hypothetical debates, or workshopping
                an essay in real time, students are in it - asking questions,
                challenging each other, and building ideas that actually stick.
              </p>
              <p
                className=" text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                We take big topics and make them feel personal. Thought
                experiments, real-world applications, open-floor debates - it’s
                a classroom where curiosity doesn’t just survive, it thrives.
                Students leave sessions not just more informed, but more excited
                to keep learning.
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                A strong, smart community
              </strong>
              <p
                className=" mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                This isn’t a solo journey. At LITWITS, you’re surrounded by a
                tribe of thinkers, speakers, writers, and world-class
                overthinkers (in the best way possible). You'll meet students
                from across cities, countries, and backgrounds, all united by a
                shared love for learning and a genuine desire to grow.
              </p>
              <p
                className=" text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                We’ve had teams that started as strangers and ended up
                celebrating wins together at Yale. We've watched in-session
                debate prep turn into lifelong friendships. It’s the kind of
                community where you’re challenged to do better, and cheered on
                when you do.
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                Expert feedback that actually helps
              </strong>
              <p
                className=" mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                We don’t believe in sugarcoating or vague compliments. When we
                say “great point” we’ll tell you why it worked. And when
                something needs improvement, we don’t leave you guessing; we
                show you exactly how to strengthen it.
              </p>
              <p
                className=" text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                From dissecting your arguments line by line to helping you
                reframe an entire essay intro, our mentors provide detailed,
                actionable, and personalized feedback that builds your skills
                without breaking your confidence. It’s high standards with high
                support because that’s what growth really looks like.
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                Practice that feels purposeful
              </strong>
              <p
                className=" mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                We believe prep should feel less like “more work” and more like
                “real progress”. That’s why we simulate actual WSC rounds, run
                team quizzes, host mock debates, and assign writing prompts that
                make your brain do somersaults in the best way possible.
              </p>
              <p
                className=" text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                You’ll learn how to manage pressure, pace yourself during
                challenges, and handle curveballs mid-debate. And every single
                task is backed by strategy, so you know why you’re doing what
                you’re doing.
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                Results without burnout
              </strong>
              <p
                className=" mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                Yes, we aim high for excellence. But we also keep things human.
                We help students plan their prep smartly, balancing consistency
                with mental bandwidth. Whether you’re juggling school exams or
                just having an off day, we make the journey sustainable, without
                ever compromising on excellence.
              </p>
            </li>
          </ul>
        </div> */}
        <div className="mb-7">
          <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700 uppercase">
            We have the resources you’ve been looking for:
          </h3>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-4">
            <li className="text-gray-900">
              <strong className="block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                WSC Curriculum Document
              </strong>
              <p
                className=" mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                We don’t just tell you to “go study the syllabus.” We break it
                down for you. Our curriculum documents are detailed, topic-wise
                study guides packed with clear explanations, memorable examples,
                and revision-friendly layouts. Whether you need a quick refresh
                before Global or a deep dive into obscure concepts, this is your
                go-to manual.
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                WSC Quiz Document
              </strong>
              <p
                className="mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                Topic-wise practice quizzes that mimic the Scholar’s Challenge
                in tone and trickiness. Perfect for brushing up, revision, and
                realizing just how much you didn’t know before (and how much you
                can master with the right prep).
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                WSC Writing Prompts Document
              </strong>
              <p
                className=" mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                A bank of creative and argumentative prompts across themes. Use
                them to brainstorm, practice team writing, or just embrace the
                chaos of trying to craft a thesis in 20 minutes. Writing under
                pressure has never felt this doable or this fun.
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="block  text-base  mb-3 mt-4 text-gray-900 md:text-xl">
                WSC Debate Motions Document
              </strong>
              <p
                className=" mt-2 text-gray-900 leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                A carefully curated list of WSC-style motions, complete with
                framing suggestions, prep angles, and unexpected twists. Ideal
                for mock rounds, solo practice, or that pesky voice in your head
                that often whines, “I have no idea what to say!”
              </p>
            </li>
          </ul>

          {/* What’s it like to be part of LITWITS? */}

          <section
            id="individual-session"
            className="container-fluid mx-auto py-10 bg-white"
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-start uppercase  text-red-700 mb-4">
                    What’s it like to be part of LITWITS?
                  </h2>
                  <p
                    className=" text-gray-900 leading-relaxed"
                    style={{ fontSize: "15px" }}
                  >
                    It’s intense, yes, but also highly rewarding. One day you’ll
                    be untangling philosophical dilemmas. Next, you’ll be
                    laughing your way through mock debates about whether emojis
                    are destroying language.
                  </p>
                  <p
                    className=" text-gray-900 leading-relaxed"
                    style={{ fontSize: "15px" }}
                  >
                    Students grow more confident, more articulate, and more
                    curious with zero pressure to be perfect. Just the right
                    push to be excellent.
                  </p>
                  <p
                    className=" text-gray-900 leading-relaxed"
                    style={{ fontSize: "15px" }}
                  >
                    And parents, you’ll see your child develop skills that
                    matter way beyond the competition: critical thinking,
                    teamwork, communication, time management, and a genuine love
                    for learning. Not to mention the confidence that comes from
                    owning a room with your ideas.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-6">
                     <Link
                    to="https://wa.me/9811701747?text=Hi! I’m interested in your World Scholars Cup Session.Please share details about the program and I request a free consultation."
                    className="bg-red-800 text-white px-4 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                    style={{ fontFamily: "Noto Sans" }}
                  >
                    Free Consultation
                  </Link>

                    <Link
                      to="/membership"
                      className="text-white bg-blue-950 px-6 py-3 w-full no-underline uppercase rounded-md text-base font-medium transition text-center "
                      style={{
                        fontFamily: "Noto Sans",
                      }}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
                <img
                  src={Prize23}
                  alt="Defining unique identity through passion, strengths, and potential."
                  title="Defining Your Unique Identity with LITWITS"
                  aria-label="Defining Your Unique Identity with LITWITS"
                  aria-describedby="Guided self-discovery through psychometric assessments and reflective activities to align personal goals and academic aspirations."
                  style={{ height: "450px" }}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700">
            What’s it like to be part of LITWITS?
          </h3>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            It’s intense, yes, but also highly rewarding. One day you’ll be
            untangling philosophical dilemmas. Next, you’ll be laughing your way
            through mock debates about whether emojis are destroying language.
          </p>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            Students grow more confident, more articulate, and more curious with
            zero pressure to be perfect. Just the right push to be excellent.
          </p>
          <p
            className=" text-gray-900 leading-relaxed"
            style={{ fontSize: "15px" }}
          >
            And parents, you’ll see your child develop skills that matter way
            beyond the competition: critical thinking, teamwork, communication,
            time management, and a genuine love for learning. Not to mention the
            confidence that comes from owning a room with your ideas.
          </p> */}
        </div>
        <h3 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug mb-3 mt-5 text-red-700 uppercase">
          What are you waiting for?
        </h3>

        <p className=" text-gray-900" style={{ fontSize: "15px" }}>
          Whether you're forming your first team or chasing Yale, we’ve got your
          back.
        </p>
        <ul className="list-disc list-inside mb-2 pl-5">
          <li className="mb-2 text-gray-900" style={{ fontSize: "15px" }}>
            Need help finding teammates?
          </li>
          <li className="mb-2 text-gray-900 " style={{ fontSize: "15px" }}>
            Want to join our discovery session?
          </li>
          <li className="mb-2 text-gray-900 " style={{ fontSize: "15px" }}>
            Curious to see our schedule or resource samples?
          </li>
        </ul>
      </section>
      <section className="">
        <Contact />
      </section>
    </section>
  );
};

export default GroupSess;
