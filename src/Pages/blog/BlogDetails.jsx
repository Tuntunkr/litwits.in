// BlogDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import blogs from "/blog.jpeg";
import BN from "/BN.jpg";
import APLogo from "/AP-Logo.jpg";
// import FNOt from "/FNOt.jpegjpg";

// Dummy data (for demo purposes)
const blogData = [
  // {
  //   id: 1,
  //   title: "Introduction to the World Scholar's Cup 2025 Tournament ",
  //   date: "March 7, 2025",
  //   description:
  //     "Feeling anxious about the AP Exam 2025? Well, that’s perfectly normal. This examination can make or break one’s college applications. So, let’s get to what really matters!",
  //   image: APLogo, // High-quality image
  //   link: "post-1.html",
  // },
  // Add more blog data as needed
  {
    id: 1,
    title: "Advanced Placement Exam 2025",
    date: "March 7, 2025",
    description:
      "Feeling anxious about the AP Exam 2025? Well, that’s perfectly normal. This examination can make or break one’s college applications. So, let’s get to what really matters!",
    image: APLogo, // High-quality image
    link: "post-1.html",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="p-4 text-gray-700 font-sans">Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4 font-sans">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-2 text-gray-900">{blog.title}</h1>
      <div className="text-gray-600 text-sm mb-8">
        By Author Name - {blog.date}
      </div>

      {/* Blog Image */}
      <div className="flex justify-center items-center mb-12">
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-lg w-full md:w-1/2 h-72 object-cover shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="text-gray-700 text-lg leading-relaxed">
        <p className="mb-6 text-gray-900">
          Feeling anxious about the AP Exam 2025? Well, that’s perfectly normal.
         Advanced Placements plays a significant role in shaping one's collage application. So,
          let’s get to what really matters! You must prepare for the exam
          extensively; it is a smart approach to drill on your part to achieve
          success.
        </p>

        <p className="mb-6 text-gray-900">
          So here we are to provide you with all the information to help you
          prepare for the AP exam and ensure your chances of success. From
          expert study tips to{" "}
          <strong className="text-gray-900">
            How to Register for AP Exams 2025: A Step-by-Step Guide
          </strong>
          , we've got everything covered.
        </p>

        {/* Section: What Are AP Exams? */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          What Are AP Exams?
        </h2>
        <p className="mb-6 text-gray-900">
          You may already have a bit of a clue, but we think an explanation is
          needed here: AP exams are college-level tests conducted by the College
          Board for high school students in the US. A good passing score may
          earn you college credits or help you pass out of entry-level courses.
          Sounds sweet, doesn't it? Well, it is sweet only when you do it right.
        </p>

        <p className="mb-6 text-gray-900">
          However, these tests are nothing like typical high school
          examinations. They are deliberately crafted to challenge students'
          comfort levels, trying to test their knowledge and endurance. You can
          think of them as miniature college finals. They will confirm if you
          can handle advanced coursework competently.
        </p>

        {/* Section: Benefits of Taking AP Courses and Exams */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Benefits of Taking AP Courses and Exams
        </h2>
        {/* <div className="flex justify-center items-center mb-12">
          <img
            src={blogs} 
            alt="AP Exam Benefits Infographic"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
          />
        </div> */}
        <div className="flex justify-center items-center mb-12">
          <img
            src={blogs}
            alt={blog.title}
            className="rounded-lg w-3/4 md:w-1/2 h-72 object-cover shadow-lg"
          />
        </div>
        <ul className="list-disc list-inside mb-6 pl-5">
          <li className="mb-3">
            <strong className="text-gray-900">
              Earn College Credit and Save Money:
            </strong>{" "}
            Passing this test can translate to gaining college credit, which can
            save students time and money.
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">University Acceptance:</strong> AP
            exam scores are accepted by most universities around the globe,
            enabling students to bypass introductory-level courses.
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">
              Strengthen College Application:
            </strong>{" "}
            High AP scores add impact to an application. Admission councils see
            students taking rigorous courses as extremely ambitious
            academically.
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">Develop Essential Skills:</strong>{" "}
            This exam helps students develop essential skills such as critical
            thinking, time management, and independent study habits.
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">
              Enhance Scholarship Opportunities:
            </strong>{" "}
            Various scholarships take AP scores into account to provide
            financial aid to students when applying for funding.
          </li>
        </ul>

        {/* Section: AP Exam Schedule and Dates */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          AP Exam Schedule and Dates
        </h2>
        <p className="mb-6 text-gray-900">
          Always stay in the loop regarding the dates for the AP Exams in 2025.
          These examinations are usually set for two weeks in May, each subject
          being assigned a specific date. The 2025 AP Exams are anticipated to
          be administered from May 5-9 and May 12-16. Keep checking the official
          web page of the College Board for the final dates and to avoid clashes
          in schedules.
        </p>

        {/* Section: AP Exam Fees */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">AP Exam Fees</h2>
        <p className="mb-6 text-gray-900">
          Having clearly established their worth, it is also reasonable to add
          that AP exams are not cheap. It is thus wise to plan ahead for
          expenditures and avoid incurring any unnecessary late fees.
        </p>
        <ul className="list-disc list-inside mb-6 pl-5">
          <li className="mb-3">
            <strong className="text-gray-900">Regular fee per AP exam:</strong>{" "}
            $99 (for U.S. students)
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">International fee:</strong> $129
            (outside U.S. territories and Canada)
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">Late registration:</strong>{" "}
            Additional charges may apply
          </li>
        </ul>

        {/* Section: AP Exam Syllabus and Subjects */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          AP Exam Syllabus and Subjects
        </h2>
        <p className="mb-6 text-gray-900">
          With 38 AP subjects, undergraduate students have the flexibility to
          choose from subjects that they would like to study in relation to
          their interests and careers. Each subject’s syllabus has a standard
          curriculum according to the college courses so that students can
          easily undertake college-level work.
        </p>

        {/* Section: Popular AP Exam Subjects */}
        <h3 className="text-xl font-bold mb-4 text-gray-900">
          Popular AP Exam Subjects:
        </h3>
        <ul className="list-disc list-inside mb-6 pl-5">
          <li className="mb-3">
            <strong className="text-gray-900">STEM Fields:</strong> AP Calculus,
            AP Physics, AP Computer Science
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">Social Sciences:</strong> AP U.S.
            History, AP World History, AP Government
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">Languages and Arts:</strong> AP
            English Literature, AP Spanish, AP Studio Art
          </li>
        </ul>

        {/* Section: How to Choose AP Exam Subjects? */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          How to Choose AP Exam Subjects?
        </h2>
        <p className="mb-6 text-gray-900">
          Choosing AP exam subjects is meant to be a strategic decision that
          wouldn't bode well with both academic strengths and long-term goals.
          Consider the following:
        </p>
        <ul className="list-disc list-inside mb-6 pl-5">
          <li className="mb-3">
            Do you plan to pursue pre-med? Take{" "}
            <strong className="text-gray-900">AP Biology</strong> and{" "}
            <strong className="text-gray-900">AP Chemistry</strong>.
          </li>
          <li className="mb-3">
            Are you interested in pursuing engineering? Choose{" "}
            <strong className="text-gray-900">AP Physics</strong> and{" "}
            <strong className="text-gray-900">Calculus BC</strong>.
          </li>
          <li className="mb-3">
            Interested in law and business? Go for{" "}
            <strong className="text-gray-900">AP Economics</strong> and{" "}
            <strong className="text-gray-900">AP Comparative Government</strong>
            .
          </li>
        </ul>

        {/* Section: AP Exam Prep Resources */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          AP Exam Prep Resources
        </h2>
        <p className="mb-6 text-gray-900">
          Effective preparation requires the right resources. Here are some of
          the best tools to help you succeed:
        </p>
        <ul className="list-disc list-inside mb-6 pl-5">
          <li className="mb-3">
            <strong className="text-gray-900">
              College Board’s Official AP Classroom
            </strong>
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">YouTube Tutors</strong>
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">Review Books</strong> (Barron’s,
            Princeton Review, 5 Steps to a 5)
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">AP Study Groups</strong>
          </li>
        </ul>

        {/* Section: When to Start Studying for AP Exams? */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          When to Start Studying for AP Exams?
        </h2>
        {/* <div className="flex justify-center items-center mb-12">
          <img
            src={BN} // Replace with actual image URL
            alt="AP Exam Study Timeline"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
          />
        </div> */}
        <div className="flex justify-center items-center mb-12">
          <img
            src={BN}
            alt={blog.title}
            className="rounded-lg w-full md:w-1/2 h-72 object-cover shadow-lg"
          />
        </div>
        <p className="mb-6 text-gray-900">
          Ideally, students should begin preparing 6 months before the exam or
          no later than the mid-year, which is usually after the winter break.
          However, if time is limited, focus on high-yield topics, practice
          exams, and time-management strategies.
        </p>

        {/* Section: Conclusion */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Conclusion</h2>
        <p className="mb-6 text-gray-900">
          To wrap it up, AP Exams are not just another academic milestone; they
          are an opportunity to earn college credits, enhance your application,
          and develop essential skills for higher education. Smart preparation and strategic subject selection will significantly improve your
          performance.
        </p>
        <p className="mb-6 text-gray-900">
          So, now, go out there, ace those AP Exams, and take on your next big
          academic challenge!
        </p>

        {/* Section: FAQs */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQs</h2>
        <ul className="list-disc list-inside mb-6 pl-5">
          <li className="mb-3">
            <strong className="text-gray-900">
              How many AP Exams do I take?
            </strong>{" "}
            It depends on your academic goals and college aspirations.
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">
              Are AP Exams harder than college courses?
            </strong>{" "}
            It depends on the college and AP Exam being considered.
          </li>
          <li className="mb-3">
            <strong className="text-gray-900">
              What happens if I fail an AP Exam?
            </strong>{" "}
            You won't earn college credit, but it won't affect your high school
            GPA.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogDetails;
