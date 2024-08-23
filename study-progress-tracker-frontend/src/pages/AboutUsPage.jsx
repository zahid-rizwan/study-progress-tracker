import React from "react";
import sliderImage from "../assets/abt-img.jpg";
import sliderImage1 from "../assets/prg1.jpg";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <div className="w-full">
      <img className="w-full" src={sliderImage1} style={{ height: "30vh" }} />
      <section className="container mx-auto pt-16 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={sliderImage}
              alt="Study Progress Tracker"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-0">About us</h2>
            <p class="text-gray-600 text-justify leading-relaxed mb-8 max-w-lg">
              Study Progress Tracker offers a comprehensive overview of the
              platform, its mission, team, development process, technology
              stack, contact information, and future plans. It introduces the
              Study Progress Tracker's purpose and main features, emphasizing
              the importance of tracking study progress for academic success.
              The page highlights the dedicated team behind the platform,
              providing insights into their roles and expertise. Additionally,
              it discusses the development journey, challenges faced, and key
              milestones achieved. Information about the technology stack used
              is also provided. Visitors can easily reach out to the Study
              Progress Tracker team through various contact methods.
              Testimonials from satisfied users may be included to showcase the
              platform's effectiveness. Future plans and potential updates are
              outlined, inviting visitors to explore the platform further and
              join the community.
            </p>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>

  );
};

export default AboutUsPage;
