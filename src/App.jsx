import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import ScrollToTop from "./ScrollToTop";
import "@fontsource/noto-serif";
import WhatsAppButton from "./sections/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import heroimage from "/assets/join-litwits.avif";
import IntroductionToTheWorldScholarsCup2025Tournament from "./Pages/blog/IntroductionToTheWorldScholarsCup2025Tournament";
import SATPreparation2025 from "./Pages/blog/SatBlog";
import BlogRedirect from "./components/BlogRedirect";
import LearnAllAboutDifferentTypesOfDebate from "./Pages/blog/LearnAllAboutDifferentTypesofDebate";
import ExploreDifferentTypesOfWritingFormats from "./Pages/blog/ExploreDifferentTypesOfWritingFormats";
import UltimateguidetodebateTraining from "./Pages/blog/UltimateguidetodebateTraining";
import TopDebateCompetitionsforSchoolStudents from "./Pages/blog/TopDebateCompetitionsforSchoolStudents";
import Competition from "./Pages/blog/ Competitions";
import ChatBot from "./sections/ChatBot";
import Mun from "./Pages/blog/Mun-blog";
import Mastering from './Pages/blog/Mastering-the-Art-of-Research-Paper-Writing'
import Adult from "./Pages/IndividiualAdult";
// import TypesOfDebate from "./Pages/blog/TypesOfDebate";

// Lazy Loading Pages
const Hero = lazy(() => import("./sections/Hero"));
const Session = lazy(() => import("./Pages/Sessions/GroupSess"));
const WorldScholarsCup = lazy(() => import("./Pages/World Scholars Cup/index"));
const Membership = lazy(() => import("./Pages/Membership/index"));
const Contact = lazy(() => import("./Pages/Contact/index"));
const RefundPolicy = lazy(() => import("./Pages/Refund/RefundPolicy"));
const TermsAndConditions = lazy(() =>
  import("./Pages/TermsAndConditions/TermsAndConditions")
);
const GroupSess = lazy(() => import("./Pages/GroupSessions/GroupSess"));
const IndividualSessions = lazy(() =>
  import("./Pages/IndividualSessions/index")
);
const CollegeCounseling = lazy(() =>
  import("./Pages/CollegeCounseling/CollegeCounseling")
);
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const Blog = lazy(() => import("./Pages/blog"));
const BlogDetails = lazy(() =>
  import("./Pages/blog/Advanced-Placement-Exam-2025")
);
const World = lazy(() =>
  import("./Pages/blog/IntroductionToTheWorldScholarsCup2025Tournament")
);
const NotFound = lazy(() => import("./Pages/404"));

