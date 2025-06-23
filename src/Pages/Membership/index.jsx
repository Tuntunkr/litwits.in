  import React from "react";
  import "./index.css";
  import Accordion from "react-bootstrap/Accordion";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { Link } from "react-router-dom";
  import Rozarpayment from "../../Rozarpayment";
  import { Helmet } from "react-helmet-async";
  import CourseCurriculum from "./CourseCurriculum";
  import  Contact from "../../sections/Contact"

  const index = () => {
    return (
      <>
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
        <section className="p-4">
          <div>
            <h1 className="text-3xl font-nato pt-6 font-bold text-center mb-8">
              {" "}
              GROUP SESSIONS
            </h1>

            <hr className="mt-4 mb-4" />
            {/* Subheading */}
            <p className="text-lg md:text-xl mb-8 text-center text-gray-800">
              Duration of each group session will be 90 minutes
            </p>
          </div>
          <div className="flex items-center justify-center px-4 py-8 from-gray-50 to-gray-200 text-center">
            <table>
              <thead>
                <tr>
                  <th className="text-white">SESSIONS</th>
                  <th className="text-white">VALIDITY</th>
                  <th className="text-white">TOTAL FEE IN INR</th>
                  <th className="text-white">BUY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>2.5 Months</td>
                  <td>₹12,000</td>
                  <td>
                    <Rozarpayment
                      inrAmount={12000}
                      className="choose-plan mt-4"
                    />
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>4 Months</td>
                  <td>₹20,060</td>
                  <td>
                    <Rozarpayment
                      inrAmount={20060}
                      className="choose-plan mt-4"
                    />
                  </td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>6 Months</td>
                  <td>₹26,550</td>
                  <td>
                    <Rozarpayment inrAmount={26550} />
                  </td>
                </tr>

                <tr>
                  <td>Unlimited</td>
                  <td>12 Months</td>
                  <td>₹94,400</td>
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
          <CourseCurriculum />
          <div className="px-4 py-4">
    {/* Section Title */}
    <h1 className="text-3xl font-bold font-nato text-gray-700 text-center mb-2">
      INDIVIDUAL SESSIONS
    </h1>
    <hr className="mb-10 border-gray-600 w-24 mx-auto" />

    {/* Individual Sessions Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "TED-ED Training",
          price: 17700,
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
          price: 17700,
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
          price: 17700,
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
            <h3 className="text-xl font-semibold mb-2 uppercase">{plan.title}</h3>
            <p className="text-lg font-bold mb-1">
              {plan.price > 0 ? `₹${plan.price}` : "Custom Package"}
            </p>
            <p className="mb-4 font-medium">{plan.sessions}</p>
            <ul className="space-y-2 text-sm">
    {plan.features.map((feature, i) => (
      <li key={i} className="flex items-start text-white font-normal text-base">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0"></span>
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
              <button className="w-full choose-plan transition text-white py-2 rounded-md text-center font-semibold">
                Book a Consultation
              </button>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Spacer */}
    <div className="my-20" />

    {/* Academic Sessions */}
    <h1 className="text-3xl font-bold font-nato text-gray-700 text-center">
      ACADEMIC SESSIONS
    </h1>
    <hr className="mt-4 mb-10 border-gray-600 w-24 mx-auto" />

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
          className="flex flex-col justify-between min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6 shadow-lg"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 uppercase">{plan.title}</h3>
            <p className="mb-4 font-medium">{plan.sessions}</p>
            <ul className="space-y-2 text-sm">
    {plan.features.map((feature, i) => (
      <li key={i} className="flex items-start text-white font-normal text-base">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0"></span>
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
