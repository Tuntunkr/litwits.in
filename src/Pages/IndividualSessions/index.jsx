import { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./individualessions.css";
import apworld from "/assets/advanced-placement-prep-session.avif";
import mdl from "/assets/model-united-nations.avif";
import social from "/assets/social-impact-program.avif";
import actsession from "/assets/act-prep-session.avif";
import Sat from "/assets/sat-prep-session.avif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const GroupSess = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    "Essential Tips",
    "Creative Writing",
    "Descriptive Writing",
    "Poetry",
    "Storytelling",
    "Essay Writing",
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
    <section>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Individual Sessions for MUN, Debate, AP Prep & More | LITWITS{" "}
        </title>
        <meta
          name="description"
          content="Unlock your potential with LITWITS' individual sessions in MUN, Debate, TED-Ed Talks, AP Prep, SAT/ACT, and more. Expert mentors guide you to success."
        />
        <meta
          name="keywords"
          content="Individual sessions, MUN preparation, Debate coaching, AP Prep, TED-Ed training, Advanced Placement"
        />
        <meta
          property="og:title"
          content="Individual Sessions for MUN, Debate, AP Prep & More | LITWITS"
        />
        <meta
          property="og:description"
          content="Discover a platform where you can write, discuss, and engage in thought-provoking debates."
        />
        <meta property="og:url" content="https://litwits.com/" />
        <link rel="canonical" href="https://litwits.com/" />

        {/* Individual SESSIONS */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Litwits",
            url: "https://litwits.in/individual-session",
            logo: "https://litwits.in/assets/individual-session.avif",
            description:
              "Unlock your potential with LITWITS' individual sessions in MUN, Debate, TED-Ed Talks, AP Prep, SAT/ACT, and more. Expert mentors guide you to success.",
            sameAs: [
              "https://www.facebook.com/litwits",
              "https://www.instagram.com/litwits",
              "https://www.linkedin.com/company/litwits",
            ],
            offers: {
              "@type": "Offer",
              name: "Individual Sessions for MUN, Debate, AP Prep & More",
              description:
                "Customised one-on-one sessions in MUN, Debate, TED-Ed Talks, SAT/ACT, and AP Prep, designed for personalised skill development and academic success.",
              url: "https://litwits.in/individual-session",
              availability: "https://schema.org/InStock",
              price: "Contact for pricing",
              priceCurrency: "INR",
            },
            faqPage: {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What subjects are covered in individual sessions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our individual sessions cover MUN, Debate, TED-Ed Talks, AP Prep, SAT/ACT preparation, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do individual sessions differ from group sessions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Individual sessions are tailored to each student's learning pace and goals, providing a focused, personalized experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I switch from individual sessions to group sessions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can switch to group sessions if desired. Please contact support for details.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer trial individual sessions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer trial individual sessions to help students understand the format and benefits.",
                  },
                },
              ],
            },
          })}
        </script>

        {/* MODEL UNITED NATIONS (MUN) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Model United Nations (MUN) Guidance",
            description:
              "Immersive MUN training that prepares students for global diplomacy, impactful position papers, and confident public speaking at prestigious conferences.",
            keywords:
              "Model United Nations, MUN training, diplomacy skills, public speaking, global issues",
            provider: {
              "@type": "EducationalOrganization",
              name: "Litwits",
              url: "https://litwits.in",
              logo: "https://litwits.in/assets/model-united-nations.avif",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9811701747",
                contactType: "customer service",
                email: "info@litwits.in",
              },
            },
            offers: {
              "@type": "Offer",
              name: "MUN Guidance Package",
              category: "Paid",
              price: "17700",
              priceCurrency: "INR",
              validThrough: "2025-12-31",
              availability: "https://schema.org/InStock",
              url: "https://litwits.in/individual-session",
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                name: "Model United Nations (MUN) - Online Sessions",
                courseMode: "Online",
                startDate: "2025-04-01",
                endDate: "2025-12-31",
                location: {
                  "@type": "VirtualLocation",
                  url: "https://litwits.in/individual-session",
                },
                image: "https://litwits.in/assets/model-united-nations.avif",
                instructor: {
                  "@type": "Person",
                  name: "Sudeep Kaur Kohli",
                  jobTitle: "Founder and Academic Coach",
                  affiliation: {
                    "@type": "Organization",
                    name: "Litwits",
                  },
                  url: "https://litwits.in/individual-session",
                },
                duration: "PT90M",
                courseWorkload: "P5W",
                offers: [
                  {
                    "@type": "Offer",
                    name: "MUN Guidance Package",
                    category: "Paid",
                    price: "17700",
                    priceCurrency: "INR",
                    validThrough: "2025-12-31",
                    availability: "https://schema.org/InStock",
                    url: "https://litwits.in/individual-session",
                  },
                ],
              },
            ],
          })}
        </script>

        {/* TED-Ed Student Talks Program */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "TED-Ed Student Talks Program",
            description:
              "Empowering students to transform ideas into powerful narratives, refine critical thinking, and gain recognition through the prestigious TED-Ed platform.",
            keywords:
              "TED-Ed Student Talks, storytelling, critical thinking, social issues, public speaking",
            provider: {
              "@type": "EducationalOrganization",
              name: "Litwits",
              url: "https://litwits.in",
              logo: "https://litwits.in/assets/ted-ed-student-talk-program.avif",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9811701747",
                contactType: "customer service",
                email: "info@litwits.in",
              },
            },
            offers: {
              "@type": "Offer",
              name: "TED-Ed Training",
              category: "Paid",
              price: "17700",
              priceCurrency: "INR",
              validThrough: "2025-12-31",
              availability: "https://schema.org/InStock",
              url: "https://litwits.in/individual-session",
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                name: "TED-Ed Student Talks - Online Sessions",
                courseMode: "Online",
                startDate: "2025-04-01",
                endDate: "2025-12-31",
                location: {
                  "@type": "VirtualLocation",
                  url: "https://litwits.in/individual-session",
                },
                image:
                  "https://litwits.in/assets/ted-ed-student-talk-program.avif",
                instructor: {
                  "@type": "Person",
                  name: "Sudeep Kaur Kohli",
                  jobTitle: "Founder and Academic Coach",
                  affiliation: {
                    "@type": "Organization",
                    name: "Litwits",
                  },
                  url: "https://litwits.in/individual-session",
                },
                duration: "PT90M",
                courseWorkload: "P5W",
                offers: [
                  {
                    "@type": "Offer",
                    name: "TED-Ed Training",
                    category: "Paid",
                    price: "17700",
                    priceCurrency: "INR",
                    validThrough: "2025-12-31",
                    availability: "https://schema.org/InStock",
                    url: "https://litwits.in/individual-session",
                  },
                ],
              },
            ],
          })}
        </script>

        {/* Research Paper Guidance */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Research Paper Guidance",
            description:
              "Comprehensive guidance for students in developing engaging research questions, crafting compelling narratives, and producing high-quality academic work.",
            keywords:
              "Research Paper Guidance, academic writing, thesis development, research skills, citation styles",
            provider: {
              "@type": "EducationalOrganization",
              name: "Litwits",
              url: "https://litwits.in",
              logo: "https://litwits.in/assets/research-paper-guidance.avif",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9811701747",
                contactType: "customer service",
                email: "info@litwits.in",
              },
            },
            offers: {
              "@type": "Offer",
              name: "Research Paper Guidance",
              category: "Paid",
              price: "17700",
              priceCurrency: "INR",
              validThrough: "2025-12-31",
              availability: "https://schema.org/InStock",
              url: "https://litwits.in/individual-session",
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                name: "Research Paper Guidance - Online Sessions",
                courseMode: "Online",
                startDate: "2025-04-01",
                endDate: "2025-12-31",
                location: {
                  "@type": "VirtualLocation",
                  url: "https://litwits.in/individual-session",
                },
                image: "https://litwits.in/assets/research-paper-guidance.avif",
                instructor: {
                  "@type": "Person",
                  name: "Sudeep Kaur Kohli",
                  jobTitle: "Founder and Academic Coach",
                  affiliation: {
                    "@type": "Organization",
                    name: "Litwits",
                  },
                  url: "https://litwits.in/individual-session",
                },
                duration: "PT90M",
                courseWorkload: "P5W",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Research Paper Guidance",
                    category: "Paid",
                    price: "17700",
                    priceCurrency: "INR",
                    validThrough: "2025-12-31",
                    availability: "https://schema.org/InStock",
                    url: "https://litwits.in/individual-session",
                  },
                ],
              },
            ],
          })}
        </script>

        {/* ADVANCED PLACEMENT PREP SESSION */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Advanced Placement (AP) Prep Session",
            description:
              "Personalised coaching for AP subjects like Calculus, Economics, and History to help students excel in college-level coursework and achieve top scores.",
            keywords:
              "Advanced Placement Prep, AP exam preparation, college readiness, subject mastery, test simulation",
            provider: {
              "@type": "EducationalOrganization",
              name: "Litwits",
              url: "https://litwits.in",
              logo: "https://litwits.in/assets/advanced-placement-prep-session.avif",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9811701747",
                contactType: "customer service",
                email: "info@litwits.in",
              },
            },
            offers: {
              "@type": "Offer",
              name: "AP Exam Preparation",
              category: "Paid",
              price: "17700",
              priceCurrency: "INR",
              validThrough: "2025-12-31",
              availability: "https://schema.org/InStock",
              url: "https://litwits.in/individual-session",
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                name: "Advanced Placement (AP) Prep - Online Sessions",
                courseMode: "Online",
                startDate: "2025-04-01",
                endDate: "2025-12-31",
                location: {
                  "@type": "VirtualLocation",
                  url: "https://litwits.in/individual-session",
                },
                image:
                  "https://litwits.in/assets/advanced-placement-prep-session.avif",
                instructor: {
                  "@type": "Person",
                  name: "Sudeep Kaur Kohli",
                  jobTitle: "Founder and Academic Coach",
                  affiliation: {
                    "@type": "Organization",
                    name: "Litwits",
                  },
                  url: "https://litwits.in/individual-session",
                },
                duration: "PT90M",
                courseWorkload: "P30W",
                offers: [
                  {
                    "@type": "Offer",
                    name: "AP Exam Preparation",
                    category: "Paid",
                    price: "17700",
                    priceCurrency: "INR",
                    validThrough: "2025-12-31",
                    availability: "https://schema.org/InStock",
                    url: "https://litwits.in/individual-session",
                  },
                ],
              },
            ],
          })}
        </script>

        {/* SAT PREP SESSION */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "SAT Prep Session",
            description:
              "Expert-led SAT preparation covering Evidence-Based Reading, Writing, and Math, with targeted strategies to improve timing, accuracy, and confidence for optimal test performance.",
            keywords:
              "SAT Prep, SAT coaching, SAT exam strategies, SAT test preparation, SAT math, SAT reading, SAT writing",
            provider: {
              "@type": "EducationalOrganization",
              name: "Litwits",
              url: "https://litwits.in",
              logo: "https://litwits.in/assets/sat-prep-session.avif",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9811701747",
                contactType: "customer service",
                email: "info@litwits.in",
              },
            },
            offers: {
              "@type": "Offer",
              name: "SAT Prep Session",
              category: "Paid",
              price: "17700",
              priceCurrency: "INR",
              validThrough: "2025-12-31",
              availability: "https://schema.org/InStock",
              url: "https://litwits.in/individual-session",
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                name: "SAT Prep Session - Online Sessions",
                courseMode: "Online",
                startDate: "2025-04-01",
                endDate: "2025-12-31",
                location: {
                  "@type": "VirtualLocation",
                  url: "https://litwits.in/individual-session",
                },
                image: "https://litwits.in/assets/sat-prep-session.avif",
                instructor: {
                  "@type": "Person",
                  name: "Sudeep Kaur Kohli",
                  jobTitle: "Founder and Academic Coach",
                  affiliation: {
                    "@type": "Organization",
                    name: "Litwits",
                  },
                  url: "https://litwits.in/individual-session",
                },
                duration: "PT90M",
                courseWorkload: "P40W",
                offers: [
                  {
                    "@type": "Offer",
                    name: "SAT Prep Session",
                    category: "Paid",
                    price: "17700",
                    priceCurrency: "INR",
                    validThrough: "2025-12-31",
                    availability: "https://schema.org/InStock",
                    url: "https://litwits.in/individual-session",
                  },
                ],
              },
            ],
          })}
        </script>

        {/* ACT PREP SESSION */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "ACT Prep Session",
            description:
              "Tailored ACT preparation with personalised lesson plans that build core skills in English, Math, Reading, and Science, ensuring students excel with confidence.",
            keywords:
              "ACT Prep, ACT coaching, ACT exam strategies, ACT test preparation, ACT math, ACT reading, ACT writing, ACT science",
            provider: {
              "@type": "EducationalOrganization",
              name: "Litwits",
              url: "https://litwits.in",
              logo: "https://litwits.in/assets/act-prep-session.avif",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9811701747",
                contactType: "customer service",
                email: "info@litwits.in",
              },
            },
            offers: {
              "@type": "Offer",
              name: "ACT Prep Session",
              category: "Paid",
              price: "17700",
              priceCurrency: "INR",
              validThrough: "2025-12-31",
              availability: "https://schema.org/InStock",
              url: "https://litwits.in/individual-session",
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                name: "ACT Prep Session - Online Sessions",
                courseMode: "Online",
                startDate: "2025-04-01",
                endDate: "2025-12-31",
                location: {
                  "@type": "VirtualLocation",
                  url: "https://litwits.in/individual-session",
                },
                image: "https://litwits.in/assets/act-prep-session.avif",
                instructor: {
                  "@type": "Person",
                  name: "Sudeep Kaur Kohli",
                  jobTitle: "Founder and Academic Coach",
                  affiliation: {
                    "@type": "Organization",
                    name: "Litwits",
                  },
                  url: "https://litwits.in/individual-session",
                },
                duration: "PT90M",
                courseWorkload: "P30W",
                offers: [
                  {
                    "@type": "Offer",
                    name: "ACT Prep Session",
                    category: "Paid",
                    price: "17700",
                    priceCurrency: "INR",
                    validThrough: "2025-12-31",
                    availability: "https://schema.org/InStock",
                    url: "https://litwits.in/individual-session",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}

      <section
        id="home"
        className="bg-cover bg-center h-[40vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/assets/individual-session.avif')",
          fontFamily: "'Noto Sans', sans-serif",
        }}
        role="img"
        aria-label="Individual Sessions for focused learning in key academic and leadership areas."
        aria-describedby="individual-sessions-description"
      >
        <div className="container mx-auto px-4 text-center bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-[4vw] md:text-[3vw] uppercase lg:text-[50px] font-bold mb-4">
            Individual SESSIONS
          </h1>
        </div>
        {/* Descriptive Content for Accessibility */}
        <p id="individual-sessions-description" className="sr-only">
          Customised one-on-one sessions in MUN, Debate, TED-Ed Talks, SAT/ACT,
          and AP Prep, designed for personalised skill development and academic
          success.
        </p>
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
              <h2 className="text-3xl text-start font-bold text-red-700 mb-4">
                MODEL UNITED NATIONS (MUN)
              </h2>
              <p className="text-gray-700">
                Model United Nations offers students an immersive experience in
                global diplomacy, negotiation, and international relations.
                Through personalised coaching, students understand the dynamics
                of real UN committees, allowing students to navigate complex
                global issues, and draft impactful position papers and
                resolutions.  The guidance and training at LITWITS has empowered
                students to succeed at prestigious MUN conferences, reflecting
                their preparedness and confidence on the global stage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                <Link
                  to="https://wa.me/7827098747?text=Hi! I’m interested in your Model United Nations (MUN) Program. Please share details about the program and I request a free consultation."
                  className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                  Free Consultation
                </Link>

                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 w-full no-underline uppercase rounded-md text-base font-medium transition text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
            <img
              src={mdl}
              alt="Model United Nations training for diplomacy, negotiation, and leadership skills."
              style={{ height: "350px" }}
              className="rounded-lg shadow-lg w-full object-cover"
              title="Model United Nations (MUN) at Litwits"
              aria-label="Model United Nations (MUN) at Litwits"
              aria-describedby="Immersive MUN training that prepares students for global diplomacy, impactful position papers, and confident public speaking at prestigious conferences."
            />
          </div>
        </div>
      </section>

      {/* World Scholar's Cup */}
      <section id="voices" className="py-16 bg-gray-50">
        <div
          className="relative flex items-center justify-center h-[700px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/ted-ed-student-talk-program.avif')`,
            backgroundAttachment: "fixed", // Enables parallax effect
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="TED-Ed Student Talks Program with expert mentorship on social issues and storytelling."
          aria-describedby="ted-ed-program-description"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Dark overlay */}
          <div className="relative text-center text-white max-w-4xl px-4">
            {/* Title */}
            <h1 className="font-nato font-bold text-3xl md:text-5xl mb-4">
              TED-ED STUDENT TALKS
            </h1>

            {/* Description Paragraphs */}
            <p className="text-left font-nato text-sm sm:text-base md:text-lg leading-6 md:leading-7 text-white mb-4">
              Shaping passion for social responsibility through a thoughtfully
              designed program, students embark on an enriching journey
              exploring diverse perspectives and refining their critical
              thinking abilities.
            </p>

            <p className="text-left font-nato text-sm sm:text-base md:text-lg leading-6 md:leading-7 text-white mb-4">
              Guided by experienced mentors, students identify a problem or a
              gap in the field that interests them—such as social justice,
              gender justice, education, or healthcare. We work with them to
              understand the fundamentals, ideate sustainable solutions, craft
              narratives, think critically on the subject, and develop their
              video presentations for the 'TED-Ed Student Talk Program'
              platform.
            </p>

            <p className="text-left font-nato text-sm sm:text-base md:text-lg leading-6 md:leading-7 text-white">
              The TED-Ed Student Talks Program empowers students to transform
              their ideas into powerful narratives, gain recognition through the
              prestigious TED-Ed platform, and leave a lasting impact on global
              audiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
              <Link
                to="https://wa.me/7827098747?text=Hi! I’m interested in your TED-Ed Student Talks Program. Please share details about the program and I request a free consultation."
                className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
              >
                Free Consultation
              </Link>

              <Link
                to="/membership"
                className="text-white bg-black px-6 py-3 w-full no-underline uppercase rounded-md text-base font-medium transition text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
          {/* Descriptive Content for Accessibility */}
          <p id="ted-ed-program-description" className="sr-only">
            The TED-Ed Student Talks Program empowers students to explore
            diverse perspectives, refine critical thinking skills, and transform
            ideas into powerful narratives through expert mentorship.
          </p>
        </div>
      </section>

      {/* Mun section  */}
      <section
        id="individual-session"
        className="container-fluid mx-auto py-16 bg-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={social}
              alt="Social Impact Program empowering students as changemakers."
              style={{ height: "450px" }}
              className="rounded-lg shadow-lg w-full"
              title="Social Impact Program at Litwits"
              aria-label="Social Impact Program at Litwits"
              aria-describedby="The Social Impact Program empowers students to align personal values with global initiatives, fostering ethical leadership and impactful change in their communities."
            />
            <div>
              <h2 className="text-3xl text-start font-bold text-red-700 mb-4">
                SOCIAL IMPACT
              </h2>
              <p className="text-gray-700">
                The Social Impact Program at LITWITS is committed to cultivating
                students' sense of purpose and global awareness. Guided by
                experienced mentors, students align their personal values with
                broader global initiatives, establish strong ethical
                foundations, and lead projects that drive lasting change.
              </p>
              <p className="text-gray-700">
                With mentors who bring expertise from local government
                initiatives and extensive collaboration with NGOs, students gain
                invaluable real-world experience through hands-on engagement.
                This empowers them to create sustainable solutions that make a
                meaningful impact within their communities. By blending
                entrepreneurship with social consciousness, the program equips
                students to identify and address critical social issues,
                transforming them into changemakers who turn ideas into
                actionable, impactful solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                <Link
                  to="https://wa.me/7827098747?text=Hi! I’m interested in your Social Impact Program. Please share details about the program and I request a free consultation."
                  className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                  Free Consultation
                </Link>

                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 no-underline w-full uppercase rounded-md text-base font-medium transition text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Writing Section */}

      {/* World Scholar's Cup */}
      <section id="voices" className="py-16 bg-gray-50">
        <div
          className="relative flex items-center justify-center h-[495px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/research-paper-guidance.avif')`,
            backgroundAttachment: "fixed", // Replace with a proper URL for the image
          }}
          role="img"
          aria-label="Research Paper Guidance for academic success and effective writing skills."
          aria-describedby="research-paper-description"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
          {/* Dark overlay */}
          <div className="relative text-center text-white max-w-4xl px-4">
            {/* Title */}
            <h1 className="font-nato font-bold text-3xl md:text-5xl mb-4">
              RESEARCH PAPER GUIDANCE
            </h1>

            {/* Description */}
            <p className="text-left font-nato text-sm md:text-lg leading-relaxed">
              Our Research Paper Writing sessions support students throughout
              the entire process— from developing engaging research questions in
              fields of their interest to identifying gaps in their chosen
              field. We lay the groundwork for a coherent narrative that guides
              them through the literature review, thesis development, citation
              styles, and ethical research practices.
            </p>

            <p className="text-left font-nato text-sm md:text-lg leading-relaxed mt-4">
              In an information-rich world, mastering research and effective
              presentation is crucial. Our program empowers students to produce
              high-quality papers while developing essential analytical and
              writing skills, transforming their ideas into compelling research
              works.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
              <Link
                to="https://wa.me/7827098747?text=Hi! I’m interested in your Research Paper Guidance Program. Please share details about the program and I request a free consultation."
                className="bg-red-800 text-white px-6 py-3  no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
              >
                Free Consultation
              </Link>

              <Link
                to="/membership"
                className="text-white bg-black px-6 py-3 w-full  no-underline uppercase rounded-md text-base font-medium transition text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
          {/* Descriptive Content for Accessibility */}
          <p id="research-paper-description" className="sr-only">
            Comprehensive research paper guidance from developing engaging
            questions to crafting compelling narratives, ensuring students
            produce high-quality academic work.
          </p>
        </div>
      </section>

      {/* Mun section  */}
      <section
        id="individual-session"
        className="container-fluid mx-auto py-16 bg-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={apworld}
              alt="Advanced Placement Prep Session for comprehensive subject mastery and university readiness."
              style={{ height: "280px" }}
              className="rounded-lg shadow-lg w-full"
              title="Advanced Placement (AP) Program at Litwits"
              aria-label="Advanced Placement (AP) Program at Litwits"
              aria-describedby="Personalised coaching in AP subjects like Calculus, Economics, and History, with tailored lessons to help students excel in college-level coursework and achieve top scores."
            />
            <div>
              <h2 className="text-3xl text-start font-bold text-red-700 mb-4">
                ADVANCED PLACEMENT PREP SESSION
              </h2>
              <p className="text-gray-700">
                LITWITS' Advanced Placement (AP) Program offers high school
                students the chance to excel in college-level coursework and
                earn credits that strengthen university applications. Our expert
                subject mentors provide personalised coaching across AP
                subjects, including Calculus, Economics, English, History, and
                Psychology. Through tailored lessons and in-depth feedback, we
                ensure students are well-prepared and ready to achieve to score
                a 5 and set the foundation for college success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                <Link
                  to="https://wa.me/7827098747?text=Hi! I’m interested in your Advanced Placement (AP) Prep Session. Please share details about the program and I request a free consultation."
                  className="bg-red-800 text-white px-6 py-3  no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                  Free Consultation
                </Link>

                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 w-full  no-underline uppercase rounded-md text-base font-medium transition text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Writing Section */}

      <section>
        <div
          className="container-fluid relative bg-red-900 py-8"
          style={{
            height: "500px",
            backgroundImage: `url(${Sat})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // Enables parallax effect
          }}
          role="img"
          aria-label="SAT Prep Session with targeted strategies for improved test performance."
          aria-describedby="sat-prep-session-description"
        >
          {/* Overlay for opacity */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            style={{
              zIndex: 1, // Ensures the overlay is below the text
            }}
          ></div>

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-[1499px] mx-auto p-4 lg:p-8 flex flex-col items-center justify-center text-center"
            style={{ height: "100%" }}
          >
            {/* Text Content */}
            <div className="max-w-3xl">
              {" "}
              {/* Restrict width for better readability */}
              <h1 className="font-nato font-bold text-2xl text-white mb-4 lg:text-3xl">
                SAT PREP SESSION
              </h1>
              <p className="font-nato text-sm text-white text-start leading-relaxed lg:text-lg">
                Through expert instruction and targeted strategies, we focus on
                all SAT sections: Evidence-Based Reading, Writing and Language,
                and Math.By understanding the test format, mastering timing, and honing
                question-handling techniques, students are equipped to approach
                each section with precision, confidence, accuracy, and
                test-taking speed, giving students the needed edge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                <Link
                  to="https://wa.me/7827098747?text=Hi! I’m interested in your SAT Prep Session. Please share details about the program and I request a free consultation."
                  className="bg-red-800 text-white px-6 py-3  no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                  Free Consultation
                </Link>

                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 w-full  no-underline uppercase rounded-md text-base font-medium transition text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
            
          {/* Descriptive Content for Accessibility */}
          <p id="sat-prep-session-description" className="sr-only">
            Expert-led SAT preparation covering Evidence-Based Reading, Writing,
            and Math, with targeted strategies to improve timing, accuracy, and
            confidence for optimal test performance.
          </p>
        </div>
      </section>

      <section
        id="individual-session"
        className="container-fluid mx-auto py-16 bg-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={actsession}
              alt="ACT Prep Session for focused skill enhancement and test readiness."
              style={{ height: "380px" }}
              className="rounded-lg shadow-lg w-full"
              title="ACT Prep Session with Litwits"
              aria-label="ACT Prep Session with Litwits"
              aria-describedby="Tailored ACT preparation with personalised lesson plans that build core skills in English, Math, Reading, and Science, ensuring students excel with confidence."
            />
            <div>
              <h2 className="text-3xl text-start font-bold text-red-700 mb-4">
                ACT PREP SESSION
              </h2>
              <p className="text-gray-700">
                Our ACT mentors, with expertise in English, Mathematics,
                Science, and Reading, craft personalised lesson plans tailored
                to address each student’s strengths and areas for growth.
                Covering all key sections of the ACT — English, Math, Reading,
                Science, and Writing (optional) — we focus on enhancing core
                academic skills, teaching time management, and building
                confidence to tackle complex questions under timed conditions.
                From interpreting data in science passages to solving advanced
                math problems, students gain the tools needed to excel in every
                aspect of the test. Through practice tests, targeted
                assessments, and comprehensive feedback, we track students'
                progress and implement continual enhancements to ensure the
                pursuit of excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto mt-12">
                <Link
                  to="https://wa.me/7827098747?text=Hi! I’m interested in your ACT Prep Session. Please share details about the program and I request a free consultation."
                  className="bg-red-800 text-white px-6 py-3 no-underline uppercase w-full rounded-md text-base font-medium hover:bg-red-700 transition text-center"
                >
                  Free Consultation
                </Link>

                <Link
                  to="/membership"
                  className="text-white bg-black px-6 py-3 w-full no-underline uppercase rounded-md text-base font-medium transition text-center"
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
          What would be the duration of each individual session?
        </Accordion.Header>
        <Accordion.Body className="bg-[#890C25] text-white">
          Each individual session is 90 minutes, ensuring ample time for in-depth learning, interactive discussions, and personalized guidance from our expert mentors.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Which are the Individual Sessions available?
        </Accordion.Header>
        <Accordion.Body className="bg-[#890C25] text-white">
          Our Individual Sessions are designed to cater to specific learning needs and personalized mentorship. Currently, we offer:
          <ul className="list-disc pl-5">
            <li>TED-Ed Training</li>
            <li>MUN Guidance Package</li>
            <li>College Essay Guidance</li>
            <li>Research Paper Guidance</li>
            <li>Social Impact</li>
            <li>Tailor-made sessions as per the requirement of the student</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Do you also provide AP (Advanced Placement) courses?
        </Accordion.Header>
        <Accordion.Body className="bg-[#890C25] text-white">
          Yes, we offer Advanced Placement (AP) courses to help students prepare for AP exams. These courses are designed to provide comprehensive subject knowledge, practice tests, and exam strategies to ensure high scores.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          What are the timings of Individual Sessions?
        </Accordion.Header>
        <Accordion.Body className="bg-[#890C25] text-white">
          Since Individual Sessions offer personalized mentorship, they are scheduled at a mutually convenient time for both the student and the mentor. We ensure flexibility to accommodate different time zones and student schedules.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          How much time do I have to complete the MUN Guidance Package?
        </Accordion.Header>
        <Accordion.Body className="bg-[#890C25] text-white">
          The MUN Guidance Package must be completed within two weeks from the start date. This structure ensures consistency in learning and allows students to fully grasp the key concepts and strategies needed for MUN success.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Can I convert my Group Session package to Individual Sessions?
        </Accordion.Header>
        <Accordion.Body className="bg-[#890C25] text-white">
          No. Group Sessions and Individual Sessions are structured and priced separately.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</section>

    </section>
  );
};

export default GroupSess;