const App = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Join LITWITS for Debate, Writing, AP Prep & World Scholar's Cup!
        </title>
        <meta
          name="description"
          content="Join LITWITS to enhance debating, writing, research, and public speaking. Expert mentors prepare students for Ivy League admissions, World Scholar's Cup, and more."
        />
        <meta
          name="keywords"
          content="Litwits, Litwits Preparation, Litwits Courses"
        />
        <meta
          property="og:title"
          content="Join LITWITS for Debate, Writing, AP Prep & World Scholar's Cup!"
        />
        <meta
          property="og:description"
          content="Join LITWITS to enhance debating, writing, research, and public speaking. Expert mentors prepare students for Ivy League admissions, World Scholar's Cup, and more."
        />
        <meta property="og:image" content={heroimage} />
        <meta property="og:url" content="https://litwits.in/" />
        <link rel="canonical" href="https://litwits.in/" />

        {/* Schema.org JSON-LD for Educational Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "@id": "https://litwits.in/#organization",
            name: "Litwits",
            alternateName:
              "Litwits Preparation, Litwits Academy, Litwits Sessions, Litwits Professional Training and Coaching",
            url: "https://litwits.in/",
            logo: "https://litwits.in/Favicon-96x96.png",
            founders: [
              {
                "@type": "Person",
                name: "Sudeep Kaur Kohli",
                jobTitle: "Founder & CEO",
                description:
                  "Founder & CEO at LITWITS | Business Blasters Coach, Government of Delhi | Writer",
                image: "https://litwits.in/assets/founder-sudeep-kohli.jpg",
                sameAs: ["https://in.linkedin.com/in/sudeepkohli"],
              },
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "9811701747",
                contactType: "customer service",
                contactOption: "TollFree",
                areaServed: "IN",
                availableLanguage: "en",
              },
              {
                "@type": "ContactPoint",
                telephone: "9811701747",
                contactType: "customer service",
                contactOption: "TollFree",
                areaServed: "IN",
                availableLanguage: "en",
              },
            ],
            sameAs: [
              "https://www.facebook.com/lits.wits/",
              "https://www.instagram.com/_litwits_",
              "https://in.linkedin.com/company/litwitsglobal",
            ],
            keywords: [
              "Debate Training and Coaching",
              "Creative Writing Course",
              "AP Preparation",
              "Ivy League Preparation",
              "Public Speaking",
              "SAT Preparation",
              "World Scholar's Cup Preparation",
            ],
          })}
        </script>

        {/* Schema.org JSON-LD for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://litwits.in/#organization",
            name: "Litwits",
            image: "https://litwits.in/assets/join-litwits.avif",
            url: "https://litwits.in/",
            telephone: "9811701747",
            email: "teamlitwits@litwits.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "14, Deerwood Chase, Nirvana Country",
              addressLocality: "Gurgaon",
              addressRegion: "Haryana",
              postalCode: "122018",
              addressCountry: "IN",
            },
            openingHours: "Mo-Fr 09:00-18:00",
            priceRange: "₹10000+",
            sameAs: [
              "https://www.facebook.com/lits.wits/",
              "https://www.instagram.com/_litwits_",
              "https://in.linkedin.com/company/litwitsglobal",
            ],
          })}
        </script>
      </Helmet>

      <ScrollToTop />
      <Nav />
      <div>
        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Session" element={<Session />} />
            <Route path="/world-scholars-cup" element={<WorldScholarsCup />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/college-counseling" element={<CollegeCounseling />} />

            <Route path="/group-sessions" element={<GroupSess />} />
            <Route
              path="/individual-sessions"
              element={<IndividualSessions />}
            />
            <Route path="/individual-adult" element={<Adult />} />

            <Route path="/contact-us" element={<Contact />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id/:title" element={<BlogRedirect />} />
            <Route path="/blog/:title" element={<BlogDetails />} />
            <Route
              path="/blog/introduction-to-the-world-scholars-cup-2025-tournament"
              element={<IntroductionToTheWorldScholarsCup2025Tournament />}
            />
            <Route
              path="/blog/sat-preparation-2025-how-to-prepare-for-sat-exam"
              element={<SATPreparation2025 />}
            />
            <Route
              path="/blog/learn-all-about-different-types-of-debate"
              element={<LearnAllAboutDifferentTypesOfDebate />}
            />
            <Route
              path="/blog/explore-different-types-of-writing-formats"
              element={<ExploreDifferentTypesOfWritingFormats />}
            />
            <Route
              path="/blog/ultimate-guide-to-debate-training"
              element={<UltimateguidetodebateTraining />}
            />
            <Route
              path="/blog/top-debate-competitions-for-school-students"
              element={<TopDebateCompetitionsforSchoolStudents />}
            />
            <Route
              path="/blog/Understanding-Debate-Competitions"
              element={<Competition></Competition>}
            ></Route>
            <Route path="/blog/Mun-blog" element={<Mun></Mun>}></Route>
             <Route 
             path="/blog/research-paper-writing-guidance" 
             element={<Mastering/>}>
             </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <section>
        <WhatsAppButton />
        {/* <ChatBot/> */}
      </section>
      <Footer />
    </>
  );
};

export default App;
