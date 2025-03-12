import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import ScrollToTop from "./ScrollToTop";
import "@fontsource/noto-serif";
import WhatsAppButton from "./sections/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import heroimage from "/assets/join-litwits.avif";

// Lazy Loading Pages
const Hero = lazy(() => import("./sections/Hero"));
const GroupSess = lazy(() => import("./Pages/GroupSessions/GroupSess"));
const IndividualSessions = lazy(() =>
  import("./Pages/IndividualSessions/index")
);
const Membership = lazy(() => import("./Pages/Membership/index"));
const Contact = lazy(() => import("./Pages/Contact/index"));
const RefundPolicy = lazy(() => import("./Pages/Refund/RefundPolicy"));
const TermsAndConditions = lazy(() =>
  import("./Pages/TermsAndConditions/TermsAndConditions")
);
const CollegeCounseling = lazy(() =>
  import("./Pages/CollegeCounseling/CollegeCounseling")
);
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const Blog = lazy(() => import("./Pages/blog"));
const BlogDetails = lazy(() => import("./Pages/blog/BlogDetails"));
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
        <meta property="og:url" content="https://litwits.com/" />
        <link rel="canonical" href="https://litwits.com/" />

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
                telephone: "7827098747",
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
            <Route path="/group-session" element={<GroupSess />} />
            <Route
              path="/individual-session"
              element={<IndividualSessions />}
            />
            <Route path="/membership" element={<Membership />} />
            <Route path="/college-counseling" element={<CollegeCounseling />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/BlogDetails/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <section>
        <WhatsAppButton />
      </section>
      <Footer />
    </>
  );
};

export default App;
