import React from "react";
import studentimg from "/assets/Trophy.png";

const Services = () => {
  return (
    <section className="text-white bg-red-800 font-serif">
      {/* Uncomment Helmet if using React Helmet for SEO */}
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

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div className="space-y-2 p-4 sm:p-6 lg:p-8">
          <p className="text-sm sm:text-base leading-7 sm:leading-8">
            Professionals, PhDs, and Postgraduates from renowned institutions
            worldwide bring a wealth of expertise drawing from their
            distinguished experiences. These include judging elite tournaments
            at Yale, Harvard, Stanford Invitationals,the Debating
            Championships at Durham, Oxford, and Cambridge.
          </p>
          <p className="text-sm sm:text-base leading-7 sm:leading-8">
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
        <div className="relative group w-full md:w-[90%] mx-auto overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src={studentimg}
            alt="LITWITS mentors guiding students for academic success."
            title="LITWITS Mentors - Expert Guidance"
            aria-label="LITWITS Mentors - Expert Guidance"
            aria-describedby="Experienced mentors from Yale, Harvard, Oxford, and Cambridge provide expert coaching for students."
            className="w-full max-w-[400px] h-[340px] md:h-[400px] object-contain mx-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
