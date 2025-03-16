import React from "react";
import "./index.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Rozarpayment from "../../Rozarpayment";
import { Helmet } from "react-helmet-async";

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
        <meta property="og:url" content="https://litwits.com/" />
        <link rel="canonical" href="https://litwits.com/" />

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
      <section className="p-11">
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
                <th>HOUR</th>
                <th>VALIDITY</th>
                <th>TOTAL FEE IN INR</th>
                <th>BUY</th>
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
                <td>₹18,000</td>
                <td>
                  <Rozarpayment
                    inrAmount={18000}
                    className="choose-plan mt-4"
                  />
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>6 Months</td>
                <td>₹25,000</td>
                <td>
                  <Rozarpayment inrAmount={25000} />
                </td>
              </tr>
              {/* <tr>
              <td>40</td>
              <td>6 Months</td>
              <td>₹33,040</td>
              <td>
              <Rozarpayment inrAmount={33040} className="choose-plan mt-4" />
              </td>
            </tr>
            <tr>
              <td>50</td>
              <td>8 Months</td>
              <td>₹38,350</td>
              <td>
              <Rozarpayment inrAmount={38350} className="choose-plan mt-4" />
              </td>
            </tr>
            <tr>
              <td>60</td>
              <td>10 Months</td>
              <td>₹42,480</td>
              <td>
              <Rozarpayment inrAmount={42480} className="choose-plan mt-4" />
              </td>
            </tr> */}
              <tr>
                <td>Unlimited</td>
                <td>12 Months</td>
                <td>₹59,000</td>
                <td>
                  <Rozarpayment
                    inrAmount={59000}
                    className="choose-plan mt-4"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pricing-container items-center justify-center">
          <h1 className="text-3xl font-nato pt-6 font-bold text-center mb-8">
            INDIVIDUAL SESSIONS
          </h1>
          <hr class="mt-4 mb-4" />

          <div className="pricing-plans">
            <div className="plan">
              <h3 className="uppercase">TED-ED Training</h3>
              <p className="price">₹17,700 </p>
              <p className="sessions">5 Sessions</p>
              <ul>
                <li>Understanding the Fundamentals</li>
                <li>Crafting the Narrative</li>
                <li>Delivery and Manner in Presentations.</li>
                <li>Identifying the Problem</li>
                <li>Developing Critical Thinking and Planning</li>
                <li>Recognition Through ‘TED-Ed Student Talk Program’</li>
              </ul>
              <Rozarpayment inrAmount={17700} className="choose-plan mt-4" />
            </div>
            <div className="plan highlighted">
              <h3 className="uppercase">
                MUN Guidance <br />
                Package
              </h3>
              <p className="price">₹17,700 </p>
              <p className="sessions">5 Sessions</p>
              <ul>
                <li>All Basic plan features, plus:</li>
                <li>Research Material</li>
                <li>Position Paper</li>
                <li>GSL Speech</li>
                <li>Moderated Caucus</li>
                <li>Draft Resolution</li>
                <li>Press Release / Working Paper</li>
              </ul>
              <Rozarpayment inrAmount={17700} className="choose-plan mt-4" />
            </div>
            <div className="plan">
              <h3 className="uppercase">
                College Essay <br /> Guidance
              </h3>
              <p className="price">₹17,700 </p>
              <p className="sessions">5 Sessions</p>
              <ul>
                <li>Essay Structure</li>
                <li>Advanced Writing Strategies</li>
                <li>Engaging Narratives</li>
                <li>Feedback & Tips</li>
                <li>Effective Editing</li>
                <li>Vocal Techniques</li>
                <li>Identify pitfalls in essay writing</li>
              </ul>
              <Rozarpayment inrAmount={17700} className="choose-plan mt-4" />
            </div>
            <div className="plan">
              <h3 className="uppercase"> Research Paper Guidance</h3>
              <p className="price">₹17,700 </p>
              <p className="sessions">5 Sessions</p>
              <ul>
                <li>Introduction to Research</li>
                <li>How to form a thesis</li>
                <li>Scientific Method</li>
                <li>Conducting an experiment</li>
                <li>Drawing conclusions</li>
                <li>Case Studies, Citations</li>
                <li>Formatting research papers</li>
              </ul>
              <Rozarpayment inrAmount={17700} className="choose-plan mt-4" />
            </div>
          </div>
        </div>
        <div class="pricing-section items-center justify-center py-16">
          <h1 className="text-3xl font-bold font-nato">ACADEMIC SESSIONS</h1>
          <hr className="mt-4 mb-4" />

          <div className="plans-container">
            <div className="plan">
              <h3>AP EXAM PREPARATION</h3>
              {/* <div className="price">
                    <p>$211.24 </p>
                </div> */}
              <p className="sessions">30 Sessions</p>
              <ul>
                <li>Subject-Specific Strategies</li>
                <li>Advanced Exam Techniques</li>
                <li>Practice & Test Simulation</li>
                <li>Mastering Multiple-Choice Strategies</li>
                <li>Essay Writing Guidance : DBQs and FRQs</li>
                <li>Regular Feedback & Progress Tracking</li>
              </ul>
              <Link to={"/contact-us"}>
                <button className="choose-plan">Book a Consultation</button>
              </Link>
            </div>

            <div className="plan highlighted">
              <h3>SAT PREP SESSION</h3>

              <p className="sessions">40 Sessions</p>
              <ul>
                <li>In-depth review of Math, Reading, and Writing sections.</li>
                <li>Timed practice tests with targeted drills.</li>

                <li>
                  Expert guidance on Evidence-Based Reading and <br /> Essay
                  Writing.
                </li>
                <li>Personalized feedback and progress tracking.</li>
              </ul>
              <Link to={"/contact-us"}>
                <button className="choose-plan">Book a Consultation</button>
              </Link>
            </div>

            <div className="plan">
              <h3>ACT PREP SESSION</h3>
              <p className="sessions">30 Sessions</p>
              <ul>
                <li>
                  Initial assessment to identify strengths and improvement
                  areas.{" "}
                </li>
                <li>Conceptual clarity with a foundational approach.</li>
                <li>
                  Comprehensive review of Math, English, Reading, Science, and
                  Writing.
                </li>
                <li>
                  Test strategies, time management, and shortcuts for
                  efficiency.
                </li>
              </ul>
              <Link to={"/contact-us"}>
                <button className="choose-plan">Book a Consultation</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8 bg-gray-50" id="faq">
          <h2 className="text-3xl font-nato pt-6 font-bold text-center text-red-700 mb-8">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="p-4 bd">
          {/* First Accordion */}
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item
              eventKey="0"
              itemscope="itemscope"
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <Accordion.Header itemprop="name">
                What would be the duration of each individual session?
              </Accordion.Header>
              <Accordion.Body
                className="bg-[#890C25] text-white"
                itemscope="itemscope"
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                 Each individual session will last 90 minutes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              itemscope="itemscope"
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <Accordion.Header itemprop="name">
                Can I convert my Group Session package to Individual Sessions?
              </Accordion.Header>
              <Accordion.Body
                className="bg-[#890C25] text-white"
                itemscope="itemscope"
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                Members can attend as many sessions as they wish, provided there
                is availability.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              itemscope="itemscope"
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <Accordion.Header itemprop="name">
                Which are the Individual sessions?
              </Accordion.Header>
              <Accordion.Body
                className="bg-[#890C25] text-white"
                itemscope="itemscope"
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                Session timings vary. Please check the schedule for specific
                details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="3"
              itemscope="itemscope"
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <Accordion.Header itemprop="name">
                Do you also provide AP(Advanced Placement) courses?
              </Accordion.Header>
              <Accordion.Body
                className="bg-[#890C25] text-white"
                itemscope="itemscope"
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                Core sessions include warm-ups, skill-building activities, and
                group discussions.
              </Accordion.Body>
            </Accordion.Item>

            {/* Second Accordion */}

            <Accordion.Item
              eventKey="4"
              itemscope="itemscope"
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <Accordion.Header itemprop="name">
                What are the timings of Individual Sessions?
              </Accordion.Header>
              <Accordion.Body
                className="bg-[#890C25] text-white"
                itemscope="itemscope"
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                Yes, conversion is possible. Please contact support for more
                details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="5"
              itemscope="itemscope"
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <Accordion.Header itemprop="name">
                How much time do I have to complete the MUN Guidance Package?
              </Accordion.Header>
              <Accordion.Body
                className="bg-[#890C25] text-white"
                itemscope="itemscope"
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                Yes, we offer trial sessions to help students get familiar with
                the program.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default index;
