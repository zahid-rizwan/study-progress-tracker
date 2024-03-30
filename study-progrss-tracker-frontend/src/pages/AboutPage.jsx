// AboutPage.js

import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="text-center py-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">About Study Progress Tracker</h1>
            </header>

            <section className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        Study Progress Tracker is your personal companion on the journey to academic success. Our platform is designed to help students, educators, and lifelong learners stay organized, motivated, and focused on their goals.
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        With Study Progress Tracker, you can effortlessly track your study sessions, set achievable goals, and gain valuable insights into your learning habits and progress over time. Whether you're preparing for exams, mastering new skills, or simply seeking personal growth, our intuitive tool is here to support you every step of the way.
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        Our team is passionate about empowering individuals to reach their full potential. We believe that education is the key to unlocking limitless opportunities, and we're committed to providing you with the tools and resources you need to succeed.
                    </p>
                </div>
            </section>

            <footer className="mt-auto text-gray-600 text-center py-8">
                <p>Contact us at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a></p>
            </footer>
        </div>
    );
};

export default AboutPage;
