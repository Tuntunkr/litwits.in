import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import ScrollToTop from "./ScrollToTop";
import "@fontsource/noto-serif";
import WhatsAppButton from "./sections/WhatsAppButton";
import { Helmet } from "react-helmet-async";

// Lazy Loading Pages
const Hero = lazy(() => import("./sections/Hero"));
const GroupSess = lazy(() => import("./Pages/GroupSessions/GroupSess"));
const IndividualSessions = lazy(() => import("./Pages/IndividualSessions/index"));
const Membership = lazy(() => import("./Pages/Membership/index"));
const Contact = lazy(() => import("./Pages/Contact/index"));
const RefundPolicy = lazy(() => import("./Pages/Refund/RefundPolicy"));
const TermsAndConditions = lazy(() => import("./Pages/TermsAndConditions/TermsAndConditions"));
const CollegeCounseling = lazy(() => import("./Pages/CollegeCounseling/CollegeCounseling"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const Blog = lazy(() => import("./Pages/blog"));
const BlogDetails = lazy(() => import("./Pages/blog/BlogDetails"));
const NotFound = lazy(() => import("./Pages/404"));

const App = () => {
  return (
    <>
      <Helmet>
        <title>Litwits - Your Trusted Platform</title>
        <meta name="description" content="Litwits offers expert counseling, membership programs, and valuable blog insights to help you on your journey." />
        <meta name="keywords" content="Litwits, counseling, sessions, membership, blog" />
        <meta property="og:title" content="Litwits - Your Trusted Platform" />
        <meta property="og:description" content="Join our expert-led counseling and membership programs for personal and professional growth." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://litwits.com/" />
        <link rel="canonical" href="https://litwits.com/" />
      </Helmet>

      <ScrollToTop />
      <Nav />
      <div>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/group-session" element={<GroupSess />} />
            <Route path="/individual-session" element={<IndividualSessions />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/college-counseling" element={<CollegeCounseling />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
