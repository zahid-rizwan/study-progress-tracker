// LandingPage.jsx

import React from "react";
import Footer from "./Footer";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import MyCarousel from "./MyCarousel";

const LandingPage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        {/* <img
            className="w-full mt-1"
            src={sliderImage}
            alt=""
            style={{ height: "92vh" }}
          /> */}
        <MyCarousel />

        <section className="container mx-auto px-20 mt-12">
          <Typography
            variant="h3"
            className=" text-center text-green-700 underline"
          >
            Our Features
          </Typography>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div>
              <img
                src={sliderImage1}
                alt="Study Progress Tracker"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 px-2">
                Achieve Your Academic Goals
              </h2>
              <p class="text-gray-600 text-justify leading-relaxed mb-8 max-w-lg">
                Are you ready to take your academic journey to new heights? Our
                study progress tracker is your ultimate companion for success.
                As a student, you face unique challenges and demands. Stay
                organized, maintain focus, and track your progress effortlessly
                with our intuitive platform. From managing assignments to
                preparing for exams, we're here to support you every step of the
                way. Start your journey with us today and unlock your full
                potential.
              </p>
            </div>
          </div> */}
        </section>

        <section className="container mx-auto px-20 mt-2">
          {/* <h2 className="text-3xl font-bold mb-4">Key Features</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Study Session Tracking</h3>
              <p className="text-gray-700 ">
                Record your study sessions with ease. Keep track of subjects,
                durations, and notes for each session.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Goal Setting</h3>
              <p className="text-gray-700">
                Set and monitor your study goals. Stay motivated and accountable
                as you work towards academic success.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Progress Insights</h3>
              <p className="text-gray-700">
                Gain valuable insights into your study habits and progress.
                Identify areas for improvement and track your growth over time.
              </p>
            </div> */}
            <Card className="mt-6  p-6">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Study Session Tracking
                </Typography>
                <Typography>
                  Are you ready to take your academic journey to new heights?
                  Our study progress tracker is your ultimate companion for
                  success. As a student, you face unique challenges and demands.
                  Stay organized, maintain focus, we're here to support you
                  every step of the way. Start your journey with us today and
                  unlock your full potential.
                </Typography>
              </CardBody>
      
            </Card>
            <Card className="mt-6 p-6">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Goal Setting
                </Typography>
                <Typography>
                  Cultivate academic success with our goal setting feature,
                  allowing users to define personalized study objectives.
                  Whether aiming to complete a specific course or improve
                  performance in a subject, our platform provides the tools to
                  set, track, and achieve academic milestones effectively. it will help you to set your goal and achieve the goal.
                </Typography>
              </CardBody>
            </Card>
            <Card className="mt-6 p-6">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Progress Insights
                </Typography>
                <Typography>
                  Elevate your academic journey with progress insights, offering
                  valuable data visualizations and analytics to track study
                  habits and performance trends. With our intuitive dashboards,
                  users gain actionable insights into their progress, enabling
                  informed decisions and continuous improvement . You can see what you learnt and what will remaining .
                </Typography>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-20 m-12 ">
          {/* Content for About Section */}
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-justify">
            Welcome to Study Progress Tracker, your ultimate companion on your
            academic journey! At Study Progress Tracker, we are passionate about
            helping students achieve their educational goals by providing them
            with powerful tools to track their progress and stay organized.
          </p>
        </section>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LandingPage;
