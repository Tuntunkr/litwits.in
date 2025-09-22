import React, { useEffect, useState } from "react";
import "./index.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Rozarpayment from "../../Rozarpayment";
import { Helmet } from "react-helmet-async";
import CourseCurriculum from "./CourseCurriculum";
import Contact from "../../sections/Contact";

const index = () => {
  const [showPopup, setShowPopup] = useState(true);

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  // Razorpay payment handler
  const handleRazorpay = () => {
    // You can use your existing Rozarpayment logic here, or open Razorpay directly
    // For demo, we'll just alert. Replace with actual Rozarpayment logic if needed.
    if (window.Rozarpayment) {
      window.Rozarpayment(9600); // Example amount
    } else {
      alert("Razorpay payment flow should open here.");
    }
  };

  return (
    <>
      {/* Popup Animation Style */}
      {/* <style>{`
        @keyframes popupIn {
          0% { transform: scale(0.7) translateY(40px); opacity: 0; }
          80% { transform: scale(1.05) translateY(-8px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-popup {
          animation: popupIn 0.5s cubic-bezier(.68,-0.55,.27,1.55);
        }
      `}</style>
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "rgba(30,30,30,0.15)",
            backdropFilter: "blur(2px)",
          }}
        >
           <div 
            className="relative bg-white rounded-xl shadow-2xl max-w-[95vw] w-full sm:max-w-lg p-4 flex flex-col items-center animate-popup"
            style={{ boxSizing: "border-box" }}
          > 
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src="/offer.jpeg"
              alt="Offer Banner"
              className=" rounded-lg mb-4 object-cover"
               style={{ maxHeight: "440px" }}
            /> 

           <Rozarpayment inrAmount={1200} className="w-full choose-plan transition bg-[#890C25] hover:bg-red-700 text-white py-2 rounded-md text-center font-semibold mt-4" />

          </div>
        </div>
      )} */}
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More{" "}
        </title>
        <meta
          name="description"
          content="Unlock exclusive group sessions, MUN guidance, TED-Ed training, AP prep, and more with LITWITS Membership. Choose your package and start learning today!"
        />
        <meta
          name="keywords"
          content="Litwits Membership, Litwits Package, Paid Sessions"
        />
        <meta
          property="og:title"
          content="Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More"
        />
        <meta
          property="og:description"
          content="Discover a platform where you can write, discuss, and engage in thought-provoking debates."
        />
        <meta property="og:url" content="https://litwits.in/" />
        <link rel="canonical" href="https://litwits.in/" />

        {/* schema.org JSON-LD for Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "LITWITS Membership",
            description:
              "LITWITS Membership offers various packages including Group Sessions, MUN Guidance, TED-Ed Training, and more for effective learning.",
            image: "https://litwits.in/assets/litwits-1020x1020.png",
            offers: [
              {
                "@type": "Offer",
                name: "Group Sessions - 10 Hours",
                price: "12000",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "Group Sessions - 20 Hours",
                price: "18000",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "Group Sessions - 30 Hours",
                price: "25000",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "Group Sessions - Unlimited",
                price: "59000",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "TED-Ed Training",
                price: "17700",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "MUN Guidance",
                price: "17700",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "College Essay Guidance",
                price: "17700",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "Research Paper Guidance",
                price: "17700",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "AP Exam Preparation",
                price: "Consultation",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "SAT Prep Session",
                price: "Consultation",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
              {
                "@type": "Offer",
                name: "ACT Prep Session",
                price: "Consultation",
                priceCurrency: "INR",
                validThrough: "2025-12-31",
              },
            ],
            faqPage: {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What would be the duration of each individual session?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Each individual session will last 90 minutes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I convert my Group Session package to Individual Sessions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, conversion is possible. Please contact support for more details.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which are the Individual sessions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Session timings vary. Please check the schedule for specific details.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you also provide AP (Advanced Placement) courses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide comprehensive AP course preparation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the timings of Individual Sessions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Timings vary; please check the schedule for detailed information.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much time do I have to complete the MUN Guidance Package?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "There is no strict time limit; however, participants are encouraged to complete it within the suggested timeframe for better results.",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <section className="p-7">
        <div>
          <h1
            className="font-noto mt-4 mb-2 font-bold text-center  "
            style={{ fontSize: "22px" }}
          >
            GROUP SESSIONS
          </h1>

          <hr className="mt-2 mb-2" />
          {/* Subheading */}
          <p
            className=" md:text-xl  text-center text-gray-800 font-noto"
            style={{ fontSize: "15px" }}
          >
            Duration of each group session 90 minutes
          </p>
        </div>
        <CourseCurriculum />
        <div className="flex items-center justify-center px- py-1 from-gray-50 to-gray-200 text-center w-full overflow-x-auto mt-5">
          <table>
            <thead className="bg-gradient-to-br from-gray-900 to-gray-800 font-noto ">
              <tr>
                <th
                  className="text-white  font-noto uppercase"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  No. of Group Sessions
                </th>
                <th
                  className="text-white  font-noto"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  VALIDITY
                </th>
                <th
                  className="text-white  font-noto"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  TOTAL FEE IN INR
                </th>
                <th
                  className="text-white  font-noto"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  BUY
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 10 Sessions */}
              <tr>
                <td className="text-center px-4 py-2">10</td>
                <td
                  className="text-center px-4 py-2  font-noto"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  2.5 Months
                </td>
                <td className="text-center px-4 py-2">
                  <div className="flex flex-col items-center">
                    {/* <span
                      className="  font-noto text-sm bg-red-500 text-white px-2 py-0.5 rounded mb-1"
                      style={{ fontFamily: "Noto Sans" }}
                    >
                      20% OFF
                    </span>
                    <s className="text-gray-400 text-sm">₹</s> */}
                    <span className="font-bold text-black">₹12000</span>
                  </div>
                </td>
                <td>
                  <Rozarpayment
                    inrAmount={12000}
                    className="choose-plan mt-4"
                  />
                </td>
              </tr>

              {/* 20 Sessions */}
              <tr className="bg-gray-100">
                <td className="text-center px-4 py-2">20</td>
                <td
                  className="text-center px-4 py-2  font-noto"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  4 Months
                </td>
                <td className="text-center px-4 py-2">
                  <div className="flex flex-col items-center">
                    {/* <span
                      className="text-sm bg-red-500 text-white px-2 py-0.5 rounded mb-1"
                      style={{ fontFamily: "Noto Sans" }}
                    >
                      20% OFF
                    </span>
                    <s className="text-gray-400 text-sm">₹20,060</s> */}
                    <span className="font-bold text-black">₹20,060</span>
                  </div>
                </td>
                <td>
                  <Rozarpayment
                    inrAmount={20060}
                    className="choose-plan mt-4"
                  />
                </td>
              </tr>

              {/* 30 Sessions */}
              <tr>
                <td className="text-center px-4 py-2">30</td>
                <td
                  className="text-center px-4 py-2  font-noto"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  6 Months
                </td>
                <td className="text-center px-4 py-2">
                  <div className="flex flex-col items-center">
                    {/* <span
                      className="  font-noto text-sm bg-red-500 text-white px-2 py-0.5 rounded mb-1"
                      style={{ fontFamily: "Noto Sans" }}
                    >
                      20% OFF
                    </span>
                    <s className="text-gray-400 text-sm">₹26,550</s> */}
                    <span className="font-bold text-black">₹26,550</span>
                  </div>
                </td>
                <td>
                  <Rozarpayment
                    inrAmount={26550}
                    className="choose-plan mt-4"
                  />
                </td>
              </tr>

              {/* Unlimited Sessions */}
              <tr className="bg-gray-100">
                <td
                  className="text-center px-4 py-2  font-noto"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  Unlimited
                </td>
                <td
                  className="text-center px-4 py-2  font-noto"
                  style={{ fontFamily: "Noto Sans" }}
                >
                  12 Months
                </td>
                <td className="text-center px-4 py-2">
                  <div className="flex flex-col items-center">
                    {/* <span
                      className="  font-noto text-sm bg-red-500 text-white px-2 py-0.5 rounded mb-1"
                      style={{ fontFamily: "Noto Sans" }}
                    >
                      20% OFF
                    </span>
                    <s className="text-gray-400 text-sm">₹94,400</s> */}
                    <span className="font-bold text-black">₹94,400</span>
                  </div>
                </td>
                <td>
                  <Rozarpayment
                    inrAmount={94400}
                    className="choose-plan mt-4"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" py-3">
          {/* Section Title */}
          <h1
            className=" font-bold font-noto text-gray-700 text-center mb-2"
            style={{ fontSize: "22px" }}
          >
            INDIVIDUAL SESSIONS
          </h1>
          <hr className=" border-gray-600 w-24 mx-auto" />

          {/* Individual Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "TED-ED Training Package",
                price: 25000,
                sessions: "5 Sessions",
                features: [
                  "Understanding the Fundamentals",
                  "Crafting the Narrative",
                  "Delivery and Manner in Presentations",
                  "Identifying the Problem",
                  "Developing Critical Thinking and Planning",
                  "Recognition Through ‘TED-Ed Student Talk Program’",
                ],
              },
              {
                title: "MUN Guidance Package",
                price: 25000,
                sessions: "5 Sessions",
                features: [
                  "Research Material",
                  "Position Paper",
                  "GSL Speech",
                  "Moderated Caucus",
                  "Draft Resolution",
                  "Press Release / Working Paper",
                ],
              },
              {
                title: "Research Paper Guidance",
                price: 20000,
                sessions: "5 Sessions",
                features: [
                  "Introduction to Research",
                  "How to form a thesis",
                  "Scientific Method",
                  "Conducting an Experiment",
                  "Drawing Conclusions",
                  "Case Studies, Citations, Formatting Papers",
                ],
              },
              {
                title: "College Counseling",
                price: 0,
                sessions: "Full Guidance",
                features: [
                  "Customized Roadmap",
                  "Essay Brainstorming & Development",
                  "Candidacy Positioning",
                  "University Selection & Application",
                  "Extracurricular Development",
                  "Interview Mentoring & LORs",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="flex flex-col justify-between min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6 shadow-lg"
              >
                <div>
                  <div className="h-14">
                    <h3 className="text-xl font-semibold uppercase font-noto mb-1 sm:mb-2 md:mb-3">
                      {plan.title}
                    </h3>
                  </div>
                  <p
                    className="text-lg font-bold mb-1"
                    style={{ fontSize: "15px" }}
                  >
                    {plan.price > 0 ? `₹${plan.price}` : "Custom Package"}
                  </p>
                  <p className="mb-2 font-medium" style={{ fontSize: "15px" }}>
                    {plan.sessions}
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base list-none pl-0">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-white font-normal text-sm sm:text-base"
                      >
                        <span
                          className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-1.5 flex-shrink-0"
                          style={{ fontSize: "15px" }}
                        ></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  {plan.price > 0 ? (
                    <Rozarpayment
                      inrAmount={plan.price}
                      className="w-full choose-plan transition text-white py-2 rounded-md text-center font-semibold"
                    />
                  ) : (
                    <Link to={"/contact-us"}>
                      <button className="mt-6 w-full choose-plan transition text-white py-2 rounded-md text-center font-semibold">
                        Book a Consultation
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Spacer */}
          <div className="py-3" />

          {/* Academic Sessions */}
          <h1
            className=" font-bold font-noto text-gray-700 text-center mb-2"
            style={{ fontSize: "22px" }}
          >
            ACADEMIC SESSIONS
          </h1>
          <hr className=" border-gray-600 w-24 mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AP EXAM PREPARATION",
                sessions: "30 Sessions",
                features: [
                  "Subject-Specific Strategies",
                  "Advanced Exam Techniques",
                  "Practice & Test Simulation",
                  "Mastering Multiple-Choice Strategies",
                  "Essay Writing Guidance : DBQs and FRQs",
                  "Regular Feedback & Progress Tracking",
                ],
              },
              {
                title: "SAT PREP SESSION",
                sessions: "40 Sessions",
                features: [
                  "In-depth review of Math, Reading, and Writing sections.",
                  "Timed practice tests with targeted drills.",
                  "Expert guidance on Evidence-Based Reading and Essay Writing.",
                  "Personalized feedback and progress tracking.",
                ],
              },
              {
                title: "ACT PREP SESSION",
                sessions: "30 Sessions",
                features: [
                  "Initial assessment to identify strengths and improvement areas.",
                  "Conceptual clarity with a foundational approach.",
                  "Comprehensive review of Math, English, Reading, Science, and Writing.",
                  "Test strategies, time management, and shortcuts for efficiency.",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="flex flex-col justify-between min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6 shadow-lg "
              >
                <div className="h-14">
                  <h3 className="text-xl font-semibold mb-2 uppercase font-noto">
                    {plan.title}
                  </h3>
                  <p className="mb-2 font-medium" style={{ fontSize: "15px" }}>
                    {plan.sessions}
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base list-none pl-0">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-white font-normal text-sm sm:text-base"
                      >
                        <span
                          className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-1.5 flex-shrink-0"
                          style={{ fontSize: "15px" }}
                        ></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={"/contact-us"}>
                  <button className="mt-6 w-full choose-plan transition text-white py-2 rounded-md text-center font-semibold">
                    Book a Consultation
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-5 bg-gray-50">
        <div className="container mx-auto ">
          <h2
            className=" font-noto pt-1 font-bold text-center text-red-700 "
            style={{ fontSize: "26px" }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="p-2">
          {/* First Accordion */}
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What would be the duration of each individual session?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Each individual session will last 90 minutes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can I convert my Group Sessions package to Individual Sessions?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                No, Group Sessions and Individual Sessions are structured and
                priced separately. Therefore, the Group Sessions package cannot
                be converted to Individual Sessions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Which are the Individual sessions?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Individual sessions include TED-Ed Training, Academic Prep
                Session, AP Prep, ACT Prep, SAT Prep, MUN Guidance Package,
                College Essay Guidance, Writing Guidance Package, Research Paper
                Guidance, and Social Impact.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Which AP (Advanced Placement) prep sessions do you offer?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                U.S. History, World History: Modern, Comparative Government and
                Politics, Macroeconomics, Microeconomics, Biology, Calculus
                AB,Calculus BC, Statistics, English Language and Composition,
                English Literature and Composition, Psychology and so on.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What are the timings of Individual Sessions?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Individual session timings are scheduled at a mutually
                convenient time for both the student and the mentor.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Which sessions can I attend from the Group Sessions package?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                You may attend any sessions from the weekly schedule as per your
                interest.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Who can join?</Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                Learning begins with passion, not experience—and that’s exactly
                what our sessions are all about. We have categories for students
                from Grade 4 to adults ,anyone who is eager to explore debate,
                public speaking, or writing can join us. No prior experience is
                required; just passion and commitment for learning.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                What if you miss a group session?
              </Accordion.Header>
              <Accordion.Body className="bg-[#890C25] text-white">
                If a group session is ever missed, you can simply attend the
                next one. However, do ensure all sessions are completed within
                the validity period.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
};

export default index;
