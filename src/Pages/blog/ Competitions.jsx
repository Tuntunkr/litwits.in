import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../../sections/Contact";
import Accordion from "react-bootstrap/Accordion";
import circleboy from "/circleboy.jpeg";

import Book from "/pen.jpeg";

function Competitions() {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>Top Debate Competitions for School Students</title>
        <meta
          name="description"
          content="Explore top school-level debate competitions around the world. Discover how students can prepare, participate, and grow through competitive debating."
        />
        <meta
          name="keywords"
          content="debate competitions, school debate, student debate tournaments, international debate, national debate competitions"
        />
        <link
          rel="canonical"
          href="https://litwits.in//blog/Understanding-Debate-Competitions"
        />
      </Helmet>

      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"></article>

          <header className="mb-8">
            <h1 className="mb-4  text-xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl">
              Top Debate Competitions for School Students
            </h1>
            <p className="text-lg text-gray-900">
              Debate competitions are more than just verbal sparring matches —
              they are rigorous intellectual arenas where young minds sharpen
              their logic, develop confidence, and voice their perspectives on
              global issues. From school auditoriums to international campuses,
              debate competitions offer students a unique opportunity to evolve
              as speakers, thinkers, and leaders. Whether you are a curious
              beginner or a seasoned team prepping for the global stage, this
              guide is your complete roadmap.
            </p>

            <div className="flex justify-center items-center mb-12">
              <img
                src={circleboy}
                alt="Different writing formats"
                className="rounded-md mt-3 h-96 w-full object-cover shadow-lg"
              />
            </div>
          </header>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Understanding Debate Competitions
            </h2>
            <p className="mb-4 text-gray-900">
              At its core, a{" "}
              <span className="font-bold">debate competition</span> is a
              structured contest where participants argue for or against a
              specific motion in front of judges and sometimes an audience.
              Unlike informal or spontaneous debates among peers, formal
              debating follows a set format, rules, and time limits. Competitors
              are judged not only on their argumentation but also on clarity,
              teamwork, logic, rebuttal, and presentation.
            </p>
            <p className="mb-4 text-gray-900">
              What distinguishes debate competitions from casual discussions is
              their emphasis on evidence-based reasoning, persuasion, and
              performance. These contests build a dynamic mix of critical
              thinking, public speaking, and performance skills — a combination
              invaluable for academic and professional
            </p>
            <p className="mb-4 text-gray-900">
              If you are new to this world, be sure to explore{" "}
              <span className="text-blue-500 underline">
                our guide on the different types of debate
              </span>
              , which explains key formats like British Parliamentary, World
              Schools, and more.
            </p>
            {/*section 2 Major Debate Championships and Tournaments to Watch*/}
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Major Debate Championships and Tournaments to Watch
            </h2>
            <p className="mb-4 text-gray-900">
              Across the globe, many prestigious school-level debating
              tournaments challenge students to think critically, speak
              convincingly, and collaborate effectively. These competitions are
              designed to engage middle and high school students, offering
              platforms where young participants can sharpen their skills,
              represent their schools, and compete internationally. Here are
              some of the most notable ones that school students can participate
              in:
            </p>
          </section>
          {/*section 3 Harvard College World Schools Invitational (USA)*/}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Harvard College World Schools Invitational (USA)
            </h2>
            <p className="mb-4 text-gray-900">
              Hosted by the Harvard College Debating Union, this is a globally
              competitive WSDC-format tournament that invites high-performing
              teams from across the world. It’s known for elite adjudication
              panels and challenging motions.
            </p>
          </section>
          {/*section 4 Yale Invitational (USA)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Yale Invitational (USA)
            </h2>
            <p className="mb-4 text-gray-900">
              Organized by Yale University's Debate Association, this
              prestigious competition welcomes national and international high
              school debaters. It is celebrated for its high standards,
              competitive intensity, and academic atmosphere. Participants
              compete across a variety of formats, including Lincoln-Douglas
              Debate, Public Forum Debate, Policy Debate, Parliamentary Debate,
              Congressional Debate, and a range of Speech Events, offering a
              comprehensive platform for diverse debating and speaking styles.
            </p>
          </section>
          {/*section 5 DOXBRIDGE World Schools Debating Championships*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              DOXBRIDGE World Schools Debating Championships
            </h2>
            <p className="mb-4 text-gray-900">
              A collaborative initiative of Debate societies from Oxford,
              Cambridge, and Harvard, DOXBRIDGE is a premier online tournament
              offering accessibility and excellence in global debating.
            </p>
          </section>
          {/*section 6 Paris WSDC (France)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Paris WSDC (France)
            </h2>
            <p className="mb-4 text-gray-900">
              Held in France and aligned with the World Schools Debating
              Championship (WSDC) structure, this prestigious event is organized
              by Sciences Po, one of Europe’s leading social science
              universities. It draws elite school teams from Europe, Asia, and
              beyond, and serves as an ideal training ground for aspiring WSDC
              participants aiming to compete at the highest levels of global
              debate.
            </p>
          </section>
          {/*section 7 Harvard National Speech and Debate Tournament*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Harvard National Speech and Debate Tournament
            </h2>
            <p className="mb-4 text-gray-900">
              The Harvard National Speech and Debate Tournament stands as one of
              the largest and most prestigious high school tournaments in the
              world. Held annually by the Harvard College Debating Union, it
              attracts thousands of students from across the U.S. and beyond,
              bringing together some of the most talented young debaters and
              speakers.
            </p>
            <p className="mb-4 text-gray-900">
              With a wide range of categories—Public Forum, Lincoln-Douglas,
              Congressional Debate, Policy Debate, Extemp, Original Oratory, and
              more—the tournament challenges students not just to speak well,
              but to think critically, collaborate effectively, and engage with
              global issues at the highest level.
            </p>
          </section>
          {/*section 8 Australasian Junior Debate Championships (AJDC)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Australasian Junior Debate Championships (AJDC)
            </h2>
            <p className="mb-4 text-gray-900">
              This Asia-Pacific regional competition is organized by various
              Australian debate councils. It provides a high-quality platform
              for junior debaters to compete across nations and cultures.
            </p>
          </section>
          {/*section 9 Prague Debate Spring (Czech Republic)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Prague Debate Spring (Czech Republic)
            </h2>
            <p className="mb-4 text-gray-900">
              Run by Open Society NGO and debate educators in Central Europe,
              this tournament is a cultural and intellectual hub, ideal for
              students seeking European exposure and rich educational dialogue.
            </p>
          </section>
          {/*section 10 Warwick Schools (UK)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Warwick Schools (UK)
            </h2>
            <p className="mb-4 text-gray-900">
              Organized by the University of Warwick Debating Society, Warwick
              Schools is one of the largest British Parliamentary (BP) style
              debate competitions for secondary school students in the UK. It
              attracts hundreds of participants and provides a high-quality
              platform for young debaters to refine their BP skills.
            </p>
          </section>
          {/*section 10 Edinburgh Juniors (UK)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Edinburgh Juniors (UK)
            </h2>
            <p className="mb-4 text-gray-900">
              Hosted by the University of Edinburgh Debates Union, Edinburgh
              Juniors is a prestigious UK-based tournament specifically for
              junior school debaters. The competition emphasizes speaker
              development, accessible motions, and a supportive learning
              environment — ideal for newer debaters entering the British
              Parliamentary format.
            </p>
          </section>
          {/*section 11 Canadian Universities' High School Nationals*/}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Canadian Universities' High School Nationals
            </h2>
            <p className="mb-4 text-gray-900">
              One of Canada’s leading secondary school debate championships,
              organized by multiple university debate unions — known for setting
              high academic and argumentative standards.
            </p>
          </section>
          {/*section 12 Columbia WSDC (USA)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Columbia WSDC (USA)
            </h2>
            <p className="mb-4 text-gray-900">
              Organized by the Columbia University Debate Society, this
              competition follows the World Schools Debating Championship (WSDC)
              format and invites high school teams from around the world. It’s
              known for its rigorous judging, challenging motions, and diverse
              international participation — making it a valuable experience for
              students preparing for global debate circuits.
            </p>
          </section>
          {/*section 13 Stanford Invitational (USA)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Stanford Invitational (USA)
            </h2>
            <p className="mb-4 text-gray-900">
              Hosted by Stanford University's Debate Society, the Stanford
              Invitational is one of the most respected U.S. high school debate
              tournaments. It features multiple debate formats, including
              Lincoln-Douglas (LD), Public Forum (PF), Parliamentary, Policy
              Debate, and Congressional Debate, offering students the chance to
              participate in the style best suited to their training and
              interests. Known for its academic depth and competitive field, it
              draws top high school talent nationwide.
            </p>
          </section>
          {/*section 14 Cambridge Asia British Parliamentary Championships*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Cambridge Asia British Parliamentary Championships
            </h2>
            <p className="mb-4 text-gray-900">
              Organized by the Cambridge Union Society in collaboration with
              regional hosts across Asia, this championship brings the British
              Parliamentary (BP) debate format to advanced high school students
              in Asia. The competition offers an academically rigorous platform
              for participants aiming to transition into university-level
              debating, with top-tier adjudication and intellectually
              challenging motions.
            </p>
          </section>
          {/*section 15 LSE Schools (UK)*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              LSE Schools (UK)
            </h2>
            <p className="mb-4 text-gray-900">
              Hosted by the London School of Economics Debate Society, LSE
              Schools is a popular UK-based BP-format competition for secondary
              school students. It combines a competitive debating environment
              with educational value, making it an ideal event for school teams
              preparing for more formal university-style formats.
            </p>
          </section>
          {/*section 16 How to Prepare for Your First Debate Competition*/}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              How to Prepare for Your First Debate Competition
            </h2>
            <p className="mb-4 text-gray-900">
              Preparation is the key to success in any debate competition. From
              refining argumentation to mastering stage presence, here are a few
              foundational steps every participant should take:
            </p>
          </section>
          {/*section 17 Train with Structured Exercises*/}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Train with Structured Exercises
            </h2>
            <p className="mb-4 text-gray-900">
              Focus on building arguments using evidence, organizing ideas
              logically, and mastering the art of rebuttal. Debate isn’t just
              about having opinions — it’s about defending them under scrutiny.
            </p>

            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Practice Through Mock Debates
            </h2>
            <p className="mb-4 text-gray-900">
              Simulated debates help students understand timing, teamwork, and
              how to respond to pressure. Practicing under real conditions
              builds fluency and confidence.
            </p>

            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Hone Your Public Speaking Skills
            </h2>
            <p className="mb-4 text-gray-900">
              Learn to control your voice, use gestures effectively, and engage
              the audience. In competitive debating, delivery matters as much as
              content.
            </p>

            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Stay Updated on Current Affairs
            </h2>
            <p className="mb-4 text-gray-900">
              Reading international news, opinion columns, and policy analysis
              builds the knowledge base needed to speak with clarity and
              authority on complex issues.
            </p>
            <p className="mb-4 text-gray-900">
              For students aiming to grow beyond their first competition, guided
              mentorship and exposure are game changers. At LITWITS, students
              prepare through consistent practice, exposure to different formats
              like World Schools, Public Forum, and British Parliamentary, and
              regular feedback from seasoned mentors. Sessions are designed to
              mirror real tournament dynamics — with motion reveals, prep time,
              timed speeches, and adjudications — helping students gradually
              build competitive readiness.
            </p>
            <p className="mb-4 text-gray-900">
              Many of our students begin with zero experience and go on to speak
              at global platforms like the Harvard, Stanford ,Yale
              invitationals, Columbia WSDC, Penn WSDC, and so on. What makes the
              difference isn’t just talent — it’s training, direction, and the
              right opportunities at the right time. We offer a curated list of
              competitions and guide each student in selecting the ones best
              suited to their goals, level, and experience — helping them
              transition from local novices to global contenders.
            </p>
          </section>
          {/*section 18 Choosing the Right Competition for Your Team*/}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Choosing the Right Competition for Your Team
            </h2>
            <p className="mb-4 text-gray-900">
              Not every tournament is right for every team — and selecting the
              right one can make all the difference in a student’s growth and
              confidence. Consider these key factors when choosing:
            </p>

            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Age and Skill Level
            </h2>
            <p className="mb-4 text-gray-900">
              Some competitions are tailored for middle school beginners, while
              others demand advanced research and rebuttal skills from seasoned
              high school debaters.
            </p>

            <h2 className="text-xl font-bold mb-4 text-gray-900">
              National vs. International
            </h2>
            <p className="mb-4 text-gray-900">
              International tournaments offer greater exposure, diverse
              competition, and global recognition — but they often require
              higher preparation intensity, language proficiency, and strategic
              depth. National and regional events are excellent for building
              foundational experience.
            </p>

            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Online vs. In-Person
            </h2>
            <p className="mb-4 text-gray-900">
              Virtual debating remains a flexible and accessible option, while
              in-person tournaments offer a richer experience through travel,
              face-to-face networking, and real-time pressure-handling.
            </p>
          </section>
          {/*section 19 How LITWITS Helps You Select the Right Competition*/}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              How LITWITS Helps You Select the Right Competition
            </h2>
            <p className="mb-4 text-gray-900">
              At <span className="font-bold">LITWITS</span>, we{" "}
              <span className="font-bold">personally guide students</span>,
              teams, and schools through the process of choosing the most
              suitable debate competitions based on:
            </p>

            <ul className="list-disc list-inside pl-6 space-y-2  text-gray-900">
              <li className="text-gray-900 font-bold text-xl">
                Age group and learning stage (USA)
              </li>
              <p className=" text-gray-900 p-3">
                We place younger or newer debaters in accessible,
                development-focused tournaments and gradually transition them
                into more competitive circuits.
              </p>
            </ul>

            <ul className="list-disc list-inside pl-6 space-y-2  text-gray-900">
              <li className="text-gray-900 font-bold text-xl">
                Skill level and growth goals
              </li>
              <p className=" text-gray-900 p-3">
                Based on student performance in training and mock debates, we
                recommend the tournaments that will challenge them just enough —
                without overwhelming them.
              </p>
            </ul>

            <ul className="list-disc list-inside pl-6 space-y-2  text-gray-900">
              <li className="text-gray-900 font-bold text-xl">
                Preferred format and exposure goals
              </li>
              <p className=" text-gray-900 p-3">
                Want to master WSDC? Or explore British Parliamentary? Or build
                a college-ready debate profile? We map competitions to long-term
                academic and personal objectives.
              </p>
            </ul>

            <ul className="list-disc list-inside pl-6 space-y-2  text-gray-900">
              <li className="text-gray-900 font-bold text-xl">
                Budget and availability
              </li>
              <p className=" text-gray-900 p-3">
                We help you choose between online vs. in-person, and regional
                vs. international, depending on your logistical needs and
                resource planning.
              </p>
            </ul>

            <ul className="list-disc list-inside pl-6 space-y-2  text-gray-900">
              <li className="text-gray-900 font-bold text-xl">
                Team or solo participation
              </li>
              <p className=" text-gray-900 p-3">
                Whether you're entering with a full team or joining solo, we
                assist in team formation, registration, mentorship, and
                tournament preparation.
              </p>
            </ul>
            <p className="mb-4 text-gray-900">
              Backed by our experience across some of the most prestigious
              debate platforms — including Yale, Stanford, and Harvard
              Invitationals, Columbia WSDC, Penn WSDC, Doxbridge WSC, Asia
              Pacific, and Indo-Pacific Championships — LITWITS guides students
              toward competitions that align with their goals, push their
              capabilities, and elevate their journey as debaters.
            </p>
          </section>

          {/*section 20 Benefits of Competing in Debate Tournaments*/}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Benefits of Competing in Debate Tournaments
            </h2>
            <p className="mb-4 text-gray-900">
              Participating in debate tournaments yields long-term benefits,
              academically and personally:
            </p>

            <ul className="list-disc list-inside pl-6 space-y-2 text-gray-900 mb-2">
              <li className="text-gray-900">
                <span className="font-bold text-xl">
                  Stronger Critical Thinking:
                </span>
                <span className="ml-1">
                  Analyzing motions, forming arguments, and anticipating
                  counterarguments sharpen analytical thinking.
                </span>
              </li>
            </ul>

            <ul className="list-disc list-inside pl-6 space-y-2 text-gray-900 mb-2">
              <li className="text-gray-900">
                <span className="font-bold text-xl">
                  Improved Public Speaking:
                </span>
                <span className="ml-1">
                  Regular practice in high-pressure environments makes students
                  more articulate and poised.
                </span>
              </li>
            </ul>

            <ul className="list-disc list-inside pl-6 space-y-2 text-gray-900 mb-2">
              <li className="text-gray-900">
                <span className="font-bold text-xl">
                  Enhanced Research Skills:
                </span>
                <span className="ml-1">
                  Debaters become skilled at evaluating sources, understanding
                  contexts, and framing arguments using evidence.
                </span>
              </li>
            </ul>

            <ul className="list-disc list-inside pl-6 space-y-2 text-gray-900 mb-2">
              <li className="text-gray-900">
                <span className="font-bold text-xl">
                  Networking Opportunities:
                </span>
                <span className="ml-1">
                  You’ll meet students from different schools, countries, and
                  cultures — a great way to broaden horizons and make lifelong
                  connections.
                </span>
              </li>
            </ul>

            <ul className="list-disc list-inside pl-6 space-y-2 text-gray-900 mb-2">
              <li className="text-gray-900">
                <span className="font-bold text-xl">
                  Stronger Academic & Personal Portfolio:
                </span>
                <span className="ml-1">
                  Debate achievements, especially at competitive platforms,
                  demonstrate initiative, intellectual curiosity, and
                  communication skills — making for standout additions to
                  college applications, scholarship essays, and professional
                  resumes.
                </span>
              </li>
            </ul>

            <p className="mt-3 mb-2 text-gray-900">
              Many debaters also find that these experiences strengthen their
              college applications and prepare them for future leadership roles.
            </p>
            <p className="mb-2 text-gray-900">
              A <span className="font-bold">debate competition</span> is much
              more than a contest — it’s a journey of discovery, discipline, and
              development. Whether you are just beginning or aiming for global
              finals, every stage builds the speaker, leader, and thinker in
              you. Choose your events wisely, train rigorously, and enjoy the
              process of growth through challenge.
            </p>
            <p className="mb-2 text-gray-900">
              Ready to step onto the debate stage?
            </p>
            <p className="mb-4 text-gray-900">
              Connect with us on [WhatsApp] or visit{" "}
              <span className="text-blue-500 underline">litwits.</span> in to
              book your trial session.
            </p>
          </section>

          {/*section 20 */}
          <section className="mb-12">
            <p className="mb-4 mt-4 text-gray-900">
              Whether you’re entering your first local event or representing
              your country at an international invitational, LITWITS ensures
              you’re fully prepared, registered, and ready to compete — with the
              right team and the right strategy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              What should I expect on tournament day?
            </h2>
            <p className="mb-4 text-gray-900">
              Expect multiple debate rounds, briefings from organizers, and
              feedback from adjudicators. Be punctual, prepared, and ready to
              adapt.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              How do I manage nerves before a competition?
            </h2>
            <p className="mb-4 text-gray-900">
              Practice consistently, visualize your success, and focus on the
              message you want to convey — not just the outcome. Breathing
              exercises also help.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Join LITWITS and Elevate Your Debate Journey
            </h2>
            <p className="mb-4 text-gray-900">
              At LITWITS, we train students for school debate competitions
              through personalized mentorship, mock rounds, and elite coaching.
              Whether you're preparing for a regional contest or targeting WSDC
              finals, we’re here to help you succeed.
            </p>
            <p className="mb-4 text-gray-900">
              Visit{" "}
              <a href="https://litwits.in" className="text-blue-600 underline">
                www.litwits.in
              </a>{" "}
              or contact us via{" "}
              <a
                href="https://wa.me/9811701747?text=Hi! I’m interested in the WSC Program. Please share details about the program and I request a free consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-semibold underline hover:opacity-80"
              >
                WhatsApp
              </a>{" "}
              at +91 9811701747 / +91 9811701747 to get started.
            </p>

            <p className="mb-4 text-gray-900">
              Contact: +91 9811701747 / +91 9811701747
            </p>
          </section>
        </div>

        <section id="faq" className="container mx-auto px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-nato pt-6 font-bold text-center text-red-700 mb-8">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <div className="p-4">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How can I register for a debate competition?
                </Accordion.Header>
                <Accordion.Body className="bg-[#890C25] text-white">
                  Usually, registration details are provided on the official
                  tournament website or through your school’s debate
                  coordinator. Each competition has its own deadlines,
                  eligibility requirements, and format guidelines — so it’s
                  important to check well in advance and be prepared.
                  <br />
                  <br />
                  At <strong>LITWITS</strong>, we handle the entire process for
                  you — from identifying the right competition based on your
                  age, skill level, and goals to:
                  <ul className="list-disc pl-5 mt-3 text-white space-y-2">
                    <li>
                      <strong>Registering students</strong> individually or as
                      part of a team
                    </li>
                    <li>
                      <strong>Forming teams</strong> for solo applicants by
                      pairing them with compatible peers
                    </li>
                    <li>
                      <strong>Training students</strong> specifically for the
                      competition’s format (WSDC, BP, PF, LD, etc.)
                    </li>
                    <li>
                      <strong>Managing logistics</strong> like registration
                      paperwork, payments, team codes, and scheduling
                    </li>
                    <li>
                      <strong>Running pre-tournament bootcamps</strong> and mock
                      rounds for targeted preparation
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </main>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default Competitions;
