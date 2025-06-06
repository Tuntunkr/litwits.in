import React, { useState } from "react";
import "./index.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Rozarpayment from "../../Rozarpayment";
import { Helmet } from "react-helmet-async";

const MembershipPage = () => {
  const [activeTab, setActiveTab] = useState("group");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More
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
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What would be the duration of each individual session?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Each individual session will last 90 minutes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I convert my Group Sessions package to Individual Sessions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, Group Sessions and Individual Sessions are structured and priced separately. Therefore, the Group Sessions package cannot be converted to Individual Sessions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which are the Individual sessions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Individual sessions include TED-Ed Training, Academic Prep Session, AP Prep, ACT Prep, SAT Prep, MUN Guidance Package, College Essay Guidance, Writing Guidance Package, Research Paper Guidance, and Social Impact."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which AP (Advanced Placement) prep sessions do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "U.S. History, World History: Modern, Comparative Government and Politics, Macroeconomics, Microeconomics, Biology, Calculus AB, Calculus BC, Statistics, English Language and Composition, English Literature and Composition, Psychology and so on."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the timings of Individual Sessions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Individual session timings are scheduled at a mutually convenient time for both the student and the mentor."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which sessions can I attend from the Group Sessions package?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You may attend any sessions from the weekly schedule as per your interest."
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-gray-900/80 z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-nato tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                LITWITS MEMBERSHIP
              </span>
            </h1>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock your potential with our comprehensive learning packages designed to 
              enhance your skills in debate, writing, public speaking, and academic excellence.
            </p>
          </div>
          
          {/* Membership Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            <button 
              onClick={() => setActiveTab("group")}
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 ${
                activeTab === "group" 
                ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/50" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md"
              }`}
            >
              GROUP SESSIONS
            </button>
            <button 
              onClick={() => setActiveTab("individual")}
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 ${
                activeTab === "individual" 
                ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/50" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md"
              }`}
            >
              INDIVIDUAL SESSIONS
            </button>
            <button 
              onClick={() => setActiveTab("academic")}
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 ${
                activeTab === "academic" 
                ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/50" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md"
              }`}
            >
              ACADEMIC SESSIONS
            </button>
          </div>
        </div>
      </section>

      {/* Group Sessions Section */}
      {activeTab === "group" && (
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-nato">
                <span className="relative inline-block">
                  <span className="relative z-10">GROUP SESSIONS</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
                </span>
              </h2>
              <div className="h-1 w-16 bg-red-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Duration of each group session will be 90 minutes. Choose the package that fits your learning needs.
              </p>
            </div>

            {/* Group Sessions Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  sessions: "10",
                  validity: "2.5 Months",
                  price: 12000,
                  features: ["Access to all group sessions", "2.5 month validity", "Priority support"]
                },
                {
                  sessions: "20",
                  validity: "4 Months",
                  price: 18000,
                  features: ["Access to all group sessions", "4 month validity", "Session recordings"],
                  popular: true
                },
                {
                  sessions: "30",
                  validity: "6 Months",
                  price: 25000,
                  features: ["Access to all group sessions", "6 month validity", "Exclusive resources"]
                },
                {
                  sessions: "Unlimited",
                  validity: "12 Months",
                  price: 59000,
                  features: ["Unlimited access", "Full year validity", "All premium features"],
                  bestValue: true
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? "border-2 border-red-500" 
                      : plan.bestValue 
                        ? "bg-gradient-to-b from-red-900/30 to-gray-800 border border-red-700/50" 
                        : "bg-gray-800"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-red-600 text-white text-sm font-bold text-center py-1">
                      MOST POPULAR
                    </div>
                  )}
                  {plan.bestValue && (
                    <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-bold text-center py-1">
                      BEST VALUE
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold">
                        {plan.sessions} {plan.sessions === "Unlimited" ? "" : "Sessions"}
                      </h3>
                      <p className="text-gray-400">{plan.validity} Validity</p>
                    </div>
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold">₹{plan.price.toLocaleString()}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Rozarpayment
                      inrAmount={plan.price}
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        plan.popular || plan.bestValue 
                          ? "bg-red-600 hover:bg-red-700 text-white" 
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Session Details */}
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 font-nato text-center">
                  <span className="border-b-2 border-red-600 pb-2">WHAT'S INCLUDED</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Available Session Types
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                        {[
                          "Core Debate Sessions",
                          "Core Writing Sessions",
                          "Core Discussion Sessions",
                          "World Scholar's Cup Prep",
                          "Ivy League Competitions Prep",
                          "Financial Literacy Sessions",
                          "Entrepreneurship Sessions",
                          "MUN Prep Sessions"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Additional Benefits
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Access to session recordings",
                          "Exclusive competition resources",
                          "Team formation assistance",
                          "Monthly progress reports",
                          "Resource library access",
                          "Priority registration for competitions"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg border border-gray-700">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-white">Session Schedule</h4>
                      <p className="text-gray-300">
                        Sessions are held Monday to Sunday, 8:00 PM to 9:30 PM (IST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Individual Sessions Section */}
      {activeTab === "individual" && (
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-nato">
                <span className="relative inline-block">
                  <span className="relative z-10">INDIVIDUAL SESSIONS</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
                </span>
              </h2>
              <div className="h-1 w-16 bg-red-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Personalized learning experiences tailored to your specific needs and goals.
              </p>
            </div>

            {/* Individual Sessions Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "TED-ED Training",
                  price: 17700,
                  sessions: "5 Sessions",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ),
                  features: [
                    "Understanding the Fundamentals",
                    "Crafting the Narrative",
                    "Delivery and Manner in Presentations",
                    "Identifying the Problem",
                    "Developing Critical Thinking and Planning",
                    "Recognition Through 'TED-Ed Student Talk Program'"
                  ]
                },
                {
                  title: "MUN Guidance Package",
                  price: 17700,
                  sessions: "5 Sessions",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  features: [
                    "Research Material",
                    "Position Paper",
                    "GSL Speech",
                    "Moderated Caucus",
                    "Draft Resolution",
                    "Press Release / Working Paper"
                  ],
                  popular: true
                },
                {
                  title: "Research Paper Guidance",
                  price: 17700,
                  sessions: "5 Sessions",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  ),
                  features: [
                    "Introduction to Research",
                    "How to form a thesis",
                    "Scientific Method",
                    "Conducting an experiment",
                    "Drawing conclusions",
                    "Case Studies, Citations",
                    "Formatting research papers"
                  ]
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-105 ${
                    plan.popular 
                    ? "border-2 border-red-500 bg-gradient-to-b from-red-900/20 to-gray-800" 
                    : "bg-gray-800"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-red-600 text-white text-sm font-bold text-center py-1">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 bg-gray-700 rounded-lg">
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{plan.title}</h3>
                        <p className="text-gray-400">{plan.sessions}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">₹{plan.price.toLocaleString()}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Rozarpayment
                      inrAmount={plan.price}
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        plan.popular 
                        ? "bg-red-600 hover:bg-red-700 text-white" 
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* College Counseling */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-700">
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold font-nato mb-2">
                    COLLEGE COUNSELING
                  </h3>
                  <div className="h-1 w-12 bg-red-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-red-400 border-b border-gray-700 pb-2">
                      Application Development
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Customised Roadmap",
                        "Candidacy Positioning",
                        "Essay Brainstorming & Development",
                        "Academic Analysis",
                        "University Selection"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-red-400 border-b border-gray-700 pb-2">
                      Additional Support
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Standardized Testing Preparation",
                        "Extracurricular Development",
                        "Letters of Recommendation",
                        "Matriculation",
                        "Interview Mentoring"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/contact-us">
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-red-900/30">
                    Book a Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Academic Sessions Section */}
      {activeTab === "academic" && (
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-nato">
                <span className="relative inline-block">
                  <span className="relative z-10">ACADEMIC SESSIONS</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
                </span>
              </h2>
              <div className="h-1 w-16 bg-red-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Specialized preparation for academic excellence and standardized tests.
              </p>
            </div>

            {/* Academic Sessions Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AP EXAM PREPARATION",
                  sessions: "30 Sessions",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  features: [
                    "Subject-Specific Strategies",
                    "Advanced Exam Techniques",
                    "Practice & Test Simulation",
                    "Mastering Multiple-Choice Strategies",
                    "Essay Writing Guidance: DBQs and FRQs",
                    "Regular Feedback & Progress Tracking"
                  ]
                },
                {
                  title: "SAT PREP SESSION",
                  sessions: "40 Sessions",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  features: [
                    "In-depth review of Math, Reading, and Writing sections",
                    "Timed practice tests with targeted drills",
                    "Expert guidance on Evidence-Based Reading and Essay Writing",
                    "Personalized feedback and progress tracking"
                  ],
                  popular: true
                },
                {
                  title: "ACT PREP SESSION",
                  sessions: "30 Sessions",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  features: [
                    "Initial assessment to identify strengths and improvement areas",
                    "Conceptual clarity with a foundational approach",
                    "Comprehensive review of Math, English, Reading, Science, and Writing",
                    "Test strategies, time management, and shortcuts for efficiency"
                  ]
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-105 ${
                    plan.popular 
                    ? "border-2 border-red-500 bg-gradient-to-b from-red-900/20 to-gray-800" 
                    : "bg-gray-800"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-red-600 text-white text-sm font-bold text-center py-1">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 bg-gray-700 rounded-lg">
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{plan.title}</h3>
                        <p className="text-gray-400">{plan.sessions}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact-us">
                      <button 
                        className={`w-full py-3 rounded-lg font-medium transition-all ${
                          plan.popular 
                          ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white" 
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                        }`}
                      >
                        Book a Consultation
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* CTA Section */}
    </>
  );
};

export default MembershipPage;


// import React from "react";
// import "./index.css";
// import Accordion from "react-bootstrap/Accordion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import Rozarpayment from "../../Rozarpayment";
// import { Helmet } from "react-helmet-async";
// import CourseCurriculum from "./CourseCurriculum";

// const index = () => {
//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>
//           Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More{" "}
//         </title>
//         <meta
//           name="description"
//           content="Unlock exclusive group sessions, MUN guidance, TED-Ed training, AP prep, and more with LITWITS Membership. Choose your package and start learning today!"
//         />
//         <meta
//           name="keywords"
//           content="Litwits Membership, Litwits Package, Paid Sessions"
//         />
//         <meta
//           property="og:title"
//           content="Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More"
//         />
//         <meta
//           property="og:description"
//           content="Discover a platform where you can write, discuss, and engage in thought-provoking debates."
//         />
//         <meta property="og:url" content="https://litwits.in/" />
//         <link rel="canonical" href="https://litwits.in/" />

//         {/* schema.org JSON-LD for Product */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Product",
//             name: "LITWITS Membership",
//             description:
//               "LITWITS Membership offers various packages including Group Sessions, MUN Guidance, TED-Ed Training, and more for effective learning.",
//             image: "https://litwits.in/assets/litwits-1020x1020.png",
//             offers: [
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - 10 Hours",
//                 price: "12000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - 20 Hours",
//                 price: "18000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - 30 Hours",
//                 price: "25000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - Unlimited",
//                 price: "59000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "TED-Ed Training",
//                 price: "17700",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "MUN Guidance",
//                 price: "17700",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "College Essay Guidance",
//                 price: "17700",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "Research Paper Guidance",
//                 price: "17700",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "AP Exam Preparation",
//                 price: "Consultation",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "SAT Prep Session",
//                 price: "Consultation",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "ACT Prep Session",
//                 price: "Consultation",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//             ],
//             faqPage: {
//               "@type": "FAQPage",
//               mainEntity: [
//                 {
//                   "@type": "Question",
//                   name: "What would be the duration of each individual session?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "Each individual session will last 90 minutes.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "Can I convert my Group Session package to Individual Sessions?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "Yes, conversion is possible. Please contact support for more details.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "Which are the Individual sessions?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "Session timings vary. Please check the schedule for specific details.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "Do you also provide AP (Advanced Placement) courses?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "Yes, we provide comprehensive AP course preparation.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "What are the timings of Individual Sessions?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "Timings vary; please check the schedule for detailed information.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "How much time do I have to complete the MUN Guidance Package?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "There is no strict time limit; however, participants are encouraged to complete it within the suggested timeframe for better results.",
//                   },
//                 },
//               ],
//             },
//           })}
//         </script>
//       </Helmet>
//       <section className="p-11">
//         {/* <CourseCurriculum/> */}
//         <div>
//           <h1 className="text-3xl font-nato pt-6 font-bold text-center mb-8">
//             {" "}
//             GROUP SESSIONS
//           </h1>

//           <hr className="mt-4 mb-4" />
//           {/* Subheading */}
//           <p className="text-lg md:text-xl mb-8 text-center text-gray-800">
//             Duration of each group session will be 90 minutes
//           </p>
//         </div>
//         <div className="flex items-center justify-center px-4 py-8 from-gray-50 to-gray-200 text-center">
//           <table>
//             <thead>
//               <tr>
//                 <th>SESSIONS</th>
//                 <th>VALIDITY</th>
//                 <th>TOTAL FEE IN INR</th>
//                 <th>BUY</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>10</td>
//                 <td>2.5 Months</td>
//                 <td>₹12,000</td>
//                 <td>
//                   <Rozarpayment
//                     inrAmount={12000}
//                     className="choose-plan mt-4"
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>20</td>
//                 <td>4 Months</td>
//                 <td>₹18,000</td>
//                 <td>
//                   <Rozarpayment
//                     inrAmount={18000}
//                     className="choose-plan mt-4"
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>30</td>
//                 <td>6 Months</td>
//                 <td>₹25,000</td>
//                 <td>
//                   <Rozarpayment inrAmount={25000} />
//                 </td>
//               </tr>

//               <tr>
//                 <td>Unlimited</td>
//                 <td>12 Months</td>
//                 <td>₹59,000</td>
//                 <td>
//                   <Rozarpayment
//                     inrAmount={59000}
//                     className="choose-plan mt-4"
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="pricing-container items-center justify-center">
//           <h1 className="text-3xl font-nato pt-6 font-bold text-center mb-8">
//             INDIVIDUAL SESSIONS
//           </h1>
//           <hr class="mt-4 mb-4" />

//           {/* <div className="pricing-plans ">
//             <div className="plan outline outline-2 outline-transparent hover:outline-red-700 transition-all duration-300">
//               <h3 className="uppercase">TED-ED Training</h3>
//               <p className="price">₹17,700 </p>
//               <p className="sessions">5 Sessions</p>
//               <ul>
//                 <li>Understanding the Fundamentals</li>
//                 <li>Crafting the Narrative</li>
//                 <li>Delivery and Manner in Presentations.</li>
//                 <li>Identifying the Problem</li>
//                 <li>Developing Critical Thinking and Planning</li>
//                 <li>Recognition Through ‘TED-Ed Student Talk Program’</li>
//               </ul>
//               <Rozarpayment inrAmount={17700} className="choose-plan mt-4" />
//             </div>
//             <div className="plan highlighted ">
//               <h3 className="uppercase">
//                 MUN Guidance <br />
//                 Package
//               </h3>
//               <p className="price">₹17,700 </p>
//               <p className="sessions">5 Sessions</p>
//               <ul>
//                 <li>Research Material</li>
//                 <li>Position Paper</li>
//                 <li>GSL Speech</li>
//                 <li>Moderated Caucus</li>
//                 <li>Draft Resolution</li>
//                 <li>Press Release / Working Paper</li>
//               </ul>
//               <Rozarpayment inrAmount={17700} className=" choose-plan mt-4" />
//             </div>
//             <div className="plan plan outline outline-2 outline-transparent hover:outline-red-700 transition-all duration-300">
//               <h3 className="uppercase">
//                 College Essay <br /> Guidance
//               </h3>
//               <p className="price">₹17,700 </p>
//               <p className="sessions">5 Sessions</p>
//               <ul>
//                 <li>Essay Structure</li>
//                 <li>Advanced Writing Strategies</li>
//                 <li>Engaging Narratives</li>
//                 <li>Feedback & Tips</li>
//                 <li>Effective Editing</li>
//                 <li>Vocal Techniques</li>
//                 <li>Identify pitfalls in essay writing</li>
//               </ul>
//               <Rozarpayment inrAmount={17700} className="choose-plan mt-4" />
//             </div>
//             <div className="plan plan outline outline-2 outline-transparent hover:outline-red-700 transition-all duration-300">
//               <h3 className="uppercase"> Research Paper Guidance</h3>
//               <p className="price">₹17,700 </p>
//               <p className="sessions">5 Sessions</p>
//               <ul>
//                 <li>Introduction to Research</li>
//                 <li>How to form a thesis</li>
//                 <li>Scientific Method</li>
//                 <li>Conducting an experiment</li>
//                 <li>Drawing conclusions</li>
//                 <li>Case Studies, Citations</li>
//                 <li>Formatting research papers</li>
//               </ul>
//               <Rozarpayment inrAmount={17700} className="choose-plan mt-4" />
//             </div>
//           </div> */}

//           <div className="pricing-plans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "TED-ED Training",
//                 price: 17700,
//                 sessions: "5 Sessions",
//                 features: [
//                   "Understanding the Fundamentals",
//                   "Crafting the Narrative",
//                   "Delivery and Manner in Presentations.",
//                   "Identifying the Problem",
//                   "Developing Critical Thinking and Planning",
//                   "Recognition Through ‘TED-Ed Student Talk Program’",
//                 ],
//               },
//               {
//                 title: "MUN Guidance Package",
//                 price: 17700,
//                 sessions: "5 Sessions",
//                 features: [
//                   "Research Material",
//                   "Position Paper",
//                   "GSL Speech",
//                   "Moderated Caucus",
//                   "Draft Resolution",
//                   "Press Release / Working Paper",
//                 ],
//               },

//               {
//                 title: "Research Paper Guidance",
//                 price: 17700,
//                 sessions: "5 Sessions",
//                 features: [
//                   "Introduction to Research",
//                   "How to form a thesis",
//                   "Scientific Method",
//                   "Conducting an experiment",
//                   "Drawing conclusions",
//                   "Case Studies, Citations",
//                   "Formatting research papers",
//                 ],
//               },
//             ].map((plan, index) => (
//               <div
//                 key={index}
//                 className="plan outline outline-2 outline-transparent hover:outline-red-700 transition-all duration-300 flex flex-col justify-between min-h-[400px] p-6 rounded-lg shadow-md bg-white"
//               >
//                 <div>
//                   <h3 className="uppercase font-semibold text-lg">
//                     {plan.title}
//                   </h3>
//                   <p className="price text-xl font-bold">₹{plan.price}</p>
//                   <p className="sessions text-gray-600">{plan.sessions}</p>
//                   <ul className="mt-4 space-y-2">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="text-gray-700">
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <Rozarpayment
//                   inrAmount={plan.price}
//                   className="choose-plan mt-4 w-full bg-red-600 text-white py-2 rounded-md text-center"
//                 />
//               </div>
//             ))}
//             <br></br>
//           <br></br>
//           <div className=" outline outline-2 outline-transparent hover:outline-red-700 transition-all duration-300 p-6 w-full max-w-lg bg-white rounded-lg shadow-lg">
//             <h2 className="text-gray-800 text-2xl font-bold text-center">
//               COLLEGE COUNSELING
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-6 mt-4 text-gray-700 text-sm">
//               <div className="space-y-2 text-left">
//                 <p>Customised Roadmap</p>
//                 <p>Candidacy Positioning</p>
//                 <p>Essay Brainstorming & Development</p>
//                 <p>Academic Analysis</p>
//                 <p>University Selection</p>
//                 <p>Application Development</p>
//               </div>

//               {/* Vertical Divider */}
//               <div className="hidden md:flex justify-center">
//                 <div className="w-px bg-red-600 h-full"></div>
//               </div>

//               <div className="space-y-2 text-left">
//                 <p>Standardized Testing Preparation and Strategy</p>
//                 <p>Extracurricular Development</p>
//                 <p>Letters of Recommendation</p>
//                 <p>Matriculation</p>
//                 <p>Interview Mentoring</p>
//               </div>
//             </div>

//             <button className="mt-6 w-full bg-red-700 text-white font-semibold py-2 rounded-md text-lg hover:bg-red-800 transition">
//               Book a Consultation
//             </button>
//           </div>
//           </div>

//         </div>
//         <div class="pricing-section items-center justify-center py-16 ">
//           <h1 className="text-3xl font-bold font-nato">ACADEMIC SESSIONS</h1>
//           <hr className="mt-4 mb-4" />

//           <div className="plans-container ">
//             <div className="plan plan outline outline-2 outline-transparent hover:outline-red-700 transition-all duration-300">
//               <h3>AP EXAM PREPARATION</h3>
//               {/* <div className="price">
//                     <p>$211.24 </p>
//                 </div> */}
//               <p className="sessions">30 Sessions</p>
//               <ul>
//                 <li>Subject-Specific Strategies</li>
//                 <li>Advanced Exam Techniques</li>
//                 <li>Practice & Test Simulation</li>
//                 <li>Mastering Multiple-Choice Strategies</li>
//                 <li>Essay Writing Guidance : DBQs and FRQs</li>
//                 <li>Regular Feedback & Progress Tracking</li>
//               </ul>
//               <Link to={"/contact-us"}>
//                 <button className="choose-plan plan outline outline-2 outline-transparent hover:outline-red-700 transition-all duration-300">
//                   Book a Consultation
//                 </button>
//               </Link>
//             </div>

//             <div className="plan highlighted">
//               <h3>SAT PREP SESSION</h3>

//               <p className="sessions">40 Sessions</p>
//               <ul>
//                 <li>In-depth review of Math, Reading, and Writing sections.</li>
//                 <li>Timed practice tests with targeted drills.</li>

//                 <li>
//                   Expert guidance on Evidence-Based Reading and <br /> Essay
//                   Writing.
//                 </li>
//                 <li>Personalized feedback and progress tracking.</li>
//               </ul>
//               <Link to={"/contact-us"}>
//                 <button className="choose-plan">Book a Consultation</button>
//               </Link>
//             </div>

//             <div className="plan  plan outline outline-2 outline-transparent hover:outline-red-700 transition-all duration-300">
//               <h3>ACT PREP SESSION</h3>
//               <p className="sessions">30 Sessions</p>
//               <ul>
//                 <li>
//                   Initial assessment to identify strengths and improvement
//                   areas.{" "}
//                 </li>
//                 <li>Conceptual clarity with a foundational approach.</li>
//                 <li>
//                   Comprehensive review of Math, English, Reading, Science, and
//                   Writing.
//                 </li>
//                 <li>
//                   Test strategies, time management, and shortcuts for
//                   efficiency.
//                 </li>
//               </ul>
//               <Link to={"/contact-us"}>
//                 <button className="choose-plan">Book a Consultation</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default index;



// import React, { useState } from "react";
// import "./index.css";
// import Accordion from "react-bootstrap/Accordion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import Rozarpayment from "../../Rozarpayment";
// import { Helmet } from "react-helmet-async";

// const MembershipPage = () => {
//   const [activeTab, setActiveTab] = useState("group");
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (id) => {
//     setActiveAccordion(activeAccordion === id ? null : id);
//   };

//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>
//           Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More
//         </title>
//         <meta
//           name="description"
//           content="Unlock exclusive group sessions, MUN guidance, TED-Ed training, AP prep, and more with LITWITS Membership. Choose your package and start learning today!"
//         />
//         <meta
//           name="keywords"
//           content="Litwits Membership, Litwits Package, Paid Sessions"
//         />
//         <meta
//           property="og:title"
//           content="Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More"
//         />
//         <meta
//           property="og:description"
//           content="Discover a platform where you can write, discuss, and engage in thought-provoking debates."
//         />
//         <meta property="og:url" content="https://litwits.in/" />
//         <link rel="canonical" href="https://litwits.in/" />

//         {/* schema.org JSON-LD for Product */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Product",
//             name: "LITWITS Membership",
//             description:
//               "LITWITS Membership offers various packages including Group Sessions, MUN Guidance, TED-Ed Training, and more for effective learning.",
//             image: "https://litwits.in/assets/litwits-1020x1020.png",
//             offers: [
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - 10 Hours",
//                 price: "12000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - 20 Hours",
//                 price: "18000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - 30 Hours",
//                 price: "25000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - Unlimited",
//                 price: "59000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "TED-Ed Training",
//                 price: "17700",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "MUN Guidance",
//                 price: "17700",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "College Essay Guidance",
//                 price: "17700",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "Research Paper Guidance",
//                 price: "17700",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "AP Exam Preparation",
//                 price: "Consultation",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "SAT Prep Session",
//                 price: "Consultation",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               {
//                 "@type": "Offer",
//                 name: "ACT Prep Session",
//                 price: "Consultation",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//             ],
//             faqPage: {
//               "@context": "https://schema.org",
//               "@type": "FAQPage",
//               mainEntity: [
//                 {
//                   "@type": "Question",
//                   name: "What would be the duration of each individual session?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "Each individual session will last 90 minutes.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "Can I convert my Group Sessions package to Individual Sessions?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "No, Group Sessions and Individual Sessions are structured and priced separately. Therefore, the Group Sessions package cannot be converted to Individual Sessions.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "Which are the Individual sessions?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "Individual sessions include TED-Ed Training, Academic Prep Session, AP Prep, ACT Prep, SAT Prep, MUN Guidance Package, College Essay Guidance, Writing Guidance Package, Research Paper Guidance, and Social Impact.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "Which AP (Advanced Placement) prep sessions do you offer?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "U.S. History, World History: Modern, Comparative Government and Politics, Macroeconomics, Microeconomics, Biology, Calculus AB, Calculus BC, Statistics, English Language and Composition, English Literature and Composition, Psychology and so on.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "What are the timings of Individual Sessions?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "Individual session timings are scheduled at a mutually convenient time for both the student and the mentor.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "Which sessions can I attend from the Group Sessions package?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: "You may attend any sessions from the weekly schedule as per your interest.",
//                   },
//                 },
//               ],
//             },
//           })}
//         </script>
//       </Helmet>

//       {/* Hero Section */}
//       <section className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-gray-900/80 z-0"></div>
//         <div className="container mx-auto max-w-6xl relative z-10">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 font-nato tracking-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
//                 LITWITS MEMBERSHIP
//               </span>
//             </h1>
//             <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
//             <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Unlock your potential with our comprehensive learning packages
//               designed to enhance your skills in debate, writing, public
//               speaking, and academic excellence.
//             </p>
//           </div>

//           {/* Membership Navigation Tabs */}
//           <div className="flex flex-wrap justify-center mb-4 gap-3">
//             <button
//               onClick={() => setActiveTab("group")}
//               className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 ${
//                 activeTab === "group"
//                   ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/50"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md"
//               }`}
//             >
//               GROUP SESSIONS
//             </button>
//             <button
//               onClick={() => setActiveTab("individual")}
//               className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 ${
//                 activeTab === "individual"
//                   ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/50"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md"
//               }`}
//             >
//               INDIVIDUAL SESSIONS
//             </button>
//             <button
//               onClick={() => setActiveTab("academic")}
//               className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 ${
//                 activeTab === "academic"
//                   ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/50"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md"
//               }`}
//             >
//               ACADEMIC SESSIONS
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Group Sessions Section */}
//       {activeTab === "group" && (
//         <section className="bg-gray-900 text-white py-12 px-4">
//           <div className="container mx-auto max-w-6xl">
//             <div className="mb-12 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 font-nato">
//                 <span className="relative inline-block">
//                   <span className="relative z-10">GROUP SESSIONS</span>
//                   <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
//                 </span>
//               </h2>
//               <div className="h-1 w-16 bg-red-600 mx-auto mb-4"></div>
//               <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//                 Duration of each group session will be 90 minutes. Choose the
//                 package that fits your learning needs.
//               </p>
//             </div>

//             {/* Group Sessions Pricing Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//               {[
//                 {
//                   sessions: "10",
//                   validity: "2.5 Months",
//                   price: 12000,
//                   features: [
//                     "Access to all group sessions",
//                     "2.5 month validity",
//                     "Priority support",
//                   ],
//                 },
//                 {
//                   sessions: "20",
//                   validity: "4 Months",
//                   price: 18000,
//                   features: [
//                     "Access to all group sessions",
//                     "4 month validity",
//                     "Session recordings",
//                   ],
//                   popular: true,
//                 },
//                 {
//                   sessions: "30",
//                   validity: "6 Months",
//                   price: 25000,
//                   features: [
//                     "Access to all group sessions",
//                     "6 month validity",
//                     "Exclusive resources",
//                   ],
//                 },
//                 {
//                   sessions: "Unlimited",
//                   validity: "12 Months",
//                   price: 59000,
//                   features: [
//                     "Unlimited access",
//                     "Full year validity",
//                     "All premium features",
//                   ],
//                   bestValue: true,
//                 },
//               ].map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl ${
//                     plan.popular
//                       ? "border-2 border-red-500"
//                       : plan.bestValue
//                       ? "bg-gradient-to-b from-red-900/30 to-gray-800 border border-red-700/50"
//                       : "bg-gray-800"
//                   }`}
//                 >
//                   {plan.popular && (
//                     <div className="bg-red-600 text-white text-sm font-bold text-center py-1">
//                       MOST POPULAR
//                     </div>
//                   )}
//                   {plan.bestValue && (
//                     <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-bold text-center py-1">
//                       BEST VALUE
//                     </div>
//                   )}
//                   <div className="p-6">
//                     <div className="text-center mb-4">
//                       <h3 className="text-2xl font-bold">
//                         {plan.sessions}{" "}
//                         {plan.sessions === "Unlimited" ? "" : "Sessions"}
//                       </h3>
//                       <p className="text-gray-400">{plan.validity} Validity</p>
//                     </div>
//                     <div className="text-center mb-6">
//                       <span className="text-3xl font-bold">
//                         ₹{plan.price.toLocaleString()}
//                       </span>
//                     </div>
//                     <ul className="space-y-3 mb-6">
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <svg
//                             className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                           <span className="text-gray-300">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     <Rozarpayment
//                       inrAmount={plan.price}
//                       className={`w-full py-3 rounded-lg font-medium transition-all ${
//                         plan.popular || plan.bestValue
//                           ? "bg-red-600 hover:bg-red-700 text-white"
//                           : "bg-gray-700 hover:bg-gray-600 text-white"
//                       }`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Session Details */}
//             <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold mb-6 font-nato text-center">
//                   <span className="border-b-2 border-red-600 pb-2">
//                     WHAT'S INCLUDED
//                   </span>
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <div>
//                     <div className="bg-gray-700/50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
//                         <svg
//                           className="w-6 h-6 mr-2"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                           />
//                         </svg>
//                         Available Session Types
//                       </h4>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
//                         {[
//                           "Core Debate Sessions",
//                           "Core Writing Sessions",
//                           "Core Discussion Sessions",
//                           "World Scholar's Cup Prep",
//                           "Ivy League Competitions Prep",
//                           "Financial Literacy Sessions",
//                           "Entrepreneurship Sessions",
//                           "MUN Prep Sessions",
//                         ].map((item, index) => (
//                           <div key={index} className="flex items-center">
//                             <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
//                             <span className="text-gray-300">{item}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <div className="bg-gray-700/50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
//                         <svg
//                           className="w-6 h-6 mr-2"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                           />
//                         </svg>
//                         Additional Benefits
//                       </h4>
//                       <div className="space-y-3">
//                         {[
//                           "Access to session recordings",
//                           "Exclusive competition resources",
//                           "Team formation assistance",
//                           "Monthly progress reports",
//                           "Resource library access",
//                           "Priority registration for competitions",
//                         ].map((item, index) => (
//                           <div key={index} className="flex items-center">
//                             <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
//                             <span className="text-gray-300">{item}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg border border-gray-700">
//   <div className="flex flex-col md:flex-row items-start">
//     {/* Clock Icon - Left Side */}
//     <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//       <svg
//         className="w-12 h-12 text-red-500"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//     </div>

//     {/* Schedule Content - Right Side */}
//     <div className="flex-1">
//       <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
//         <svg
//           className="w-5 h-5 mr-2 text-red-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//         Session Schedule
//       </h4>

//       <div className="flex flex-col sm:flex-row items-center mb-3">
//         <p className="text-gray-300 mr-4 mb-2 sm:mb-0">
//           Daily: 8:00 PM to 9:30 PM (IST)
//         </p>
//         <div className="bg-red-600 text-xs font-semibold px-2 py-1 rounded">
//           All Time Zones Welcome
//         </div>
//       </div>

//       <div className="grid grid-cols-7 gap-2 mt-4">
//         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
//           (day, index) => (
//             <div
//               key={index}
//               className="text-center py-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
//             >
//               <div className="text-sm font-medium text-gray-300">
//                 {day}
//               </div>
//               <div className="text-xs text-red-400 mt-1">
//                 8-9:30 PM
//               </div>
//             </div>
//           )
//         )}
//       </div>

//       <div className="mt-4 text-sm text-gray-400">
//         <svg
//           className="w-4 h-4 inline mr-1"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//         Sessions available every day of the week
//       </div>
//     </div>
//   </div>
//                 </div>
                
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Individual Sessions Section */}
//       {activeTab === "individual" && (
//         <section className="bg-gray-900 text-white py-12 px-4">
//           <div className="container mx-auto max-w-6xl">
//             <div className="mb-12 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 font-nato">
//                 <span className="relative inline-block">
//                   <span className="relative z-10">INDIVIDUAL SESSIONS</span>
//                   <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
//                 </span>
//               </h2>
//               <div className="h-1 w-16 bg-red-600 mx-auto mb-4"></div>
//               <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//                 Personalized learning experiences tailored to your specific
//                 needs and goals.
//               </p>
//             </div>

//             {/* Individual Sessions Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//               {[
//                 {
//                   title: "TED-ED Training",
//                   price: 17700,
//                   sessions: "5 Sessions",
//                   icon: (
//                     <svg
//                       className="w-10 h-10"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//                       />
//                     </svg>
//                   ),
//                   features: [
//                     "Understanding the Fundamentals",
//                     "Crafting the Narrative",
//                     "Delivery and Manner in Presentations",
//                     "Identifying the Problem",
//                     "Developing Critical Thinking and Planning",
//                     "Recognition Through 'TED-Ed Student Talk Program'",
//                   ],
//                 },
//                 {
//                   title: "MUN Guidance Package",
//                   price: 17700,
//                   sessions: "5 Sessions",
//                   icon: (
//                     <svg
//                       className="w-10 h-10"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                       />
//                     </svg>
//                   ),
//                   features: [
//                     "Research Material",
//                     "Position Paper",
//                     "GSL Speech",
//                     "Moderated Caucus",
//                     "Draft Resolution",
//                     "Press Release / Working Paper",
//                   ],
//                   popular: true,
//                 },
//                 {
//                   title: "Research Paper Guidance",
//                   price: 17700,
//                   sessions: "5 Sessions",
//                   icon: (
//                     <svg
//                       className="w-10 h-10"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
//                       />
//                     </svg>
//                   ),
//                   features: [
//                     "Introduction to Research",
//                     "How to form a thesis",
//                     "Scientific Method",
//                     "Conducting an experiment",
//                     "Drawing conclusions",
//                     "Case Studies, Citations",
//                     "Formatting research papers",
//                   ],
//                 },
//               ].map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-105 ${
//                     plan.popular
//                       ? "border-2 border-red-500 bg-gradient-to-b from-red-900/20 to-gray-800"
//                       : "bg-gray-800"
//                   }`}
//                 >
//                   {plan.popular && (
//                     <div className="bg-red-600 text-white text-sm font-bold text-center py-1">
//                       MOST POPULAR
//                     </div>
//                   )}
//                   <div className="p-6">
//                     <div className="flex items-center mb-4">
//                       <div className="mr-4 p-3 bg-gray-700 rounded-lg">
//                         {plan.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold">{plan.title}</h3>
//                         <p className="text-gray-400">{plan.sessions}</p>
//                       </div>
//                     </div>
//                     <div className="mb-6">
//                       <span className="text-3xl font-bold">
//                         ₹{plan.price.toLocaleString()}
//                       </span>
//                     </div>
//                     <ul className="space-y-3 mb-6">
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-300">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     <Rozarpayment
//                       inrAmount={plan.price}
//                       className={`w-full py-3 rounded-lg font-medium transition-all ${
//                         plan.popular
//                           ? "bg-red-600 hover:bg-red-700 text-white"
//                           : "bg-gray-700 hover:bg-gray-600 text-white"
//                       }`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* College Counseling */}
//             <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-700">
//               <div className="p-8">
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl md:text-3xl font-bold font-nato mb-2">
//                     COLLEGE COUNSELING
//                   </h3>
//                   <div className="h-1 w-12 bg-red-600 mx-auto"></div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                   <div>
//                     <h4 className="text-lg font-semibold mb-3 text-red-400 border-b border-gray-700 pb-2">
//                       Application Development
//                     </h4>
//                     <ul className="space-y-3">
//                       {[
//                         "Customised Roadmap",
//                         "Candidacy Positioning",
//                         "Essay Brainstorming & Development",
//                         "Academic Analysis",
//                         "University Selection",
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
//                           <span className="text-gray-300">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-semibold mb-3 text-red-400 border-b border-gray-700 pb-2">
//                       Additional Support
//                     </h4>
//                     <ul className="space-y-3">
//                       {[
//                         "Standardized Testing Preparation",
//                         "Extracurricular Development",
//                         "Letters of Recommendation",
//                         "Matriculation",
//                         "Interview Mentoring",
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
//                           <span className="text-gray-300">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <Link to="/contact-us">
//                   <button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-red-900/30">
//                     Book a Consultation
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Academic Sessions Section */}
//       {activeTab === "academic" && (
//         <section className="bg-gray-900 text-white py-12 px-4">
//           <div className="container mx-auto max-w-6xl">
//             <div className="mb-12 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 font-nato">
//                 <span className="relative inline-block">
//                   <span className="relative z-10">ACADEMIC SESSIONS</span>
//                   <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
//                 </span>
//               </h2>
//               <div className="h-1 w-16 bg-red-600 mx-auto mb-4"></div>
//               <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//                 Specialized preparation for academic excellence and standardized
//                 tests.
//               </p>
//             </div>

//             {/* Academic Sessions Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "AP EXAM PREPARATION",
//                   sessions: "30 Sessions",
//                   icon: (
//                     <svg
//                       className="w-10 h-10"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                       />
//                     </svg>
//                   ),
//                   features: [
//                     "Subject-Specific Strategies",
//                     "Advanced Exam Techniques",
//                     "Practice & Test Simulation",
//                     "Mastering Multiple-Choice Strategies",
//                     "Essay Writing Guidance: DBQs and FRQs",
//                     "Regular Feedback & Progress Tracking",
//                   ],
//                 },
//                 {
//                   title: "SAT PREP SESSION",
//                   sessions: "40 Sessions",
//                   icon: (
//                     <svg
//                       className="w-10 h-10"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                       />
//                     </svg>
//                   ),
//                   features: [
//                     "In-depth review of Math, Reading, and Writing sections",
//                     "Timed practice tests with targeted drills",
//                     "Expert guidance on Evidence-Based Reading and Essay Writing",
//                     "Personalized feedback and progress tracking",
//                   ],
//                   popular: true,
//                 },
//                 {
//                   title: "ACT PREP SESSION",
//                   sessions: "30 Sessions",
//                   icon: (
//                     <svg
//                       className="w-10 h-10"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//                       />
//                     </svg>
//                   ),
//                   features: [
//                     "Initial assessment to identify strengths and improvement areas",
//                     "Conceptual clarity with a foundational approach",
//                     "Comprehensive review of Math, English, Reading, Science, and Writing",
//                     "Test strategies, time management, and shortcuts for efficiency",
//                   ],
//                 },
//               ].map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-105 ${
//                     plan.popular
//                       ? "border-2 border-red-500 bg-gradient-to-b from-red-900/20 to-gray-800"
//                       : "bg-gray-800"
//                   }`}
//                 >
//                   {plan.popular && (
//                     <div className="bg-red-600 text-white text-sm font-bold text-center py-1">
//                       MOST POPULAR
//                     </div>
//                   )}
//                   <div className="p-6 h-full flex flex-col">
//                     <div className="flex items-center mb-4">
//                       <div className="mr-4 p-3 bg-gray-700 rounded-lg">
//                         {plan.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold">{plan.title}</h3>
//                         <p className="text-gray-400">{plan.sessions}</p>
//                       </div>
//                     </div>
//                     <ul className="space-y-3 mb-6 flex-grow">
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-300">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     <Link to="/contact-us">
//                       <button
//                         className={`w-full py-3 rounded-lg font-medium transition-all ${
//                           plan.popular
//                             ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white"
//                             : "bg-gray-700 hover:bg-gray-600 text-white"
//                         }`}
//                       >
//                         Book a Consultation
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//     </>
//   );
// };

// export default MembershipPage;


// import React, { useState } from "react";
// import "./index.css";
// import Accordion from "react-bootstrap/Accordion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import Rozarpayment from "../../Rozarpayment";
// import { Helmet } from "react-helmet-async";

// const MembershipPage = () => {
//   const [activeTab, setActiveTab] = useState("group");
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (id) => {
//     setActiveAccordion(activeAccordion === id ? null : id);
//   };

//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More</title>
//         <meta
//           name="description"
//           content="Unlock exclusive group sessions, MUN guidance, TED-Ed training, AP prep, and more with LITWITS Membership. Choose your package and start learning today!"
//         />
//         <meta
//           name="keywords"
//           content="Litwits Membership, Litwits Package, Paid Sessions"
//         />
//         <meta
//           property="og:title"
//           content="Buy LITWITS Membership: Group Sessions, MUN, TED-Ed & More"
//         />
//         <meta
//           property="og:description"
//           content="Discover a platform where you can write, discuss, and engage in thought-provoking debates."
//         />
//         <meta property="og:url" content="https://litwits.in/" />
//         <link rel="canonical" href="https://litwits.in/" />

//         {/* schema.org JSON-LD for Product */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Product",
//             name: "LITWITS Membership",
//             description:
//               "LITWITS Membership offers various packages including Group Sessions, MUN Guidance, TED-Ed Training, and more for effective learning.",
//             image: "https://litwits.in/assets/litwits-1020x1020.png",
//             offers: [
//               {
//                 "@type": "Offer",
//                 name: "Group Sessions - 10 Hours",
//                 price: "12000",
//                 priceCurrency: "INR",
//                 validThrough: "2025-12-31",
//               },
//               // ... (rest of your schema data remains the same)
//             ],
//             faqPage: {
//               "@context": "https://schema.org",
//               "@type": "FAQPage",
//               mainEntity: [
//                 // ... (your FAQ data remains the same)
//               ],
//             },
//           })}
//         </script>
//       </Helmet>

//       {/* Hero Section */}
//       <section className="relative bg-gray-900 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-gray-900/80 z-0"></div>
//         <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto text-center">
//             <div className="mb-8">
//               <span className="inline-block bg-red-600/10 text-red-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
//                 PREMIUM LEARNING EXPERIENCE
//               </span>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//                 Elevate Your <span className="text-red-400">Academic Journey</span> With LITWITS
//               </h1>
//               <div className="w-24 h-1.5 bg-red-600 mx-auto mb-6 rounded-full"></div>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                 Comprehensive learning programs designed to develop critical thinking, 
//                 communication skills, and academic excellence.
//               </p>
//             </div>
            
//             {/* Membership Navigation Tabs */}
//             <div className="inline-flex flex-col sm:flex-row rounded-xl bg-gray-800 p-1.5 mb-8">
//               {["group", "individual", "academic"].map((tab) => {
//                 const tabName = {
//                   group: "GROUP SESSIONS",
//                   individual: "INDIVIDUAL SESSIONS",
//                   academic: "ACADEMIC SESSIONS"
//                 }[tab];
                
//                 return (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-3 rounded-lg font-medium transition-all ${
//                       activeTab === tab
//                         ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-md"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                   >
//                     {tabName}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Group Sessions Section */}
//       {activeTab === "group" && (
//         <section className="py-16 px-4 bg-gray-900">
//           <div className="max-w-7xl mx-auto">
//             {/* Section Header */}
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
//                 <span className="relative z-10">
//                   Collaborative Learning Experience
//                 </span>
//                 <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
//               </h2>
//               <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
//               <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//                 Engage in dynamic group sessions with peers and expert mentors. 
//                 Each 90-minute session is designed for maximum interaction and learning.
//               </p>
//             </div>

//             {/* Pricing Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//               {[
//                 {
//                   sessions: "10",
//                   validity: "2.5 Months",
//                   price: 12000,
//                   features: [
//                     "Access to all group sessions",
//                     "2.5 month validity",
//                     "Priority support",
//                   ],
//                 },
//                 {
//                   sessions: "20",
//                   validity: "4 Months",
//                   price: 18000,
//                   features: [
//                     "Access to all group sessions",
//                     "4 month validity",
//                     "Session recordings",
//                   ],
//                   popular: true,
//                 },
//                 {
//                   sessions: "30",
//                   validity: "6 Months",
//                   price: 25000,
//                   features: [
//                     "Access to all group sessions",
//                     "6 month validity",
//                     "Exclusive resources",
//                   ],
//                 },
//                 {
//                   sessions: "Unlimited",
//                   validity: "12 Months",
//                   price: 59000,
//                   features: [
//                     "Unlimited access",
//                     "Full year validity",
//                     "All premium features",
//                   ],
//                   bestValue: true,
//                 },
//               ].map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`relative rounded-xl overflow-hidden transition-all transform hover:scale-[1.02] ${
//                     plan.popular
//                       ? "ring-2 ring-red-500"
//                       : plan.bestValue
//                       ? "bg-gradient-to-b from-red-900/30 to-gray-800 border border-red-700/50"
//                       : "bg-gray-800"
//                   }`}
//                 >
//                   {plan.popular && (
//                     <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
//                       POPULAR
//                     </div>
//                   )}
//                   {plan.bestValue && (
//                     <div className="absolute top-0 right-0 bg-gradient-to-r from-red-700 to-red-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
//                       BEST VALUE
//                     </div>
//                   )}
                  
//                   <div className="p-6">
//                     <div className="text-center mb-6">
//                       <h3 className="text-2xl font-bold text-white mb-2">
//                         {plan.sessions} {plan.sessions === "Unlimited" ? "" : "Sessions"}
//                       </h3>
//                       <p className="text-gray-400 text-sm">{plan.validity} Validity</p>
//                     </div>
                    
//                     <div className="text-center mb-6">
//                       <span className="text-4xl font-bold text-white">
//                         ₹{plan.price.toLocaleString()}
//                       </span>
//                       <span className="text-gray-400 text-sm block mt-1">Total Fee</span>
//                     </div>
                    
//                     <ul className="space-y-3 mb-8">
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <svg
//                             className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                           <span className="text-gray-300">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
                    
//                     <Rozarpayment
//                       inrAmount={plan.price}
//                       className={`w-full py-3 rounded-lg font-medium transition-all ${
//                         plan.popular || plan.bestValue
//                           ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
//                           : "bg-gray-700 hover:bg-gray-600 text-white"
//                       }`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Features Section */}
//             <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
//               <div className="p-8 md:p-12">
//                 <div className="text-center mb-12">
//                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                     Comprehensive Learning Package
//                   </h3>
//                   <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                   {/* Session Types */}
//                   <div>
//                     <div className="flex items-center mb-6">
//                       <div className="bg-red-600/10 p-2 rounded-lg mr-4">
//                         <svg
//                           className="w-8 h-8 text-red-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                           />
//                         </svg>
//                       </div>
//                       <h4 className="text-xl font-semibold text-white">
//                         Diverse Session Formats
//                       </h4>
//                     </div>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {[
//                         "Core Debate Sessions",
//                         "Core Writing Sessions",
//                         "Core Discussion Sessions",
//                         "World Scholar's Cup Prep",
//                         "Ivy League Competitions Prep",
//                         "Financial Literacy Sessions",
//                         "Entrepreneurship Sessions",
//                         "MUN Prep Sessions",
//                       ].map((item, index) => (
//                         <div key={index} className="flex items-start">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-300">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Benefits */}
//                   <div>
//                     <div className="flex items-center mb-6">
//                       <div className="bg-red-600/10 p-2 rounded-lg mr-4">
//                         <svg
//                           className="w-8 h-8 text-red-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                           />
//                         </svg>
//                       </div>
//                       <h4 className="text-xl font-semibold text-white">
//                         Exclusive Member Benefits
//                       </h4>
//                     </div>
                    
//                     <div className="space-y-4">
//                       {[
//                         "Access to session recordings",
//                         "Exclusive competition resources",
//                         "Team formation assistance",
//                         "Monthly progress reports",
//                         "Resource library access",
//                         "Priority registration for competitions",
//                       ].map((item, index) => (
//                         <div key={index} className="flex items-start">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-300">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Schedule Section */}
//                 <div className="mt-16 bg-gradient-to-r from-red-900/30 to-gray-800 rounded-xl border border-gray-700 p-8">
//                   <div className="flex flex-col md:flex-row items-start">
//                     <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
//                       <div className="bg-red-600/10 p-4 rounded-xl">
//                         <svg
//                           className="w-12 h-12 text-red-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                       </div>
//                     </div>
                    
//                     <div className="flex-1">
//                       <h4 className="text-xl font-semibold text-white mb-4">
//                         Weekly Session Schedule
//                       </h4>
                      
//                       <div className="flex flex-wrap items-center gap-3 mb-6">
//                         <span className="inline-flex items-center bg-gray-700/50 text-white px-4 py-2 rounded-full text-sm font-medium">
//                           <svg
//                             className="w-4 h-4 mr-2 text-red-400"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                             />
//                           </svg>
//                           8:00 PM - 9:30 PM IST
//                         </span>
//                         <span className="inline-flex items-center bg-gray-700/50 text-white px-4 py-2 rounded-full text-sm font-medium">
//                           <svg
//                             className="w-4 h-4 mr-2 text-red-400"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                             />
//                           </svg>
//                           All Time Zones Supported
//                         </span>
//                       </div>
                      
//                       <div className="grid grid-cols-7 gap-2 mb-6">
//                         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
//                           <div
//                             key={index}
//                             className="flex flex-col items-center justify-center py-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
//                           >
//                             <span className="text-xs font-medium text-gray-400">DAY</span>
//                             <span className="text-lg font-bold text-white my-1">{day}</span>
//                             <span className="text-xs text-red-400">8-9:30 PM</span>
//                           </div>
//                         ))}
//                       </div>
                      
//                       <div className="flex items-start text-gray-400 text-sm">
//                         <svg
//                           className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                         <p>
//                           <span className="font-medium text-gray-300">Flexible attendance:</span> Join any 
//                           sessions that fit your schedule. All sessions are recorded for later viewing.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Individual Sessions Section */}
//       {activeTab === "individual" && (
//         <section className="py-16 px-4 bg-gray-900">
//           <div className="max-w-7xl mx-auto">
//             {/* Section Header */}
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
//                 <span className="relative z-10">
//                   Personalized Learning Programs
//                 </span>
//                 <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
//               </h2>
//               <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
//               <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//                 One-on-one mentorship programs tailored to your specific academic 
//                 and extracurricular goals.
//               </p>
//             </div>

//             {/* Program Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//               {[
//                 {
//                   title: "TED-ED Training",
//                   price: 17700,
//                   sessions: "5 Sessions",
//                   icon: (
//                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                     </svg>
//                   ),
//                   features: [
//                     "Understanding the Fundamentals",
//                     "Crafting the Narrative",
//                     "Delivery and Manner in Presentations",
//                     "Identifying the Problem",
//                     "Developing Critical Thinking and Planning",
//                     "Recognition Through 'TED-Ed Student Talk Program'"
//                   ]
//                 },
//                 {
//                   title: "MUN Guidance Package",
//                   price: 17700,
//                   sessions: "5 Sessions",
//                   icon: (
//                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   ),
//                   features: [
//                     "Research Material",
//                     "Position Paper",
//                     "GSL Speech",
//                     "Moderated Caucus",
//                     "Draft Resolution",
//                     "Press Release / Working Paper"
//                   ],
//                   popular: true
//                 },
//                 {
//                   title: "Research Paper Guidance",
//                   price: 17700,
//                   sessions: "5 Sessions",
//                   icon: (
//                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
//                     </svg>
//                   ),
//                   features: [
//                     "Introduction to Research",
//                     "How to form a thesis",
//                     "Scientific Method",
//                     "Conducting an experiment",
//                     "Drawing conclusions",
//                     "Case Studies, Citations",
//                     "Formatting research papers"
//                   ]
//                 }
//               ].map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`relative rounded-xl overflow-hidden transition-all transform hover:scale-[1.02] ${
//                     plan.popular 
//                     ? "ring-2 ring-red-500 bg-gradient-to-b from-red-900/20 to-gray-800" 
//                     : "bg-gray-800"
//                   }`}
//                 >
//                   {plan.popular && (
//                     <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
//                       POPULAR CHOICE
//                     </div>
//                   )}
                  
//                   <div className="p-6 h-full flex flex-col">
//                     <div className="flex items-center mb-6">
//                       <div className="bg-red-600/10 p-3 rounded-lg mr-4">
//                         {plan.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-white">{plan.title}</h3>
//                         <p className="text-gray-400 text-sm">{plan.sessions}</p>
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <span className="text-3xl font-bold text-white">₹{plan.price.toLocaleString()}</span>
//                       <span className="text-gray-400 text-sm ml-2">Total Fee</span>
//                     </div>
                    
//                     <ul className="space-y-3 mb-8 flex-grow">
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-300">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
                    
//                     <Rozarpayment
//                       inrAmount={plan.price}
//                       className={`w-full py-3 rounded-lg font-medium transition-all ${
//                         plan.popular 
//                         ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
//                         : "bg-gray-700 hover:bg-gray-600 text-white"
//                       }`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* College Counseling Section */}
//             <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
//               <div className="p-8 md:p-12">
//                 <div className="text-center mb-12">
//                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                     Comprehensive College Counseling
//                   </h3>
//                   <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
//                   <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
//                     Strategic guidance for university applications and admissions success
//                   </p>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-3">
//                       Application Development
//                     </h4>
//                     <ul className="space-y-3">
//                       {[
//                         "Customised Roadmap",
//                         "Candidacy Positioning",
//                         "Essay Brainstorming & Development",
//                         "Academic Analysis",
//                         "University Selection"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-start">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-300">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-3">
//                       Additional Support Services
//                     </h4>
//                     <ul className="space-y-3">
//                       {[
//                         "Standardized Testing Preparation",
//                         "Extracurricular Development",
//                         "Letters of Recommendation",
//                         "Matriculation",
//                         "Interview Mentoring"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-start">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-300">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
                
//                 <Link to="/contact-us">
//                   <button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-red-900/30">
//                     Schedule a Consultation
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Academic Sessions Section */}
//       {activeTab === "academic" && (
//         <section className="py-16 px-4 bg-gray-900">
//           <div className="max-w-7xl mx-auto">
//             {/* Section Header */}
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
//                 <span className="relative z-10">
//                   Academic Excellence Programs
//                 </span>
//                 <span className="absolute bottom-0 left-0 w-full h-2 bg-red-600/50 z-0 -mb-1"></span>
//               </h2>
//               <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
//               <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//                 Specialized preparation for standardized tests and academic subjects
//               </p>
//             </div>

//             {/* Program Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//               {[
//                 {
//                   title: "AP EXAM PREPARATION",
//                   sessions: "30 Sessions",
//                   icon: (
//                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                   ),
//                   features: [
//                     "Subject-Specific Strategies",
//                     "Advanced Exam Techniques",
//                     "Practice & Test Simulation",
//                     "Mastering Multiple-Choice Strategies",
//                     "Essay Writing Guidance: DBQs and FRQs",
//                     "Regular Feedback & Progress Tracking"
//                   ]
//                 },
//                 {
//                   title: "SAT PREP SESSION",
//                   sessions: "40 Sessions",
//                   icon: (
//                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                     </svg>
//                   ),
//                   features: [
//                     "In-depth review of Math, Reading, and Writing sections",
//                     "Timed practice tests with targeted drills",
//                     "Expert guidance on Evidence-Based Reading and Essay Writing",
//                     "Personalized feedback and progress tracking"
//                   ],
//                   popular: true
//                 },
//                 {
//                   title: "ACT PREP SESSION",
//                   sessions: "30 Sessions",
//                   icon: (
//                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                     </svg>
//                   ),
//                   features: [
//                     "Initial assessment to identify strengths and improvement areas",
//                     "Conceptual clarity with a foundational approach",
//                     "Comprehensive review of Math, English, Reading, Science, and Writing",
//                     "Test strategies, time management, and shortcuts for efficiency"
//                   ]
//                 }
//               ].map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`relative rounded-xl overflow-hidden transition-all transform hover:scale-[1.02] ${
//                     plan.popular 
//                     ? "ring-2 ring-red-500 bg-gradient-to-b from-red-900/20 to-gray-800" 
//                     : "bg-gray-800"
//                   }`}
//                 >
//                   {plan.popular && (
//                     <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
//                       MOST POPULAR
//                     </div>
//                   )}
                  
//                   <div className="p-6 h-full flex flex-col">
//                     <div className="flex items-center mb-6">
//                       <div className="bg-red-600/10 p-3 rounded-lg mr-4">
//                         {plan.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-white">{plan.title}</h3>
//                         <p className="text-gray-400 text-sm">{plan.sessions}</p>
//                       </div>
//                     </div>
                    
//                     <ul className="space-y-3 mb-8 flex-grow">
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-300">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
                    
//                     <Link to="/contact-us">
//                       <button
//                         className={`w-full py-3 rounded-lg font-medium transition-all ${
//                           plan.popular 
//                           ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
//                           : "bg-gray-700 hover:bg-gray-600 text-white"
//                         }`}
//                       >
//                         Book a Consultation
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

// </>
//   );
// };

// export default MembershipPage;
