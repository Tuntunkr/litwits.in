import React from "react";
import { Helmet } from "react-helmet-async";

const RefundPolicy = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>LITWITS Refund Policy: Terms for Refunds & Cancellations</title>
        <meta
          name="description"
          content="Review LITWITS’ refund policy for details on cancellations, refunds, and eligibility. We prioritize your satisfaction and transparency in services."
        />
        <meta name="keywords" content="refund policy, cancellations, refund terms, Litwits refund" />
        <meta property="og:title" content="LITWITS Refund Policy: Terms for Refunds & Cancellations" />
        <meta
          property="og:description"
          content="Review LITWITS’ refund policy for details on cancellations, refunds, and eligibility. We prioritize your satisfaction and transparency in services."
        />
        <meta property="og:url" content="https://litwits.com/" />
        <link rel="canonical" href="https://litwits.com/" />
      </Helmet>
    
    <div className="font-noto text-gray-800 px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        LITWITS Refund Policy
      </h1>
      <p className="text-gray-600 text-center mb-4">
        Effective Date: [26-09-2024]
      </p>
      <p className="text-gray-600 mb-4">
        All sales of online classes provided by LITWITS ("we," "us," or "our") are final. By purchasing our products or services, you agree and acknowledge that no refunds will be issued under any circumstances.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">1. No Refund</h2>
      <p className="text-gray-600 mb-2">1.1 Final Sale: All digital educational resources, online classes, and related materials are considered final sales. Once a purchase is made, it cannot be canceled, and no refunds will be provided.</p>
      <p className="text-gray-600 mb-4">1.2 Program Enrollment: Refunds and cancellations related to program enrollment are governed by the specific Agreement signed between you (the User) and LITWITS at the time of enrollment. If there are any discrepancies between this Refund Policy and the terms outlined in the Agreement, the terms of the Agreement will take precedence.</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Access Revocation</h2>
      <p className="text-gray-600 mb-2">2.1 Policy Violation: LITWITS reserves the right to revoke access to its resources or classes if its policies are violated. Such revocation does not entitle the User to a refund.</p>
      <p className="text-gray-600 mb-4">2.2 Issue Resolution: If you encounter any issues or have concerns, please report them to us at <a href="mailto:teamlitwits@litwits.in" className="text-blue-500">teamlitwits@litwits.in</a>. We will make reasonable efforts to address and resolve your concerns.</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Policy Changes</h2>
      <p className="text-gray-600 mb-2">3.1 Modifications: LITWITS may modify this Refund Policy at its discretion. Any changes will be posted on our website and will take effect immediately upon posting.</p>
      <p className="text-gray-600 mb-4">3.2 Acceptance: Continued use of LITWITS services constitutes acceptance of any revised terms in the Refund Policy.</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Contact Information</h2>
      <p className="text-gray-600 mb-2">For any questions or issues regarding this Refund Policy, please contact us at:</p>
      <p className="text-gray-600 mb-2">LITWITS</p>
      <p className="text-gray-600 mb-2">Email: <a href="mailto:teamlitwits@litwits.in" className="text-blue-500">teamlitwits@litwits.in</a></p>
      <p className="text-gray-600 mb-2">Phone: +91 9811701747</p>
      <p className="text-gray-600">  Address: 14 Second Floor Deerwood Chase Nirvana Sector 50 Gurugram</p>
    </div>
    </>
  );
};

export default RefundPolicy;
