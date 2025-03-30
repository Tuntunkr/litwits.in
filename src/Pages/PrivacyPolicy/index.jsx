import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>LITWITS Privacy Policy: Student Data Protection & Privacy</title>
        <meta
          name="description"
          content="Learn how LITWITS protects your data and respects your privacy. Our privacy policy explains how we handle your information and ensure security."
        />
        <meta
          name="keywords"
          content="Privacy policy, Student data protection, Student Privacy Policy"
        />
        <meta
          property="og:title"
          content="LITWITS Privacy Policy: Student Data Protection & Privacy"
        />
        <meta
          property="og:description"
          content="Learn how LITWITS protects your data and respects your privacy. Our privacy policy explains how we handle your information and ensure security."
        />
        <meta property="og:url" content="https://litwits.in/" />
        <link rel="canonical" href="https://litwits.in/" />

        {/* schema.org JSON-LD for WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://litwits.in/privacy-policy",
            name: "LITWITS Privacy Policy: Student Data Protection & Privacy",
            description:
              "Learn how LITWITS protects your data and respects your privacy. Our privacy policy explains how we handle your information and ensure security.",
            publisher: {
              "@type": "Organization",
              name: "Litwits",
              url: "https://litwits.in/",
              logo: {
                "@type": "ImageObject",
                url: "https://litwits.in/assets/litwits-logo.png",
                width: 600,
                height: 60,
              },
            },
            mainEntity: {
              "@type": "Article",
              headline: "LITWITS Privacy Policy",
              description:
                "Detailed privacy policy outlining how LITWITS handles, protects, and processes user data.",
              articleBody:
                "LITWITS ('we,' 'us,' or 'our') is committed to protecting the privacy and security of our participants' personal information...",
              wordCount: 556,
              datePublished: "2024-12-29T12:00:00+05:30",
              dateModified: "2025-03-16T14:30:00+05:30",
              author: {
                "@type": "Organization",
                name: "Litwits",
                url: "https://litwits.in/",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="font-noto text-gray-800">
        <div className="px-6 py-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">PRIVACY POLICY</h1>
          <p className="text-base mb-6 text-gray-800">
            Effective Date: [29 Dec 2024]
          </p>
          <p className="text-base mb-6 text-gray-800">
            LITWITS ("we," "us," or "our") is committed to protecting the
            privacy and security of our participants' personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website, use our services, or
            participate in our programs. By using our services, you agree to the
            practices described in this policy.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            1. Information We Collect
          </h2>
          <p className="text-base mb-4 text-gray-800">
            <strong>1.1 Personal Information:</strong> When you register for our
            programs, we collect personal information such as your name, email
            address, phone number, date of birth, and payment details.
          </p>
          <p className="text-base mb-4 text-gray-800">
            <strong>1.2 Non-Personal Information:</strong> We may also collect
            non-personal information about your interactions with our website
            and services, such as IP address, browser type, and usage data.
          </p>
          <p className="text-base mb-6">
            <strong>1.3 Usage Data:</strong> We collect data on how you use our
            website and services, including your IP address, browser type, pages
            visited, and time spent on our site.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            2. How We Use Your Information
          </h2>
          <p className="text-base mb-4 text-gray-800">
            <strong>2.1 To Provide Services:</strong> We use your personal
            information to process registrations, manage program participation,
            and communicate with you regarding our programs.
          </p>
          <p className="text-base mb-4 text-gray-800">
            <strong>2.2 To Improve Services:</strong> We may use non-personal
            and usage data to analyze trends, enhance our website, and improve
            our services.
          </p>
          <p className="text-base mb-6 text-gray-800">
            <strong>2.3 To Send Communications:</strong> We may send you
            updates, newsletters, promotional materials, and other information
            related to LITWITS programs and services. You can opt out of
            receiving these communications at any time.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            3. How We Share Your Information
          </h2>
          <p className="text-base mb-4 text-gray-800">
            <strong>3.1 Third-Party Service Providers:</strong> We may share
            your personal information with third-party service providers who
            assist us in operating our website, processing payments, and
            delivering our services. These providers are obligated to protect
            your information and use it only for the purposes for which it was
            shared.
          </p>
          <p className="text-base mb-4 text-gray-800">
            <strong>3.2 Legal Requirements:</strong> We may disclose your
            information if required by law or to comply with legal processes,
            protect our rights, or enforce our terms and conditions.
          </p>
          <p className="text-base mb-6 text-gray-800">
            <strong>3.3 No Sale of Information:</strong> We do not sell, rent,
            or trade your personal information to third parties.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            4. Data Security
          </h2>
          <p className="text-base mb-4 text-gray-800">
            <strong>4.1 Security Measures:</strong> We implement reasonable
            security measures to protect your personal information from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p className="text-base mb-6 text-gray-800">
            <strong>4.2 Data Retention:</strong> We retain your personal
            information for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy, comply with legal obligations, or
            as otherwise required.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            5. Your Rights and Choices
          </h2>
          <p className="text-base mb-4 text-gray-800">
            <strong>5.1 Access and Correction:</strong> You have the right to
            access, update, or correct your personal information held by us. You
            can request changes by contacting us using the contact details
            provided below.
          </p>
          <p className="text-base mb-4 text-gray-800">
            <strong>5.2 Opt-Out:</strong> You may opt out of receiving
            promotional communications from us by following the instructions
            provided in those communications or by contacting us directly.
          </p>
          <p className="text-base mb-6 text-gray-800">
            <strong>5.3 Data Deletion:</strong> If you wish to have your
            personal information deleted, please contact us. We will process
            your request in accordance with applicable laws and regulations.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-base mb-6 text-gray-800">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on our website with an updated effective date. Your
            continued use of our services following the posting of changes
            constitutes your acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            7. Contact Us
          </h2>
          <p className="text-base mb-6">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className="text-base mb-4 text-gray-800">
            LITWITS <br />
            Email: teamlitwits@litwits.in <br />
            Phone: +91 9811701747 <br />
            Address: 14 Second Floor Deerwood Chase Nirvana Sector 50 Gurugram
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
