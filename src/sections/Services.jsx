import React from "react";
import studentimg from "/assets/litwits-mentors.avif";

const Services = () => {
  return (
    <section className="text-white bg-red-800 font-serif">
      {/* <Helmet>
        <title>Expert Mentorship - LITWITS</title>
        <meta name="description" content="Learn from professionals, PhDs, and postgraduates from top institutions worldwide with LITWITS." />
        <meta name="keywords" content="LITWITS, mentorship, education, debating, research, public speaking, expert guidance" />
        <meta property="og:title" content="Expert Mentorship - LITWITS" />
        <meta property="og:description" content="Our mentors bring expertise from Yale, Harvard, Oxford, and more to empower students with knowledge and skills." />
        <meta property="og:image" content={studentimg} />
        <meta property="og:url" content="https://litwits.in/services" />
        <link rel="canonical" href="https://litwits.in/services" />
      </Helmet> */}

      <style>
        {`
          @media (min-width: 768px) {
            .md\:text-base {
              font-size: 16px;
              line-height: 24.5px;
            }
          }
        `}
      </style>
      <div className="container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
        <div className="space-y-6 bg-opacity-50 p-8 rounded-lg">
          <p className="leading-8">
            Professionals, PhDs, and Postgraduates from renowned institutions
            worldwide bring a wealth of expertise drawing from their
            distinguished experiences. These include judging elite tournaments
            at Yale, Harvard, Stanford Invitationals, and the Debating
            Championships at Durham, Oxford, and Cambridge.
          </p>
          <p className="leading-8">
            Their accomplishments span serving as UN Millennium Fellows,
            collaborating with Members of Parliament and legislative bodies,
            working as Research Assistants to professors at leading
            universities, presiding over debate and quiz societies, teaching at
            prestigious institutions, publishing in esteemed academic journals,
            and gaining invaluable insights through internships at top legal
            firms.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="bg-gray-200 w-full h-72 md:w-[85%] md:h-96">
            <img
              src={studentimg}
              alt="LITWITS mentors guiding students for academic success."
              title="LITWITS Mentors - Expert Guidance"
              aria-label="LITWITS Mentors - Expert Guidance"
              aria-describedby="Experienced mentors from Yale, Harvard, Oxford, and Cambridge provide expert coaching for students."
              className="absolute bottom-0 right-0 w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
