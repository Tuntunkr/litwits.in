import { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./individualessions.css";
import PrizeSlider from "./Prize";
import Contact from "../../sections/Contact";

const GroupSess = () => {
  return (
    <section>
      <section className="container py-5">
        <div className="mb-2">
          <h2 className=" text-center fw-bold text-2xl md:text-5xl mb-5">
            WORLD SCHOLAR’S CUP TRAINING
          </h2>
          <p className="font-bold text-sm sm:text-base">
            LITWITS is at the forefront of World Scholar’s Cup training around
            the globe.
          </p>
          <p className="text-sm sm:text-base ">
            As a testament to our pursuit of excellence, LITWITS has been
            awarded the World Scholar’s Cup
            <strong> Coach of the Year Award, 2025 </strong>
            for our unmatched mentorship, academic leadership, and top rankings
            across various Regional and Global rounds, and the Grand Finale,
            Tournament of Champions at Yale University.
          </p>
        </div>
        <div className="">
          <h3 className="fw-semibold text-2xl md:text-5xl mb-2 mt-5">
            What is the World Scholar’s Cup (WSC)?
          </h3>
          <p className="text-sm sm:text-base ">
            The World Scholar’s Cup isn't just a competition. It’s a launchpad
            for global dominance.
          </p>
          <p className="text-sm sm:text-base ">
            You don’t just study a syllabus - you dive into a universe. One
            moment you’re exploring whether artists are the new explorers (“they
            just use paint instead of ships”), and the next, you’re writing
            about why some mysteries are better left unsolved. Want to challenge
            history? Try making a case for the unsung discoveries that didn’t
            make it into textbooks. Or get philosophical with a prompt like:
            “When a story tells you something, it’s also hiding something.”
          </p>
          <p className="text-sm sm:text-base ">
            And just when you think you’ve caught your breath, along comes the
            Scholar’s Bowl - where you team up, hit buzzers, and try to figure
            out how a Shakespeare quote connects to a Brooklyn Nine-Nine scene.
            Yes, that actually happens.
          </p>
          <p className="text-sm sm:text-base ">
            Oh, and did we mention the alpacas that lead to hours of high-stakes
            negotiations over color swaps, ownership, and trading rights? Let’s
            just say diplomacy has never been more rewarding.
          </p>
          <p className="text-sm sm:text-base ">
            At the end of January, every year, a new theme is released that
            tackles six interdisciplinary subjects - like
            <strong>
              History, Literature, Social Studies, Art & Music, Science,.
            </strong>{" "}
            and a wildcard <strong>Special Area</strong>. It's serious fun, and
            it's seriously rewarding when done right.
          </p>
          <strong className="text-sm sm:text-base ">
            For the 2025 WSC curriculum, click{" "}
            <span className="text-blue-500">here</span>.
          </strong>
        </div>

        <div className="">
          <h3 className="fw-semibold text-2xl md:text-5xl mb-2 mt-5">
            What are the Events of the World Scholar’s Cup?{" "}
          </h3>
          <p className="mt-2 mb-4 text-sm sm:text-base">
            Students from over 70 countries compete in four events:
          </p>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Team Debate:- </strong>
                <span style={{ marginLeft: "8px" }}>
                  {" "}
                  Speak your mind. Think on your feet.
                </span>
              </Accordion.Header>
              <Accordion.Body className="text-gray-900">
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li className="text-gray-900">
                    Three members in a team. Three debates of thrilling
                    argumentation.
                  </li>
                  <li className="text-gray-900">
                    Motions pulled from every corner of the curriculum – expect
                    the unexpected.
                  </li>
                  <li className="text-gray-900">
                    15 minutes to brainstorm, plan, and maybe panic (just a
                    little).
                  </li>
                  <li className="text-gray-900">
                    Each scholar speaks for up to 4 minutes.
                  </li>
                  <li className="text-gray-900">
                    Gadgets are permitted in the first two rounds, but not the
                    final round.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong>Collaborative Writing:-</strong>
                <span style={{ marginLeft: "8px" }}>
                  Craft brilliant essays, then make them better with your team.
                </span>
              </Accordion.Header>
              <Accordion.Body className="text-gray-900">
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li className="text-gray-900">
                    Three prompts per team—one for each curious mind.
                  </li>
                  <li className="text-gray-900">Brainstorm as a team.</li>
                  <li className="text-gray-900">
                    Draft your piece individually, then huddle again to refine
                    and review.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <strong>Scholar’s Challenge:-</strong>
                <span style={{ marginLeft: "8px" }}>
                  A deceptively tricky quiz where more than one answer seems to
                  be right.
                </span>
              </Accordion.Header>
              <Accordion.Body className="text-gray-900">
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li className="text-gray-900">
                    120 questions. 60 minutes for Regional Rounds.{" "}
                  </li>
                  <li className="text-gray-900">
                    120 questions. 75 minutes for Global Rounds.
                  </li>
                  <li className="text-gray-900">
                    Every question? Trickier than it seems.
                  </li>
                  <li className="text-gray-900">
                    Multiple answers may be correct, but fewer choices mean more
                    points.
                  </li>
                  <li className="text-gray-900">
                    A test of knowledge, intuition, and strategy.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <strong>Scholar’s Bowl:-</strong>
                <span style={{ marginLeft: "8px" }}>
                  A multimedia team quiz with music, memes, strategy, and speed.
                </span>
              </Accordion.Header>
              <Accordion.Body className="text-gray-900">
                <ul className="list-disc list-inside mb-6 pl-5">
                  <li className="text-gray-900">
                    Teams gather in the arena, armed with clickers and courage.
                  </li>
                  <li className="text-gray-900">
                    Multimedia madness: memes, music, mystery.
                  </li>
                  <li className="text-gray-900">
                    Each question digs deeper, reaching across subjects.
                  </li>
                  <li className="text-gray-900">
                    It’s fast, it’s fun, it’s wonderfully unpredictable.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <p className="mt-3 text-sm sm:text-base ">
          These events aren’t just exciting - they’re demanding. They require
          sharp thinking, smart strategy, and serious preparation.
          <br />
          <strong className="mt-1  text-sm sm:text-base ">
            LITWITS leads the way.
          </strong>
        </p>
        <p className=" text-sm sm:text-base ">
          We don’t just help you sign up - we build champions. From forming
          competitive teams to delivering top-tier World Scholar’s Cup training
          across all four events,
          <strong>LITWITS is where serious Scholars go to excel.</strong>
        </p>
        <p className="text-sm sm:text-base ">
          Because excellence isn’t luck. At{" "}
          <strong>LITWITS, excellence is a habit.</strong>
        </p>
        <div className="">
          <h3 className="fw-semibold text-2xl md:text-5xl mb-2 mt-5">
            World Scholar’s Cup Eligibility
          </h3>
          <p className="text-sm sm:text-base ">
            The World Scholar’s Cup is open to all students and{" "}
            <strong className="text-sm sm:text-base">
              LITWITS is here to make the journey easier.
            </strong>{" "}
            Whether you are signing up solo or with friends:
          </p>
          <p className="ml-5 text-sm sm:text-base">
            -<span className="ml-4">Register with LITWITS</span>
          </p>
          <p className="ml-5 ">
            -
            <span className="ml-4 text-sm sm:text-base ">
              Form a super team with the help of our diverse and talented
              student network
            </span>
          </p>
          <p className="ml-5 ">
            -
            <span className="ml-4 text-sm sm:text-base ">
              Train strategically with LITWITS, with expert guidance and
              resources tailored for every WSC event.
            </span>
          </p>
          <p className="text-sm sm:text-base ">You can participate as:</p>

          <ul className="list-disc list-inside mb-6 pl-5">
            <li className="mb-3 text-gray-900 text-sm sm:text-base">
              <strong className="text-gray-900 ">
                A school-affiliated team
              </strong>
            </li>

            <li className="mb-3 text-gray-900 text-sm sm:text-base ">
              An <strong className="text-gray-900 "> independent team </strong>{" "}
              (LITWITS will pair you with like-minded scholars to form a
              competitive team across all rounds)
            </li>
          </ul>
          <h4 className="fw-semibold text-2xl md:text-5xl mb-3 mt-5">
            <strong> Eligibility Criteria:</strong>
          </h4>
          <ul className="list-disc list-inside mb-6 pl-5">
            <li className="mb-3 text-gray-900 text-sm sm:text-base ">
              <strong>"Skittles"</strong> events are held in select countries
              for <strong>students 10 and younger only;</strong> these younger
              scholars are also welcome in the standard Junior Division.
            </li>

            <li className="mb-3 text-gray-900 text-sm sm:text-base ">
              <strong>Junior Division: </strong>Students aged 11 to 13
            </li>

            <li className="mb-3 text-gray-900 text-sm sm:text-base ">
              <strong>Senior Division:</strong> Students aged 14 and above (For
              2025: any student who turns 14 by January 1, 2025 (i.e. born
              before January 1, 2011) will be considered a senior division
              student.)
            </li>
          </ul>
          <p className="text-sm sm:text-base ">
            WSC values diversity, inclusivity, and the curiosity to engage with complex ideas.
          </p>
          <p className="text-sm sm:text-base ">
            The program is open to both new and returning participants.
          </p>
        </div>
        <div className="mb-7">
          <h3 className="font-bold fw-semibold text-2xl md:text-5xl mb-3 mt-5">
            How to Join the World Scholar’s Cup?
          </h3>
          <p className="mt-2 text-sm sm:text-base ">
            Joining the World Scholar’s Cup involves a few simple steps:
          </p>

          <ol className="list-decimal list-inside mt-2 space-y-4">
            <li className="text-gray-900">
              <strong className="text-sm sm:text-base ">
                Form a Team: If you're an individual participant, LITWITS will
                help you form one by connecting you with other interested
                students.
              </strong>
            </li>
            <li className="text-gray-900 text-sm sm:text-base ">
              <strong>Select a Regional Round:</strong> Find a round convenient
              for your location and check the registration deadlines.
            </li>
            <li className="text-gray-900 text-sm sm:text-base ">
              <strong>Register Your Team:</strong> Visit the official website to
              register. You’ll need basic team details and a payment method.
            </li>
            <li className="text-gray-900 text-sm sm:text-base ">
              <strong>Begin Preparation:</strong> Once registered, download the
              curriculum and begin studying the six subjects. Teams typically
              spend time preparing for debates, writing sessions, and the
              quiz-based events.
            </li>
            <li className="text-gray-900 text-sm sm:text-base ">
              <strong>Compete in Your Round: </strong> Attend your selected
              Regional Round. If your team qualifies, you can progress to the
              Global Rounds.
            </li>
            <li className="text-gray-900 text-sm sm:text-base ">
              <strong>Advance to the Tournament of Champions: </strong> Teams
              that excel at Globals shall be invited to participate at Yale.
            </li>
          </ol>
        </div>
        <div className="mb-3">
          <h4 className="fw-semibold text-2xl md:text-5xl mb-3 mt-5">
            LITWITS: Your Official Launchpad to WSC Success
          </h4>
          <p className="text-sm sm:text-base ">
            <strong>
              If you’re serious about the World Scholar’s Cup, LITWITS is your
              destination.
            </strong>
          </p>
          <p className="text-sm sm:text-base ">
            We’re not here to spoon-feed facts or toss you a syllabus and wish
            you luck. We’re here to make you fall in love with learning, and
            turn you into the kind of scholar who walks into a debate room or
            writing hall knowing exactly what to do.
          </p>
          <p className="text-sm sm:text-base ">
            Whether you're just starting your WSC journey or aiming for that
            Yale podium,
            <strong> LITWITS is where preparation meets transformation.</strong>
          </p>
          <p className="text-sm sm:text-base ">
            You shall discover that debate can be thrilling, writing can be
            powerful, and even the trickiest multiple-choice questions can feel
            like a game when you know how to think, not just what to remember.
          </p>
          <p className="text-sm sm:text-base ">
            At LITWITS, preparation isn’t about stress or feeling overwhelmed.
            It’s about building mastery through momentum - bit by bit, session
            by session - until performance becomes second nature. You’ll get the
            structure, strategy, and community you need to not just survive WSC,
            but to thrive in it. To walk into any round and say, “I’ve got
            this.”
          </p>
          <p className="text-sm sm:text-base ">
            Because we don’t just teach. We train, team up, mentor, and guide.
          </p>
          <h4 className="fw-semibold text-2xl md:text-5xl mb-3 mt-5">
            Here’s what you get with us:
          </h4>
          <p className="text-sm sm:text-base ">
            <strong>Engaging, high-energy sessions</strong>
          </p>
          <p className="text-sm sm:text-base ">
            We don’t do boring! Our classes are part discussion, part
            exploration, part “wait, how did we just talk for an hour about time
            travel and war ethics?” Every session is structured but never stiff.
            Whether we're breaking down the latest topic update, reacting to
            wild hypothetical debates, or workshopping an essay in real time,
            students are in it - asking questions, challenging each other, and
            building ideas that actually stick.
          </p>
          <p className="text-sm sm:text-base">
            We take big topics and make them feel personal. Thought experiments,
            real-world applications, open-floor debates - it’s a classroom where
            curiosity doesn’t just survive, it thrives. Students leave sessions
            not just more informed, but more excited to keep learning.
          </p>
          <h4 className="fw-semibold text-2xl md:text-5xl mb-3 mt-4">
            <strong>A strong, smart community</strong>
          </h4>
          <p className="text-sm sm:text-base ">
            This isn’t a solo journey. At LITWITS, you’re surrounded by a tribe
            of thinkers, speakers, writers, and world-class overthinkers (in the
            best way possible). You'll meet students from across cities,
            countries, and backgrounds, all united by a shared love for learning
            and a genuine desire to grow.
          </p>
          <p className="text-sm sm:text-base ">
            We’ve had teams that started as strangers and ended up celebrating
            wins together at Yale. We've watched in-session debate prep turn
            into lifelong friendships. It’s the kind of community where you’re
            challenged to do better, and cheered on when you do.
          </p>
          <h4 className="fw-semibold text-2xl md:text-5xl mb-3 mt-4">
            Expert feedback that actually helps
          </h4>
          <p className="text-sm sm:text-base ">
            We don’t believe in sugarcoating or vague compliments. When we say
            “great point,” we’ll tell you why it worked. And when something
            needs improvement, we don’t leave you guessing; we show you exactly
            how to strengthen it.
          </p>
          <p className="text-sm sm:text-base ">
            From dissecting your arguments line by line to helping you reframe
            an entire essay intro, our mentors provide detailed, actionable, and
            personalized feedback that builds your skills without breaking your
            confidence. It’s high standards with high support because that’s
            what growth really looks like.
          </p>
          <h4 className="fw-semibold text-2xl md:text-5xl mb-3 mt-4">
            Practice that feels purposeful
          </h4>
          <p className="text-sm sm:text-base ">
            We believe prep should feel less like “more work” and more like
            “real progress.” That’s why we simulate actual WSC rounds, run team
            quizzes, host mock debates, and assign writing prompts that make
            your brain do somersaults in the best way possible.
          </p>
          <p className="text-sm sm:text-base ">
            You’ll learn how to manage pressure, pace yourself during
            challenges, and handle curveballs mid-debate. And every single task
            is backed by strategy, so you know why you’re doing what you’re
            doing.
          </p>
          <h4 className="fw-semibold text-2xl md:text-5xl mb-3 mt-4">
            Results without burnout
          </h4>
          <p className="text-sm sm:text-base ">
            Yes, we aim high for excellence. But we also keep things human. We
            help students plan their prep smartly, balancing consistency with
            mental bandwidth. Whether you’re juggling school exams or just
            having an off day, we make the journey sustainable, without ever
            compromising on excellence.
          </p>
        </div>
        <div className="mb-7">
          <h3 className="fw-semibold text-2xl md:text-5xl mb-3 mt-5">
            And yes, we have the resources you’ve been looking for:
          </h3>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-4">
            <li className="text-gray-900">
              <strong className="text-xl md:text-2xl mb-3 mt-4 block">
                WSC Curriculum Document
              </strong>
              <p className="text-sm sm:text-base mt-2">
                We don’t just tell you to “go study the syllabus.” We break it
                down for you. Our curriculum documents are detailed, topic-wise
                study guides packed with clear explanations, memorable examples,
                and revision-friendly layouts. Whether you need a quick refresh
                before Global or a deep dive into obscure concepts, this is your
                go-to manual.
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="text-xl md:text-2xl mb-3 mt-4 block">
                WSC Quiz Document
              </strong>
              <p className="text-sm sm:text-base mt-2">
                Topic-wise practice quizzes that mimic the Scholar’s Challenge
                in tone and trickiness. Perfect for brushing up, revision, and
                realizing just how much you didn’t know before (and how much you
                can master with the right prep).
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="text-xl md:text-2xl mb-3 mt-4 block">
                WSC Writing Prompts Document
              </strong>
              <p className="text-sm sm:text-base mt-2">
                A bank of creative and argumentative prompts across themes. Use
                them to brainstorm, practice team writing, or just embrace the
                chaos of trying to craft a thesis in 20 minutes. Writing under
                pressure has never felt this doable or this fun.
              </p>
            </li>
            <li className="text-gray-900">
              <strong className="text-xl md:text-2xl mb-3 mt-4 block">
                WSC Debate Motions Document
              </strong>
              <p className="text-sm sm:text-base mt-2">
                A carefully curated list of WSC-style motions, complete with
                framing suggestions, prep angles, and unexpected twists. Ideal
                for mock rounds, solo practice, or that pesky voice in your head
                that often whines, “I have no idea what to say!”
              </p>
            </li>
          </ul>
          <h3 className="fw-semibold text-2xl md:text-5xl mb-3 mt-5">
            LITWITS Achievements at the World Scholars Cup
          </h3>
          <p className="text-sm sm:text-base ">
            Let’s just say our trophy shelves are crowded. A few highlights:
          </p>
          <section className="container-fluid p-0 mb-4">
            <PrizeSlider />
          </section>

          <p className="text-sm sm:text-base leading-7 sm:leading-8">
            Learn more about our achievements in WSC:
            <a href="/public/WSCimages/LITWITSACHIEVEMENTS.pdf" download>
              <span className="text-blue-500 "> click here </span>
            </a>
          </p>
          <h3 className="fw-semibold text-2xl md:text-5xl mb-3 mt-5">
            What’s it like to be part of LITWITS?
          </h3>
          <p className="text-sm sm:text-base ">
            It’s intense, yes, but also highly rewarding. One day you’ll be
            untangling philosophical dilemmas. Next, you’ll be laughing your way
            through mock debates about whether emojis are destroying language.
          </p>
          <p className="text-sm sm:text-bas">
            Students grow more confident, more articulate, and more curious with
            zero pressure to be perfect. Just the right push to be excellent.
          </p>
          <p className="text-sm sm:text-base">
            And parents, you’ll see your child develop skills that matter way
            beyond the competition: critical thinking, teamwork, communication,
            time management, and a genuine love for learning. Not to mention the
            confidence that comes from owning a room with your ideas.
          </p>
        </div>
        <h3 className="fw-semibold text-2xl md:text-5xl mb-3 mt-5">
          What are you waiting for?
        </h3>
        <p className="text-sm sm:text-base">
          Whether you're forming your first team or chasing Yale, we’ve got your
          back.
        </p>
        <ul className="list-disc list-inside mb-2 pl-5">
          <li className="mb-2 text-gray-900 text-sm sm:text-base ">
            Need help finding teammates?
          </li>
          <li className="mb-2 text-gray-900 text-sm sm:text-base">
            Want to join our discovery session?
          </li>
          <li className="mb-2 text-gray-900 text-sm sm:text-base">
            Curious to see our schedule or resource samples?
          </li>
        </ul>
      </section>
      <section className="">
        <Contact />
      </section>
    </section>
  );
};

export default GroupSess;
