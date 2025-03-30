import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import define from "/assets/defining-identity.avif";
import build from "/assets/impactful-profile.avif";
import Craft from "/assets/authentic-applications.avif";
import blueprint from "/assets/blueprint-success.avif";
import Tomeet from "/assets/academic-excellence.avif";
import Mockinterviews from "/assets/mock-interviews.avif";
import The from "/assets/curated-college-list.avif";
import Identifying from "/assets/identifying-goals.avif";
import Informed from "/assets/informed-decision.avif";
import Fit from "/assets/fit-analysis.avif";
import Strategic from "/assets/strategic-plan.avif";
import session from "/assets/book-a-consultation.avif";
import Personalized from "/assets/personalized-feedback.avif";
import Navigating from "/assets/navigating-decisions.avif";
import "./Collage.css";
import AutoSliderSection from "./AutoSliderSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CollegeCounseling = () => {
  const cards = [
    {
      title: "Identifying Your Goals",
      description:
        "We begin by understanding your personal, academic, and professional goals, considering factors like desired majors, career ambitions, campus culture, and extracurricular interests.",
      image: Identifying,
      alt: "Identifying personal and academic goals for strategic college selection.",
      imgTitle: "Identifying Your Goals with LITWITS",
      ariaLabel: "Identifying Your Goals with LITWITS",
      ariaDescribedby:
        "Helping students outline academic and career ambitions to align with the right college choices.",
    },
    {
      title: "Curated College List",
      description:
        "Based on these insights, we curate a list of colleges that align with your values and interests, including top-tier institutions both in your home country and internationally.",
      image: The,
      alt: "Curated College List for tailored university recommendations and academic alignment.",
      imgTitle: "Curated College List- Litwits",
      ariaLabel: "Curated College List- Litwits",
      ariaDescribedby:
        "Based on these insights, we curate a list of colleges that align with your values and interests, including top-tier institutions both in your home country and internationally.",
    },
    {
      title: "Fit Analysis",
      description:
        "We analyze each college's academic offerings, campus life, faculty expertise, and unique opportunities (internships, research, study abroad programs) to ensure they align with your profile and vision for the future.",
      image: Fit,
      alt: "Fit analysis ensuring the perfect academic and personal alignment.",
      imgTitle: "Fit Analysis with LITWITS",
      ariaLabel: "Fit Analysis with LITWITS",
      ariaDescribedby:
        "Comprehensive evaluation of colleges' academic programs, campus life, and faculty expertise.",
    },
    {
      title: "Strategic Application Plan",
      description:
        "We help you prioritize colleges based on factors such as acceptance rates, program strengths, and financial aid options, making the application process more strategic and manageable.",
      image: Strategic,
      alt: "Strategic application planning for manageable admissions steps.",
      imgTitle: "Strategic Application Plan with LITWITS",
      ariaLabel: "Strategic Application Plan with LITWITS",
      ariaDescribedby:
        "Prioritizing college applications based on acceptance rates, program strengths, and goals.",
    },
    {
      title: "Informed Decision-Making",
      description:
        "Once you have your curated list, we assist you in evaluating each school's fit for your long-term goals, ensuring your final decision is an informed one that aligns with both your academic and personal growth.",
      image: Informed,
      alt: "Supporting informed decision-making for academic and career success.",
      imgTitle: "Informed Decision-Making with LITWITS",
      ariaLabel: "Informed Decision-Making with LITWITS",
      ariaDescribedby:
        "Helping students evaluate colleges to make informed decisions aligning with their long-term goals.",
    },
  ];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / 3;
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
        <title>
          Expert College Counseling for Personalized Admissions Guidance
        </title>
        <meta
          name="description"
          content="Navigate the college application journey with LITWITS' personalized counseling. Get expert guidance on college selection, essay writing, test prep, and more!"
        />
        <meta
          name="keywords"
          content="college counseling, personalized college guidance, college application, essay writing, SAT prep, Advanced Placement prep"
        />
        <meta
          property="og:title"
          content="Expert College Counseling for Personalized Admissions Guidance"
        />
        <meta
          property="og:description"
          content="Discover a platform where you can write, discuss, and engage in thought-provoking debates."
        />
        <meta property="og:url" content="https://litwits.in/" />
        <link rel="canonical" href="https://litwits.in/" />

        {/* College counseling SESSIONS */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Litwits",
            url: "https://litwits.in/college-counseling",
            logo: "https://litwits.in/assets/college-counseling.avif",
            description:
              "Navigate the college application journey with LITWITS' personalized counseling. Get expert guidance on college selection, essay writing, test prep, and more!",
            sameAs: [
              "https://www.facebook.com/litwits",
              "https://www.instagram.com/litwits",
              "https://www.linkedin.com/company/litwits",
            ],
            offers: {
              "@type": "Offer",
              name: "College Counseling Sessions",
              description:
                "Comprehensive one-on-one counseling sessions designed for personalized academic and admissions guidance.",
              url: "https://litwits.in/college-counseling",
              availability: "https://schema.org/InStock",
              price: "Contact for pricing",
              priceCurrency: "INR",
            },
            faqPage: {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What does the college counseling program cover?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our counseling covers personalized academic guidance, application strategies, essay writing, SAT/ACT prep, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When should students start counseling sessions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend starting as early as middle school for strategic planning and profile building.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I book a consultation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Visit our website to schedule a personalized consultation and discuss your academic aspirations.",
                  },
                },
              ],
            },
            image: [
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/strategic-plan.avif",
                caption: "Strategic Application Plan with LITWITS",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/impactful-profile.avif",
                caption:
                  "Building a Cohesive and Impactful Profile with LITWITS",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/informed-decision.avif",
                caption: "Informed Decision-Making with LITWITS",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/identifying-goals.avif",
                caption: "Identifying Your Goals with LITWITS",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/blueprint-success.avif",
                caption: "Blueprint for Success with LITWITS",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/authentic-applications.avif",
                caption:
                  "Crafting Authentic and Impactful Applications with LITWITS",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/curated-college-list.avif",
                caption: "Curated College List- Litwits",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/personalized-feedback.avif",
                caption:
                  "Personalized Feedback for Interview Success with LITWITS",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/fit-analysis.avif",
                caption: "Fit Analysis with LITWITS",
              },
              {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/navigating-decisions.avif",
                caption: "Navigating Admissions Decisions with LITWITS",
              },
            ],
            publisher: {
              "@type": "Organization",
              name: "Litwits",
              url: "https://litwits.in",
            },
          })}
        </script>
      </Helmet>

      <section>
        {/* Hero Section */}
        <section
          id="home"
          className="bg-cover bg-center h-[40vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('/assets/college-counseling.avif')",
            fontFamily: "'Noto Sans', sans-serif",
          }}
          role="img"
          aria-label="College Counseling at LITWITS"
          aria-describedby="consultation-description"
        >
          <div className="container mx-auto px-4 text-center bg-opacity-50 p-8 rounded-lg">
            <h1 className="text-[4vw] md:text-[3vw] lg:text-[50px] font-bold mb-4">
              COLLEGE COUNSELING
            </h1>
          </div>

          {/* <!-- Descriptive Content for Accessibility --> */}
          <p id="consultation-description" class="sr-only">
            Comprehensive guidance starting from middle school to help students
            navigate the college admissions process with a clear roadmap.
          </p>
        </section>

        {/* 2 section  */}

        {/* description section */}

        <section
          className="container mx-auto  py-[100px] pb-12 flex flex-col items-start text-left"
          style={{ fontFamily: "'Noto Sans', sans-serif" }}
        >
          {/* Introduction */}
          <p className="text-gray-700 leading-relaxed">
            We understand that navigating the complex college application
            process can be overwhelming. That’s why we offer comprehensive
            college counseling guidance that starts early and provides students
            with a clear roadmap through every step of the journey.
          </p>

          {/* Structured Guidance */}
          <p className="text-gray-700 leading-relaxed mt-4">
            We begin working with students from their formative years—starting
            in middle school, through high school, and guiding them through
            college admissions. Our structured, long-term plan is customized to
            each student’s academic journey, ensuring their strengths, talents,
            and aspirations are reflected in their college applications.
          </p>

          {/* Importance of a Strong Profile */}
          <p className="text-gray-700 leading-relaxed mt-4">
            Building a strong, well-rounded profile is imperative—not only
            demonstrating academic excellence but also showcasing leadership,
            creativity, and a genuine passion for personal and intellectual
            growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg  mt-4">
                    <Link
                      to="https://wa.me/7827098747?text=Hi! I’m interested in your Financial Literacy Session.Please share details about the program and I request a free consultation."
                      className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                    >
                      Free Consultation
                    </Link>

                    {/* <Link
                      to="/membership"
                      className="border border-red-700 text-white no-underline uppercase bg-black px-6 py-3 w-full rounded-md text-base font-medium transition text-center"
                    >
                      Enroll Now
                    </Link> */}
                  </div>
        </section>

        {/* description section */}

        {/* WRITING */}

        <section
          id="individual-session"
          className="container-fluid mx-auto py-16 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl text-start uppercase font-bold text-red-700 mb-4">
                  Defining Your Unique Identity
                </h2>
                <p className="text-gray-700">
                  The journey begins with self-discovery. At LITWITS, we help
                  students answer the pivotal question: “What makes me stand
                  out?” Through psychometric assessments, in-depth
                  conversations, and reflective activities, we uncover the
                  student’s passion, strengths, and potential. This process
                  helps shape their core identity through their goals,
                  interests, and aspirations. By connecting the dots, we ensure
                  that their journey is aligned with your authentic self.
                </p>
              </div>

              <img
                src={define}
                alt="Defining unique identity through passion, strengths, and potential."
                title="Defining Your Unique Identity with LITWITS"
                aria-label="Defining Your Unique Identity with LITWITS"
                aria-describedby="Guided self-discovery through psychometric assessments and reflective activities to align personal goals and academic aspirations."
                style={{ height: "250px" }}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* SAT  start*/}
        <section
          className="relative bg-cover bg-center py-[100px] text-center text-white"
          style={{
            backgroundImage: `url(${blueprint})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-label="Blueprint for Success with LITWITS"
          aria-describedby="blueprint-description"
        >
          {/* Background Opacity Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content Section */}
          <div className="relative container mx-auto px-4">
            <h2 className="text-4xl text-white md:text-4xl font-bold mb-6">
              A BLUEPRINT FOR SUCCESS
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-start text-lg">
              Once we have a clear understanding of your identity and
              aspirations, we create a personalized roadmap that leverages all
              your strengths into an actionable, cohesive plan. The roadmap
              includes:
            </p>

            <div className="flex text-start flex-col space-y-4 max-w-2xl mx-auto text-lg">
              <p>
                We break down each stage of your journey with clear deadlines
                and monthly goals to ensure consistent progress.
              </p>
              <p>
                We turn ideas into action by guiding you through internships,
                research projects, leadership opportunities, extracurricular
                activities, and capstone projects, ensuring tangible results at
                every step.
              </p>
            </div>
          </div>
          {/* Descriptive Content for Accessibility */}
          <p id="blueprint-description" className="sr-only">
            Personalized roadmap integrating strengths into an actionable plan
            for consistent academic growth.
          </p>
        </section>

        {/* SAT  end*/}

        <AutoSliderSection cards={cards} />

        {/* Mun section  */}
        <section
          id="individual-session"
          className="container-fluid mx-auto py-16 bg-white"
        >
          <div className="max-w-(--breakpoint-xl) mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <img
                src={build}
                alt="Profile-building for leadership, creativity, and impactful achievements."
                title="Building a Cohesive and Impactful Profile with LITWITS"
                aria-label="Building a Cohesive and Impactful Profile with LITWITS"
                aria-describedby="Guidance in curating extracurriculars, building resumes, and crafting a strong academic narrative."
                style={{ height: "630px" }}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              {/* Text Section */}
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-[#890C25] uppercase text-start text-2xl md:text-3xl font-bold mb-4">
                  Build a Cohesive and Impactful <br /> Profile
                </h2>
                <p className="text-gray-700 mb-6">
                  Your college application profile should reflect your authentic
                  self and demonstrate leadership, intellectual curiosity, and a
                  commitment to making a positive impact. We help you:
                </p>
                {/* <ul className="list-disc pl-6 space-y-6"> */}
                <li className="list-none">
                  <strong className="block text-lg font-semibold text-gray-800">
                    Curate Extracurriculars:
                  </strong>
                  <p className="text-gray-600">
                    Pursue activities that align with your passions and
                    strengthen your profile. Whether it’s leadership roles in
                    <span className="text-blue-500 font-medium"> MUNs</span>,
                    debate tournaments, TED-Ed talks, Writing Competitions, or
                    entrepreneurship, we guide you in selecting experiences that
                    tell a cohesive, compelling story.
                  </p>
                </li>
                <br />
                <li className="list-none">
                  <strong className="block text-lg font-semibold text-gray-800">
                    Resume Building:
                  </strong>
                  <p className="text-gray-600">
                    We help you create a powerful resume that showcases academic
                    achievements, leadership roles, internships, and other key
                    accomplishments.
                  </p>
                </li>
                <br />
                <li className="list-none">
                  <strong className="block text-lg font-semibold text-gray-800">
                    Thematic Cohesion:
                  </strong>
                  <p className="text-gray-600">
                    We direct all aspects of your profile toward your central
                    theme or “human brand.” This ensures that your application
                    reflects not just your accomplishments, but also the purpose
                    and values that drive you.
                  </p>
                </li>
                {/* </ul> */}
              </div>
            </div>
          </div>
        </section>

        {/* Writing Section */}

        {/* World Scholar's Cup */}

        <section
          className="relative bg-cover bg-center py-[100px] text-center text-white"
          style={{
            backgroundImage: `url(${Tomeet})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-label="Achieving Academic Excellence with LITWITS"
          aria-describedby="academic-excellence-description"
        >
          {/* Background Opacity Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content Section */}
          <div className="relative container mx-auto text-white text-center">
            <h4 className="font-nato uppercase font-bold text-2xl md:text-5xl mb-6 max-w-3xl mx-auto">
              To meet the demanding standards of top universities, we provide
              tailored guidance for academic excellence, including:
            </h4>
            <div className="max-w-3xl mx-auto text-start space-y-4">
              <p>
                <span className="font-semibold">Test Preparation:</span> Our
                team offers comprehensive support for standardized tests like
                SAT, ACT, AP exams, IELTS, and other assessments. Our focused
                approach ensures you're fully prepared to achieve your best
                possible scores.
              </p>
              <p>
                <span className="font-semibold">
                  Advanced Coursework Guidance:
                </span>{" "}
                Whether it's selecting the right AP courses or excelling in
                advanced academic projects, we provide strategies for success in
                challenging coursework.
              </p>
            </div>
          </div>

          {/* Descriptive Content for Accessibility */}
          <p id="academic-excellence-description" className="sr-only">
            Tailored guidance for test preparation, advanced coursework, and
            strong academic performance.
          </p>
        </section>
        {/* Mun section  */}
        <section
          id="individual-session"
          className="container-fluid mx-auto py-16 bg-white"
        >
          <div className="max-w-(--breakpoint-xl) mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Text Section */}
              <div className="flex flex-col justify-center">
                <h2 className="text-[#890C25] uppercase text-start text-2xl md:text-3xl font-bold mb-4">
                  Craft Authentic and Impactful <br /> Applications
                </h2>
                <p className="text-gray-700 mb-6">
                  Your college application is your opportunity to showcase your
                  unique story. Our mentors guide you through every aspect of
                  the application process:
                </p>

                <li className="list-none">
                  <strong className="block text-lg font-semibold text-black">
                    Essay Writing:
                  </strong>
                  <span className="text-gray-600">
                    We work with you to craft standout
                    <span className="text-black font-medium">
                      {" "}
                      Common App essays{" "}
                    </span>
                    and
                    <span className="text-black font-medium">
                      {" "}
                      supplementary essays{" "}
                    </span>
                    that authentically represent your personality, experiences,
                    and aspirations.
                  </span>
                </li>
                <br />
                <li className="list-none">
                  <strong className="block text-lg font-semibold text-black">
                    Letters of Recommendation (LOR):
                  </strong>
                  <span className="text-gray-600">
                    We assist you in selecting the best recommenders and help
                    you build strong relationships with them. A well-crafted
                    letter from a teacher or mentor can play a crucial role in
                    reinforcing your strengths and potential.
                  </span>
                </li>
                <br />
                <li className="list-none">
                  <strong className="block text-lg font-semibold text-black">
                    Application Package:
                  </strong>
                  <span className="text-gray-600">
                    We ensure that every part of your application—personal
                    statements, essays, recommendations—forms a coherent,
                    compelling narrative that aligns with your “human brand.”
                  </span>
                </li>
              </div>

              {/* Image Section */}
              <div className="flex">
                <img
                  src={Craft}
                  alt="Crafting strong applications with essays and recommendations."
                  title="Crafting Authentic and Impactful Applications with LITWITS"
                  aria-label="Crafting Authentic and Impactful Applications with LITWITS"
                  aria-describedby="Essay writing, LOR guidance, and application packaging for compelling submissions."
                  style={{ height: "550px" }}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/*Presenting Your Best Self start */}

        <section className="bg-red-800 to-[#33000A] text-white py-16 px-4">
          <div className="max-w-(--breakpoint-lg) mx-auto text-center">
            <h5 className="text-3xl md:text-4xl font-bold mb-4">
              PRESENTING YOUR BEST SELF
            </h5>
            <p className="text-white text-lg md:text-xl mb-10">
              The college interview is a critical part of the admissions
              process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mock Interviews Card */}
              <div className=" text-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={Mockinterviews}
                  alt="Mock interviews refining communication and boosting confidence."
                  title="Mock Interviews with LITWITS"
                  aria-label="Mock Interviews with LITWITS"
                  aria-describedby="Personalized interview coaching with practice sessions and feedback for admissions success."
                  style={{ height: "360px" }}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Mock Interviews</h3>
                  <p className="text-white text-start">
                    We conduct mock interviews to refine your communication
                    skills, boost your confidence, and help you practice answers
                    to common questions.
                  </p>
                </div>
              </div>
              {/* Personalized Feedback Card */}
              <div className=" text-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={Personalized}
                  alt="Personalized interview feedback for improved performance."
                  title="Personalized Feedback for Interview Success with LITWITS"
                  aria-label="Personalized Feedback for Interview Success with LITWITS"
                  aria-describedby="Customized feedback to help students present their best selves in interviews."
                  style={{ height: "360px" }}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    Personalized Feedback
                  </h3>
                  <p className="text-white text-start">
                    Our feedback is designed to help you improve your interview
                    performance, ensuring that you present your best self to
                    admissions officers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Presenting Your Best Self end */}

        <section
          id="individual-session"
          className="container-fluid mx-auto py-16 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Section (Left) */}

              {/* Image Section (Right) */}
              <div className="flex items-center justify-center">
                <img
                  src={Navigating}
                  alt="Navigating college admissions decisions with personalized insights."
                  title="Navigating Admissions Decisions with LITWITS"
                  aria-label="Navigating Admissions Decisions with LITWITS"
                  aria-describedby="Guidance in evaluating college offers, campus environments, and academic programs."
                  style={{ height: "360px" }}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="text-3xl uppercase text-left font-bold text-[#890C25] mb-4">
                  Navigating Admissions Decisions
                </h2>
                <p className="text-gray-700 mb-8">
                  Once you receive your offers, we help you navigate the
                  decision-making process. This includes:
                </p>

                <li className="list-none">
                  <p className="text-gray-600">
                    Evaluating each college's offerings, environment, and
                    opportunities to ensure the best fit for your long-term
                    goals.
                  </p>
                </li>
                <br />
                <li className="list-none">
                  <p className="text-gray-600">
                    Helping you consider factors like campus culture, academic
                    programs, extracurricular opportunities, and post-graduation
                    prospects to make an informed decision.
                  </p>
                </li>
              </div>
            </div>
          </div>
        </section>
        {/* Book counsole */}

        <section className="p-4 sm:p-8 lg:p-16">
          <div
            className="relative text-white rounded-lg"
            style={{
              backgroundImage: `url(${session})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            role="img"
            aria-label="Take the Next Step Towards Your Dream University"
            aria-describedby="consultation-description"
          >
            {/* Background Opacity Layer */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

            {/* Content */}
            <div className="relative z-10 grid gap-6 grid-cols-1 lg:grid-cols-2 items-center max-w-6xl mx-auto p-8">
              {/* Heading */}
              <h2 className="text-start lg:text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                Take the Next Step Towards
                <br />
                <span className="mt-2 block">Your Dream University</span>
              </h2>

              {/* Form */}
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-red-500"
                />
                <Link to="https://wa.me/7827098747?text=hello+123">
                  <button
                    type="submit"
                    className="w-full font-noto bg-white text-red-800 px-6 py-3 font-medium rounded-lg hover:bg-gray-100 transition duration-200"
                  >
                    Book a Consultation
                  </button>
                </Link>
              </form>
              {/* Descriptive Content for Accessibility */}
              <p id="consultation-description" className="sr-only">
                Schedule a personalized consultation to discuss your academic
                aspirations, goals, and tailored strategies to excel in your
                college application journey.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default CollegeCounseling;
